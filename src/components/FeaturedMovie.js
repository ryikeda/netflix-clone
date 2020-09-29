import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ movie }) => {
  const airDate = new Date(movie.first_air_date);
  // make overview smaller if necessary
  let overview = movie.overview;
  if (overview.length > 200) {
    overview = overview.substring(0, 200) + "...";
  }
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
          <div className="FeaturedMovie-overview">{overview}</div>
          <div className="FeaturedMovie-buttons">
            <a href={`/netflix-clone`} className="FeaturedMovie-watchbutton">
              ► Watch
            </a>
            <a href={`/netflix-clone`} className="FeaturedMovie-playlistbutton">
              + Playlist
            </a>
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
