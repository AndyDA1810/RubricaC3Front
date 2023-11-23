import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formulariologin = () => {
  const validationSchema = Yup.object().shape({
    cedula: Yup.string().required("La cédula es requerida"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const initialValues = {
    cedula: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="p-4 bg-light" style={{ borderRadius: "8px" }}>
            <h2 className="mb-4 text-center">Inicio de Sesión</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="cedula" className="form-label">
                      Cédula:
                      <Field
                        type="text"
                        name="cedula"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="cedula"
                        component="div"
                        className="text-danger"
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña:
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    Iniciar Sesión
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulariologin;
