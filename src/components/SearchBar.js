import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";
import data from "../Data.json";

function SearchBar() {
  const [filterResult, setFilterResult] = useState("");

  const handler = (e) => {
    const searchWord = e.target.value;
    const filter = data.filter((key) => {
      return key.toolName.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === "" ? setFilterResult("") : setFilterResult(filter);
  };

  return (
    <div className="search_container">
      <div className="search_bar">
        <FiSearch id="search_icon" />
        <input placeholder="Search Tools" type="text" onChange={handler} />
      </div>

      {filterResult.length !== 0 && (
        <div className="searchResults">
          {filterResult.slice(0, 2).map((key, value) => {
            return (
              <a
                href={key.webpage}
                className="searchData"
                target="_blank"
                rel="noopener"
              >
                <p>{key.toolName}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
