import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useVentas } from "../context/VentaContexto";

const Ventas = () => {
  const { isAuthenticated, loading } = useUser();
  const { getVentas, ventas, handleDelete } = useVentas();

  useEffect(() => {
    getVentas();
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


  if (ventas === null) {
    return <h1>Cargando</h1>;
  }

  return (
    <div className="container">
      <div className="row">
      <a href="/productos" className="text-center">&lt;-</a>
        {ventas.map((venta) => {
          return (
            <div className="col-md-4 mt-5" key={venta.Codigo}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{venta.Nombre_cliente}</h5>
                  <p className="card-text"> ID Producto: {venta.Codigo_producto}</p>
                  <p className="card-text">Fecha: {venta.Fecha_venta}</p>
                  <p className="card-text">
                    <strong>Cantidad vendida:</strong> {venta.Cantidad_vendida}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      className="btn btn-outline-primary float-end me-2"
                      to={`/ventas/editar/${venta.Codigo}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-outline-danger float-end me-2"
                      onClick={() => handleDelete(venta.Codigo)}
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
  )
};

export default Ventas;
