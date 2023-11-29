import { createContext, useContext, useState } from "react";
import { CrearVentas, EliminarVenta, obtenerVentas } from "../api/login";

export const VentaContext = createContext();

export const useVentas = () => {
  const context = useContext(VentaContext);
  if (!context) throw new Error("Venta context not available");
  return context;
};

export const VentaProvider = ({ children }) => {
  const [ventas, setVenta] = useState(null);

  const getVentas = async () => {
    try {
      const res = await obtenerVentas();

      setVenta(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarVenta = async (venta) => {
    try {
      const res = await CrearVentas(venta);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleDelete = async (Codigo) => {
    try {
      const response = await EliminarVenta(Codigo);
      console.log(response.status);
      if (response.status === 200) {
        setVenta(ventas.filter((v) => v.Codigo !== Codigo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VentaContext.Provider
      value={{
        getVentas,
        agregarVenta,
        handleDelete,
        ventas,
      }}
    >
      {children}
    </VentaContext.Provider>
  );
};
