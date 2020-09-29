import React from "react";
import "./MovieRow.css";

const MovieRow = ({ title, items }) => {
  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div className="MovieRow-listarea">
        <div className="MovieRow-list">
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
