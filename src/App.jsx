import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulariologin from "./pages/Formulariologin";
import Formulariocrear from "./pages/Formulariocrear";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import { ProductosProvider } from "./context/ProductosContext";
import FormularioProductos from "./pages/FormularioProductos";
import FormularioVentas from "./pages/FormularioVentas";
import Productos from "./pages/Productos";
import FormularioEditarProducto from "./pages/FormularioEditarProducto";
function App() {
  return (
    <>
      <div className="contenedor">
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Formulariologin />}></Route>
            <Route path="/crear" element={<Formulariocrear />}></Route>

            <Route
              path="/productos/crear"
              element={
                <ProductosProvider>
                  <FormularioProductos />
                </ProductosProvider>
              }
            />
            <Route
              path="/productos/editar/:codigo"
              element={
                <ProductosProvider>
                  <FormularioEditarProducto />
                </ProductosProvider>
              }
            />
            <Route
              path="/productos"
              element={
                <ProductosProvider>
                  <Productos />
                </ProductosProvider>
              }
            />
            <Route path="/ventas" element={<FormularioVentas />} />
          </Routes>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
