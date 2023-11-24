import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

function FormularioProductos() {
  const { isAuthenticated, user, loading } = useUser();

  if (loading) return <h1>Cargando</h1>;

  console.log(user);

  if (!isAuthenticated) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="text-center p-5"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "8px",
          }}
        >
          <h1>No has iniciado sesión</h1>
          <Link to="/" className="btn btn-primary mt-3">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  if (user.Rol === "cliente") {
    return (window.location.href = "/Ventas");
  }

  return <div>FormularioProductos</div>;
}

export default FormularioProductos;
