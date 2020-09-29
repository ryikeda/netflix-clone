import React, { useState } from "react";
import "./MovieRow.css";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleBeforeArrow = () => {
    let offset = scrollX + Math.round(window.innerWidth / 2);
    if (offset > 0) {
      offset = 0;
    }
    setScrollX(offset);
  };
  const handleNextArrow = () => {
    let offset = scrollX - Math.round(window.innerWidth / 2);
    const rowWidth = items.results.length * 150;
    if (window.innerWidth - rowWidth > offset) {
      // -60 is the padding to stop at the last one
      offset = window.innerWidth - rowWidth - 60;
    }

    setScrollX(offset);
  };
  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div className="MovieRow-before" onClick={handleBeforeArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="MovieRow-next">
        <NavigateNextIcon style={{ fontSize: 50 }} onClick={handleNextArrow} />
      </div>
      <div className="MovieRow-listarea">
        <div
          className="MovieRow-list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((movie) => (
              <div className="MovieRow-movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                ></img>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
