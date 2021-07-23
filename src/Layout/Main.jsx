import React, { useEffect, useState } from "react";
import "../Layout/Main.css";

export default function Main(props) {
  const [search, setSearch] = useState();
  const [newArr, setNewArr] = useState([]);

  // Update the search value when user enter text in search box.
  const handleOnChange = e => {
    setSearch(e.target.value);
  };

  // Filter props.array to new array when user press Enter in search box.
  const handleOnKeyDown = e => {
    if (e.key === "Enter") {
      window.parent.postMessage({ type: "search", value: search }, "*");
    }
  };

  useEffect(() => {
    const msgEent = window.addEventListener("message", e => {
      if (e.origin === "https://www.ikea.co.il") {
        setNewArr(e.data.results);
      }
    });
    return () => window.removeEventListener("message", msgEent);
  }, []);

  return (
    <main className="main container">
      <div className="search__block">
        <input
          onKeyDown={handleOnKeyDown}
          onChange={handleOnChange}
          value={search}
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
