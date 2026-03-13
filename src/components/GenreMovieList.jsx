import genresList from "../constants/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div className="pb-10">
      {genresList.genere.slice(0, 4).map((item) => (
        <div key={item.id} className="md:px-8 px-2 mt-6">
          <h2 
            className="text-xl font-medium text-gray-100 ml-3" 
            style={{ fontFamily: 'Poppins' }}
          >
            {item.name}
          </h2>
          <MovieList genreId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;