import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulariologin from "./pages/Formulariologin";
import Formulariocrear from "./pages/Formulariocrear";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import { ProductosProvider } from "./context/ProductosContext";
import { VentaProvider } from "./context/VentaContexto";
import FormularioProductos from "./pages/FormularioProductos";
import FormularioVentas from "./pages/FormularioVentas";
import Productos from "./pages/Productos";
import FormularioEditarProducto from "./pages/FormularioEditarProducto";
import Ventas from "./pages/Ventas";
function App() {
  return (
    <>
      <div className="contenedor" style={{ marginBottom: "100px" }}>
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
                  <VentaProvider>
                    <Productos />
                  </VentaProvider>
                </ProductosProvider>
              }
            />
            <Route
              path="/ventas/:codigo"
              element={
                <ProductosProvider>
                  <VentaProvider>
                    <FormularioVentas />
                  </VentaProvider>
                </ProductosProvider>
              }
            />
            <Route
              path="/ventas"
              element={
                <ProductosProvider>
                  <VentaProvider>
                    <Ventas />
                  </VentaProvider>
                </ProductosProvider>
              }
            />
          </Routes>
        </UserProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
