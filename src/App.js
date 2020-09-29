import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css";

import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";

/*
App Structure:

 Header
  Featured Movie
  Lists
   Originals
   Recommended
   Top Rated
   Action
   Comedy
   Horror
   Romance
   Documentaries 
 Footer
*/

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [darkHeader, setDarkHeader] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      // Get full movies list
      const list = await Tmdb.getMoviesList();
      setMoviesList(list);

      // Filter featured movie
      const featured = list.filter((i) => i.slug === "originals");
      const randomPick = Math.floor(
        Math.random() * (featured[0].items.results.length - 1)
      );
      const chosen = featured[0].items.results[randomPick];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedMovie(chosenInfo);
    };
    loadData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="App">
      <Header darkHeader={darkHeader} />
      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}

      <section className="App-lists">
        {moviesList.map((category) => (
          <MovieRow
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
