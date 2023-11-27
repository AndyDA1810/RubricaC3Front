import { createContext, useContext, useState } from "react";
import {
  CrearProductos,
  EliminarProducto,
  obtenerProductos,
  obtenerProducto,
  EditarProducto,
} from "../api/login";

export const ProductosContext = createContext();

export const useProductos = () => {
  const contexto = useContext(ProductosContext);
  if (!contexto) throw new Error("producto debe ser usado en provaider");
  return contexto;
};

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(null);

  const getProductos = async () => {
    try {
      const res = await obtenerProductos();
      console.log(res);
      setProductos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProducto = async (producto) => {
    try {
      const res = await CrearProductos(producto);
      console.log(res);
      setProductos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (Codigo) => {
    try {
      const response = await EliminarProducto(Codigo);
      console.log(response.status);
      if (response.status === 200) {
        setProductos(productos.filter((p) => p.Codigo !== Codigo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _obtenerProducto = async (codigo) => {
    try {
      const res = await obtenerProducto(codigo);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const _editarProducto = async (codigo,producto) => {
    try{
      const res = await EditarProducto(codigo,producto)
      console.log(res)
    }catch(error){
      console.log(error);
    }
  }

  return (
    <ProductosContext.Provider
      value={{
        getProductos,
        createProducto,
        handleDelete,
        _obtenerProducto,
        _editarProducto,
        productos,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
