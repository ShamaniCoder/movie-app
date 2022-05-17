import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favoriteMovie")) || []
  );

  console.log(JSON.parse(localStorage.getItem("favoriteMovie")));

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <Context.Provider
      value={{ currentUser, favoriteMovies, setFavoriteMovies }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
