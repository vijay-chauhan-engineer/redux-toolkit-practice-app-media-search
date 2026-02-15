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

  // 🔥 THIS WAS MISSING
  const { query, activeTab, results, error } = useSelector(
    (state) => state.search,
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
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => (
        <div key={idx}>
          <ResultCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
