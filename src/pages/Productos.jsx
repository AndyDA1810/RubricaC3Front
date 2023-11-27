import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
// import { EliminarProducto } from "../api/login";
import { useProductos } from "../context/ProductosContext";

const Productos = () => {
  const { isAuthenticated, user, loading } = useUser();
  const { getProductos, productos, handleDelete } = useProductos();

  useEffect(() => {
    getProductos();
  }, []);

  if (loading) return <h1>Cargando</h1>;

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

  if (productos === null) {
    return <h1>Cargango</h1>;
  }

  // const handleDelete = async (id) => {
  //   try {
  //     const response=await EliminarProducto
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="container">
      <div className="row">
        <a href="/productos/crear" className="btn btn-outline-primary mt-3">
          CREAR UN PRODUCTO
        </a>

        {productos.map((producto) => {
          return (
            <div className="col-md-4 mt-5" key={producto.Codigo}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{producto.Nombre}</h5>
                  <p className="card-text">{producto.Descripcion}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${producto.Precio}
                  </p>
                  <p className="card-text">
                    <strong>Stock:</strong> {producto.Stock}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      className="btn btn-outline-primary float-end me-2"
                      to={`/productos/editar/${producto.Codigo}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-outline-danger float-end me-2"
                      onClick={() => handleDelete(producto.Codigo)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
