import { useState } from "react";

function SearchBar({ onEmitValue }) {
  const [inputvalue, setInputvalue] = useState("");

  return (
    <div className="columns">
      <input
        type="text"
        placeholder="Search for Animals:"
        className="input"
        value={inputvalue}
        onChange={(e) => {
          setInputvalue(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          onEmitValue(inputvalue);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
