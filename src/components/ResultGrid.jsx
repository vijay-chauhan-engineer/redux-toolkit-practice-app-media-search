import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
  clearResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, error } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(clearResults());
        dispatch(setLoading());

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link || "",
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          const response = await fetchGif(query);
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_width_small.url,
            src: item.images.original.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1 className="text-red-500">Error: {error}</h1>;

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item, idx) => (
          <ResultCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;