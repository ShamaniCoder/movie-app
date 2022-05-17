import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { Context } from "../context/Context";

const Navbar = () => {
  const { currentUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-baseline">
            {currentUser ? (
              <>
                <Link to={"/favorites"} className="navbar-brand text-danger bg-light rounded-pill p-2">
                  <h4>Favorites</h4>
                </Link>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
              </>
            ) : (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            {currentUser ? (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => logOut()}
              >
                Logout
              </button>
            ) : (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
