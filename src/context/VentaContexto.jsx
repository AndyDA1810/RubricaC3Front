import { createContext, useContext, useState } from "react";
import { CrearVentas } from "../api/login";

export const VentaContext = createContext();

export const useVenta = () => {
  const context = useContext(VentaContext);
  if (!context) {
    throw new error("User context not available");
  }
  return context;
};

export const VentaProvider = ({ children }) => {
  const [venta, setVenta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const crearVenta = async (venta) => {
    try {
      const res = await CrearVentas(venta);
      console.log(res);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <VentaContext.Provider
      value={{
        crearVenta,
        venta,
        loading,
        error,
      }}
    >
      {children}
    </VentaContext.Provider>
  );
};
