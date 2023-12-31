import { useUser } from "../context/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProductos } from "../context/ProductosContext";

function FormularioProductos() {
  const { createProducto } = useProductos();

  const validationSchema = Yup.object({
    Nombre: Yup.string().required("El nombre es requerido"),
    Descripcion: Yup.string().required("La descripción es requerida"),
    Precio: Yup.number()
      .required("El precio es requerido")
      .positive("El precio debe ser mayor que cero"),
    Stock: Yup.number()
      .required("El stock es requerido")
      .integer("El stock debe ser un número entero")
      .min(1, "El stock no puede ser negativo"),
  });

  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Descripcion: "",
      Precio: "",
      Stock: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const product = {
        Nombre: values.Nombre,
        Descripcion: values.Descripcion,
        Precio: values.Precio,
        Stock: values.Stock,
      };
      createProducto(product);
      window.location.href = "/productos";
    },
  });

  const { loading, user, isAuthenticated } = useUser();

  const navigate = useNavigate();

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

  if (user.Rol !== "Admin") return navigate("/ventas");

  return (
    <div className="container mt-5">
      <div className="">
        <h1>Crear Producto</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6"></div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
              <input
                type="text"
                id="nombre"
                name="Nombre"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Nombre}
              />
              {formik.touched.Nombre && formik.errors.Nombre ? (
                <div className="error text-danger">{formik.errors.Nombre}</div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción:
              <textarea
                id="descripcion"
                name="Descripcion"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Descripcion}
              />
              {formik.touched.Descripcion && formik.errors.Descripcion ? (
                <div className="error text-danger">
                  {formik.errors.Descripcion}
                </div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio:
              <input
                type="number"
                id="precio"
                name="Precio"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.precio}
              />
              {formik.touched.Precio && formik.errors.Precio ? (
                <div className="error text-danger">{formik.errors.Precio}</div>
              ) : null}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Stock:
              <input
                type="number"
                id="stock"
                name="Stock"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.stock}
              />
              {formik.touched.Stock && formik.errors.Stock ? (
                <div className="error text-danger">{formik.errors.Stock}</div>
              ) : null}
            </label>
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioProductos;
