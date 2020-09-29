import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState();

  useEffect(() => {
    const loadData = async () => {
      // Get full movies list
      const list = await Tmdb.getMoviesList();
      setMoviesList(list);
    };
    loadData();
  }, []);
  return <div className="App"></div>;
}

export default App;
