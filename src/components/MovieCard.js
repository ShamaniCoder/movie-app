import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import FavoriteIcon from "../assests/FavoriteIcon";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({
  title,
  poster_path,
  overview,
  vote_average,
  id
}) => {
  const { currentUser, favoriteMovies, setFavoriteMovies } = useContext(Context);
  let navigate = useNavigate();
  const favorite = favoriteMovies?.some((item) => item.id === id);
  console.log(favorite);

  const addToFavorite = () => {
    if (favorite) {
      const filteredMovies = favoriteMovies.filter((item) => item.id !== id);
      setFavoriteMovies(filteredMovies);

      localStorage.setItem("favoriteMovie", JSON.stringify(filteredMovies));
    } else {
      setFavoriteMovies([
        ...favoriteMovies,
        { title, poster_path, overview, vote_average, id },
      ]);
      localStorage.setItem(
        "favoriteMovie",
        JSON.stringify([
          ...favoriteMovies,
          { title, poster_path, overview, vote_average, id },
        ])
      );
    }
  };
  return (
    <div className="movie">
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt=""
        onClick={() =>
          currentUser ? navigate("/details/" + id) : alert("Please login")
        }
      />
      <div className="d-flex align-items-center justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <div className="d-flex align-items-center">
            <FavoriteIcon onClick={addToFavorite} favorite={favorite} />
            <span
              className={`tag ${
                vote_average >= 8
                  ? "green"
                  : vote_average >= 6
                  ? "orange"
                  : "red"
              }`}
            >
              {vote_average}
            </span>
          </div>
        )}
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
