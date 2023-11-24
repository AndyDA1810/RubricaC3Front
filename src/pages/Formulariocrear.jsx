import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../context/UserContext";

const Formulariocrear = () => {
  const {CreateUser, error} = useUser()


  const validationSchema = Yup.object({
    id: Yup.string().required("La cédula o ciudadanía es requerida"),
    Nombre: Yup.string().required("El nombre es requerido"),
    Apellido: Yup.string().required("El apellido es requerido"),
    Correo: Yup.string()
      .email("Formato de correo inválido")
      .required("El correo es requerido"),
    pass: Yup.string()
      .required("La contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 Digitos"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      Nombre: "",
      Apellido: "",
      Correo: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      const newUser = {
        id: value.id,
        Nombre: value.Nombre,
        Apellido: value.Apellido,
        Correo: value.Correo,
        pass: value.pass,
      };
      CreateUser(newUser)
    },
  });


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="p-4 bg-light" style={{ borderRadius: "8px" }}>
            <h2 className="mb-4 text-center">Formulario</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Cédula o Ciudadanía:
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
                    <div className="error text-danger">
                      {formik.errors.Nombre}
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="apellido " className="form-label">
                  Apellido:
                  <input
                    type="text"
                    id="apellido"
                    name="Apellido"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Apellido}
                  />
                  {formik.touched.Apellido && formik.errors.Apellido ? (
                    <div className="error text-danger">
                      {formik.errors.Apellido}
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo:
                  <input
                    type="email"
                    id="correo"
                    name="Correo"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Correo}
                  />
                  {formik.touched.Correo && formik.errors.Correo ? (
                    <div className="error text-danger">
                      {formik.errors.Correo}
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Contraseña:
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
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulariocrear;
