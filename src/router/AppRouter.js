import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import FavoriteMoviePage from "../pages/FavoriteMoviePage";

const AppRouter = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/favorites" element={<FavoriteMoviePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/details/:id" element={<MovieDetail />}/>
        </Routes>
    </Router>
)
};

export default AppRouter;
