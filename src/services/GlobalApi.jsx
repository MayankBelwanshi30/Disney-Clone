

import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";


const api_key = "d5a7165bc139800bb96ca3bc27d0223d";

const api = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: api_key
  },
  timeout: 5000
});

const getTrendingVideos = () => 
  api.get("/trending/all/day");

const getMovieByGenreId = (id) => 
  api.get("/discover/movie", {
    params: {
      with_genres: id
    }
  });

export default {
  getTrendingVideos,
  getMovieByGenreId
};
 