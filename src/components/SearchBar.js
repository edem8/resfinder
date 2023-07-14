import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search_bar">
      <FiSearch id="search_icon" />
      <input placeholder="Search Tools" />
    </div>
  );
}

export default SearchBar;
