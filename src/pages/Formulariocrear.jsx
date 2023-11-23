import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.string().required("Identificación es requerida"),
  Nombre: Yup.string().required("Nombre es requerido"),
  Apellido: Yup.string().required("Apellido es requerido"),
  Correo: Yup.string()
    .email("Correo no válido")
    .required("Correo es requerido"),
  pass: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida"),
});
const Formulariocrear = () => {
  return (
    <div className="">
      {" "}
      hola
      <Formik
        initialValues={{
          id: "",
          Nombre: "",
          Apellido: "",
          Correo: "",
          pass: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {" "}
        {({ handleChange, values }) => (
          <Form>
            {" "}
            <input
              name="id"
              type="text"
              onChange={handleChange}
              value={values.id}
            />{" "}
            <ErrorMessage name="id" component="div" />
            <input
              name="Nombre"
              type="text"
              onChange={handleChange}
              value={values.Nombre}
            />{" "}
            <ErrorMessage name="Nombre" component="div" />
            <input
              name="Apellido"
              type="text"
              onChange={handleChange}
              value={values.Apellido}
            />{" "}
            <ErrorMessage name="Apellido" component="div" />
            <input
              name="Correo"
              type="email"
              onChange={handleChange}
              value={values.Correo}
            />{" "}
            <ErrorMessage name="Correo" component="div" />
            <input
              name="pass"
              type="password"
              onChange={handleChange}
              value={values.pass}
            />
            <ErrorMessage name="pass" component="div" />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulariocrear;
