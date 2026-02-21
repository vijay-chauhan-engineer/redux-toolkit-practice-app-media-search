import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function submitHandle(e) {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <form
        onSubmit={submitHandle}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-4 sm:p-5"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full bg-white/80 text-black placeholder-gray-500 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg transition"
          type="text"
          placeholder="Search photos, videos, gifs..."
        />

        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition active:scale-95 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-medium shadow-md">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;