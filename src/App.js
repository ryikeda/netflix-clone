import React, { useEffect } from "react";
import Tmdb from "./Tmdb";
import "./App.css";

function App() {
  useEffect(() => {
    const loadData = async () => {
      // Get full movies list
      const moviesList = await Tmdb.getMoviesList();
      console.log(moviesList);
    };
    loadData();
  }, []);
  return <div className="App">Initial setup</div>;
}

export default App;
