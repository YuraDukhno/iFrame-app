import React from "react";
import { useState, useEffect } from "react";
import "../Layout/Main.css";

export default function Main(props) {
  const [search, setSearch] = useState();
  const [newArr, setNewArr] = useState([]);

  // Update the search value when user enter text in search box.
  const handleOnChange = element => {
    setSearch(element.target.value);
  };

  // Filter props.array to new array when user press Enter in search box.
  const handleOnKeyDown = element => {
    if (element.key === "Enter") {
      setNewArr(props.arr.filter(element => element.imgAlt.includes(search)));
    }
  };

  return (
    <main className="main container">
      <div className="search__block">
        <input
          onKeyDown={handleOnKeyDown}
          onChange={handleOnChange}
          className="search"
          type="search"
          placeholder="Place text here"
        />
      </div>
      <div className="images__list">
        {newArr.length > 0
          ? newArr.map(item => (
              <div className="item">
                <img src={item.imgSrc} alt={item.imgAlt} />
                <div className="description">{item.imgAlt}</div>
              </div>
            ))
          : null}
      </div>
    </main>
  );
}
