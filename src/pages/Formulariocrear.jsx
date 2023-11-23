import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  cedula_ciudadania: Yup.string().required(
    "La cédula o ciudadanía es requerida"
  ),
  nombre: Yup.string().required("El nombre es requerido"),
  apellido: Yup.string().required("El apellido es requerido"),
  correo: Yup.string()
    .email("Formato de correo inválido")
    .required("El correo es requerido"),
  rol: Yup.string().required("El rol es requerido"),
  pass: Yup.string().required("La contraseña es requerida"),
});

const MyForm = () => {
  const initialValues = {
    cedula_ciudadania: "",
    nombre: "",
    apellido: "",
    correo: "",
    rol: "",
    pass: "",
  };
};

const Formulariocrear = () => {
  const validationSchema = Yup.object().shape({
    cedula_ciudadania: Yup.string().required(
      "La cédula o ciudadanía es requerida"
    ),
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    correo: Yup.string()
      .email("Formato de correo inválido")
      .required("El correo es requerido"),
    rol: Yup.string().required("El rol es requerido"),
    pass: Yup.string().required("La contraseña es requerida"),
  });
  const initialValues = {
    cedula_ciudadania: "",
    nombre: "",
    apellido: "",
    correo: "",
    rol: "",
    pass: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(values);
    setSubmitting(false);
  };
  return (

    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={handleSubmit}
    // >
    //   {({ isSubmitting }) => (
    //     <Form>
    //       <label>
    //         Cédula o Ciudadanía:
    //         <Field type="text" name="cedula_ciudadania" />
    //         <ErrorMessage name="cedula_ciudadania" component="div" />
    //       </label>
    //       <br />
    //       <label>
    //         Nombre:
    //         <Field type="text" name="nombre" />
    //         <ErrorMessage name="nombre" component="div" />
    //       </label>
    //       <br />
    //       <label>
    //         Apellido:
    //         <Field type="text" name="apellido" />
    //         <ErrorMessage name="apellido" component="div" />
    //       </label>
    //       <br />
    //       <label>
    //         Correo:
    //         <Field type="email" name="correo" />
    //         <ErrorMessage name="correo" component="div" />
    //       </label>
    //       <br />
    //       <label>
    //         Rol:
    //         <Field type="text" name="rol" />
    //         <ErrorMessage name="rol" component="div" />
    //       </label>
    //       <br />
    //       <label>
    //         Contraseña:
    //         <Field type="password" name="pass" />
    //         <ErrorMessage name="pass" component="div" />
    //       </label>
    //       <br />
    //       <button type="submit" disabled={isSubmitting}>
    //         Enviar
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 bg-light" style={{ borderRadius: '8px' }}>
            <h2 className="mb-4">Formulario</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="cedula_ciudadania" className="form-label">
                      Cédula o Ciudadanía:
                      <Field type="text" name="cedula_ciudadania" className="form-control" />
                      <ErrorMessage name="cedula_ciudadania" component="div" className="text-danger" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre:
                      <Field type="text" name="nombre" className="form-control" />
                      <ErrorMessage name="nombre" component="div" className="text-danger" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">
                      Apellido:
                      <Field type="text" name="apellido" className="form-control" />
                      <ErrorMessage name="apellido" component="div" className="text-danger" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">
                      Correo:
                      <Field type="email" name="correo" className="form-control" />
                      <ErrorMessage name="correo" component="div" className="text-danger" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rol" className="form-label">
                      Rol:
                      <Field type="text" name="rol" className="form-control" />
                      <ErrorMessage name="rol" component="div" className="text-danger" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pass" className="form-label">
                      Contraseña:
                      <Field type="password" name="pass" className="form-control" />
                      <ErrorMessage name="pass" component="div" className="text-danger" />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Enviar
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

export default Formulariocrear;
