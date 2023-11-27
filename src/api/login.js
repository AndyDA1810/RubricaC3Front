import axios from "./axios";

export const Crearusuario = (user) => axios.post("/create", user);
export const IniciarSesion = (user) => axios.post("/login", user);
export const CerrarSesion = () => axios.post("/final");
export const obtenerUsuario = () => axios.get("/usuario");

// PRODUCTOS
export const obtenerProductos = () => axios.get("/productos");
export const obtenerProducto = (codigo) => axios.get(`/productos/${codigo}`);
export const CrearProductos = (producto) => axios.post("/productos", producto);
export const EliminarProducto = (codigo) =>axios.delete(`/productos/${codigo}`);
export const EditarProducto = (codigo, producto) => axios.patch(`/productos/${codigo}`, producto);


// VENTAS

export const obtenerVentas = () => axios.get("/ventas");
export const obtenerVenta = (codigo) => axios.get(`/ventas/${codigo}`);
export const CrearVentas = (venta) => axios.post("/ventas", venta);
export const EliminarVenta = (codigo) =>axios.delete(`/ventas/${codigo}`);
export const EditarVenta = (codigo, venta) => axios.patch(`/ventas/${codigo}`, venta);