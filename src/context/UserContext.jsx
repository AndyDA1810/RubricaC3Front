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
    }
  }, [error]);

  useEffect(() => {
    async function validadSesion() {
      const token = cookies.get("token");
      if (token) {
        try {
          const res = await obtenerUsuario();
          if (!res.data) {
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
          } else {
            setIsAuthenticated(true);
            setUser(res.data.message);
            setLoading(false);
          }
        } catch (error) {
          setUser(null);
          setLoading(false);
          setError(error.response.data.message);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
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
