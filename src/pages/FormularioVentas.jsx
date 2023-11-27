import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductos } from "../context/ProductosContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useVenta } from "../context/VentaContexto";

const FormularioVentas = () => {
  const parametros = useParams();
  const { _obtenerProducto } = useProductos();
  const { crearVenta } = useVenta();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    async function informacionproducto() {
      if (!parametros.codigo) {
        return;
      }
      const res = await _obtenerProducto(parametros.codigo);
      setProducto(res[0]);
    }

    informacionproducto();
  }, [parametros.codigo]);

  const validationSchema = Yup.object().shape({
    nombreCliente: Yup.string().required("Nombre del cliente requerido"),
    telefonoCliente: Yup.string().required("Teléfono del cliente requerido"),
    fechaVenta: Yup.date().required("Fecha de venta requerida"),
    cantidadVendida: Yup.number()
      .required("Cantidad vendida requerida")
      .min(1, "La cantidad debe ser mayor que 0"),
  });
  const formik = useFormik({
    initialValues: {
      nombreCliente: "",
      telefonoCliente: "",
      fechaVenta: "",
      cantidadVendida: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      const venta = {
        Codigo_producto: parametros.codigo,
        Nombre_cliente: value.nombreCliente,
        Telefono_cliente: value.telefonoCliente,
        Fecha_venta: value.fechaVenta,
        Cantidad_vendida: value.cantidadVendida,
      };
      crearVenta(venta);
      window.location.href = "/productos";
    },
  });

  if (producto.length === 0) {
    return <h1>Cargando</h1>;
  }
  return (
    <div className="container text-center">
      <a href="/productos">&lt;-</a>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{producto.Nombre}</h5>
          <p className="card-text">Descripción: {producto.Descripcion}</p>
          <p className="card-text">Precio: {producto.Precio}</p>
          <p className="card-text">Stock: {producto.Stock}</p>
        </div>
      </div>
      <hr />

      <div className="mt-4">
        <h3>Formulario de Ventas</h3>
        <form className="bg-light p-4 rounded" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombreCliente" className="form-label">
              Nombre del Cliente
              <input
                type="text"
                id="nombreCliente"
                name="nombreCliente"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombreCliente}
              />
              {formik.touched.nombreCliente && formik.errors.nombreCliente ? (
                <div className="error text-danger">
                  {formik.errors.nombreCliente}
                </div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="telefonoCliente" className="form-label">
              Teléfono del Cliente
              <input
                type="text"
                id="telefonoCliente"
                name="telefonoCliente"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefonoCliente}
              />
              {formik.touched.telefonoCliente &&
              formik.errors.telefonoCliente ? (
                <div className="error text-danger">
                  {formik.errors.telefonoCliente}
                </div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="fechaVenta" className="form-label">
              Fecha de Venta
              <input
                type="date"
                id="fechaVenta"
                name="fechaVenta"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fechaVenta}
              />
              {formik.touched.fechaVenta && formik.errors.fechaVenta ? (
                <div className="error text-danger">
                  {formik.errors.fechaVenta}
                </div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="cantidadVendida" className="form-label">
              Cantidad Vendida
              <input
                type="text"
                id="cantidadVendida"
                name="cantidadVendida"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cantidadVendida}
              />
              {formik.touched.cantidadVendida &&
              formik.errors.cantidadVendida ? (
                <div className="error text-danger">
                  {formik.errors.cantidadVendida}
                </div>
              ) : null}
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Venta
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioVentas;
