import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ movie }) => {
  const airDate = new Date(movie.first_air_date);
  const genres = [];
  for (let i in movie.genres) {
    genres.push(movie.genres[i].name);
  }

  return (
    <section
      className="FeaturedMovie"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="FeaturedMovie-overlay-y">
        <div className="FeaturedMovie-overlay-x">
          <div className="FeaturedMovie-name">{movie.original_name}</div>
          <div className="FeaturedMovie-info">
            <div className="FeaturedMovie-rating">
              {movie.vote_average} points{" "}
            </div>
            <div className="FeaturedMovie-year">{airDate.getFullYear()}</div>
            <div className="FeaturedMovie-seasons">
              {movie.number_of_seasons} season
              {movie.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="FeaturedMovie-overview">{movie.overview}</div>
          <div className="FeaturedMovie-buttons">
            <a href={`/watch/${movie.id}`}>► Watch</a>
            <a href={`/add/${movie.id}`}>+ PLaylist</a>
          </div>
          <div className="FeaturedMovie-genre">
            <strong>Genre: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
