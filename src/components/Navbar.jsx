import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { logoutUser, isAuthenticated, user } = useUser();
  return (
    <div className="navbar navbar-dark bg-dark p-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        {isAuthenticated ? (
          <h2 className="" style={{ color: "white" }}>
            Bienvenido {user.Nombre} {user.Rol}
          </h2>
        ) : (
          <div>
            <Link className="btn btn-dark" to="/">
              Inicio
            </Link>
            <Link className="btn btn-dark" to="/crear">
              Crear Usuario
            </Link>
          </div>
        )}

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
