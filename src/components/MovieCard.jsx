/* eslint-disable react/prop-types */
import { useState } from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Changed to w500 for better quality

const MovieCard = ({ movie }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="w-40 shrink-0 h-55 ml-3 rounded-[12px] 
                         border-3 border-transparent hover:border-gray-400 hover:scale-[1.02] 
                        hover:scale-105 transition-all duration-300 relative group"
    >
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="animate-pulse">Loading...</div>
        </div>
      )}
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title || "Movie poster"}
        className={`w-full h-full object-cover rounded-[10px] ${
          imageLoading ? "opacity-0" : "opacity-100"
        } group-hover:brightness-110`}
        onLoad={() => setImageLoading(false)}
        onError={() => {
          setImageError(true);
          setImageLoading(false);
        }}
      />
      {imageError && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-center p-2">
            Image not available
          </span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
