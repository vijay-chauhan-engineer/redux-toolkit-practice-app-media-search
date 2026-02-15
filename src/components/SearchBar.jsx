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
    <div>
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="flex bg-gray-900 gap-5 p-10"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className=" w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
        />
        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
