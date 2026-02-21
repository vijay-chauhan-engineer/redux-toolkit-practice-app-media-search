import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const suggestions = ["Nature", "Technology", "Cars", "Anime"];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      {/* Search Bar Always Visible */}
      <SearchBar />

      {query === "" ? (
        <div className="relative flex flex-col items-center justify-center text-center px-4 py-24">
          
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Discover Stunning Visuals
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl text-lg">
            Search from thousands of high-quality photos, videos, and gifs.
            Start exploring creativity now.
          </p>

          {/* Suggestion Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => dispatch(setQuery(item))}
                className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  );
};

export default HomePage;