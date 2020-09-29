import React from "react";

const MovieRow = ({ title, items }) => {
  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div className="MovieRow-listarea">
        {items.results.length > 0 &&
          items.results.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
              key={movie.id}
            ></img>
          ))}
      </div>
    </div>
  );
};

export default MovieRow;
