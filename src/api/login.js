import axios from "./axios";

export const Crearusuario = (user) => axios.post("/create", user);
export const IniciarSesion = (user) => axios.post("/login", user);
export const CerrarSesion = () => axios.post("/final");
export const obtenerUsuario = () => axios.get("/usuario");
