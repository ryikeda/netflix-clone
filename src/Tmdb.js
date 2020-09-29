/* Handles API calls*/

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "0ac387581772dda1f4d5545db27281c3";

/*
 - trending
 - top rated
 - action
 - comedy
 - horror
 - romance
 - documentaries
*/

const fetchData = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const json = await res.json();
  return json;
};

export default {
  getMoviesList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await fetchData(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Trending",
        items: await fetchData(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await fetchData(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetchData(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await fetchData(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await fetchData(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await fetchData(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await fetchData(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await fetchData(`/movie/${movieId}?api_key=${API_KEY}`);
          break;
        case "tv":
          info = await fetchData(`/tv/${movieId}?api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
