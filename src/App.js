import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css";

import MovieRow from "./components/MovieRow";

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

  useEffect(() => {
    const loadData = async () => {
      // Get full movies list
      const list = await Tmdb.getMoviesList();
      setMoviesList(list);
    };
    loadData();
  }, []);
  return (
    <div className="App">
      <section className="lists">
        {moviesList.map((category) => (
          <MovieRow
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
