import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { logoutUser, isAuthenticated } = useUser();
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="d-felx">
        <Link className="btn btn-dark" to="/ ">
          Inicio
        </Link>
        <Link className="btn btn-dark" to="/crear">
          Crear Usuario
        </Link>
        {isAuthenticated ? (
          <button
            className="btn btn-danger"
            onClick={(event) => {
              event.preventDefault();
              logoutUser();
            }}
          >
            Cerrar Sesión
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
