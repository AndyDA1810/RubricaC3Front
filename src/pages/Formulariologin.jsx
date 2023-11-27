import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Formulariologin = () => {
  const { loginUser, error, user, loading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    id: Yup.string().required("La cédula o ciudadanía es requerida"),
    pass: Yup.string()
      .required("La contraseña es requerida")
      .min(4, "La contraseña debe tener al menos 6 Digitos"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      const user = {
        id: value.id,
        pass: value.pass,
      };
      loginUser(user);
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (user.Rol === "Admin") {
        navigate("/productos");
      } else {
        navigate("/ventas");
      }
    }
  }, [isAuthenticated]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="p-4 bg-light" style={{ borderRadius: "8px" }}>
            <h2 className="mb-4 text-center">Inicio de Sesión</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Cédula de Ciudadanía:
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                  />
                  {formik.touched.id && formik.errors.id ? (
                    <div className="error text-danger">{formik.errors.id}</div>
                  ) : null}
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Constraseña:
                  <input
                    type="password"
                    id="pass"
                    name="pass"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                  />
                  {formik.touched.pass && formik.errors.pass ? (
                    <div className="error text-danger">
                      {formik.errors.pass}
                    </div>
                  ) : null}
                </label>
              </div>
              <button type="submit" className="btn btn-outline-dark">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulariologin;
