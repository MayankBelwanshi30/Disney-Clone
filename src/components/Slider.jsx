import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movielist, setMovielist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === movielist.length - 1 ? 0 : prev + 1));
    }, 10000);
    
    return () => clearInterval(interval);
  }, [movielist.length]);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        if (resp.data.results.length > 0) {
          setMovielist(resp.data.results);
        }
      })
      .catch((err) => console.error("Error fetching movies:", err));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movielist.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movielist.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movielist.map((movie, index) => (
          <div 
            key={index}
            className="min-w-full h-[200px] md:h-[400px] flex-shrink-0 relative"
          >
            <img
              src={IMAGE_BASE_URL + movie.backdrop_path}
              alt="movie_poster"
              className="w-[98%] m-auto h-full object-cover object-left-top rounded-2xl 
                         border-4 border-transparent hover:border-white hover:scale-[0.98] 
                         transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex md:space-x-4 space-x-2 z-10">
        {movielist.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`md:w-2 md:h-2 w-1 h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            } hover:bg-white`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-4 pr-2 py-1.5 top-1/2 -translate-y-1/2 z-10 hover:bg-black/50 text-white p-1 rounded-full"
      >
        <HiChevronLeft size={60} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-4 pl-2 py-1.5 top-1/2 -translate-y-1/2 z-10 hover:bg-black/50 text-white p-1 rounded-full"
      >
        <HiChevronRight size={60} />
      </button>
    </div>
  );
};

export default Slider;