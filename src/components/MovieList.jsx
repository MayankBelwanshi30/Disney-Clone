/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {  // Changed prop name from 'id' to 'genreId' for clarity
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    setLoading(true);
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        // Filter out movies without posters and limit to 10 results
        const filteredMovies = resp.data.results
          .filter(movie => movie.poster_path)
          .slice(0, 10);
        setMovieList(filteredMovies);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="flex overflow-x-auto scrollbar-hide"> {/* Changed scrollbar class */}
      <div className="flex h-65 items-center gap-2">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;