import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ movie }) => {
  return (
    <section className="FeaturedMovie">
      <div>{movie.original_name}</div>
    </section>
  );
};

export default FeaturedMovie;
