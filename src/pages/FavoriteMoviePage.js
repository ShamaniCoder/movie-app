import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { Context } from "../context/Context";

const FavoriteMoviePage = () => {
  const { favoriteMovies } = useContext(Context);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {favoriteMovies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
      {favoriteMovies.length === 0 && <h4 style={{ marginTop: '100px' }}>There is no fav movie</h4>}
    </div>
  );
};

export default FavoriteMoviePage;
