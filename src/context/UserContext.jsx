import { createContext, useContext, useEffect, useState } from "react";
import {
  CerrarSesion,
  Crearusuario,
  IniciarSesion,
  obtenerUsuario,
} from "../api/login";
import Cookies from "universal-cookie";

export const userContext = createContext();

const cookies = new Cookies();

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new error("User context not available");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Contexto del usuario

  const CreateUser = async (user) => {
    try {
      const res = await Crearusuario(user);
      setUser(res.data.newusuario);
      setIsAuthenticated(true);
      console.log(res.data.newusuario);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const loginUser = async (user) => {
    try {
      const res = await IniciarSesion(user);
      setUser(res.data.usuario);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logoutUser = async () => {
    const res = await CerrarSesion();
    console.log(res);
    setUser(null);
    setIsAuthenticated(false);
    cookies.remove("token");
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    async function validadSesion() {
      let token = cookies.get("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await obtenerUsuario();
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
        }

        setUser(res.data.datos);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setUser(null);
        setLoading(false);
        setError(error.response.data.message);
      }
    }
    validadSesion();
  }, []);

  return (
    <userContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated,
        CreateUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
