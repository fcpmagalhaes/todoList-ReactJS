import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue("");
    console.log("search");
  };

  const handleInput = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "720px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Search..."
          style={{
            outline: "none",
            border: "none",
            padding: "8px 16px",
            flex: "1",
          }}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "white",
            border: "none",
            borderLeft: "1px solid black",
            padding: "0 16px",
            cursor: "pointer",
          }}
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
