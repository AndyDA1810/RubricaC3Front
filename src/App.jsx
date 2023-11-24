import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulariologin from "./pages/Formulariologin";
import Formulariocrear from "./pages/Formulariocrear";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import FormularioProductos from "./pages/FormularioProductos";
import FormularioVentas from "./pages/FormularioVentas";
function App() {
  return (
    <>
      <div className="contenedor">
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Formulariologin />}></Route>
            <Route path="/crear" element={<Formulariocrear />}></Route>
            <Route path="/productos" element={<FormularioProductos />} />
            <Route path="/ventas" element={<FormularioVentas />} />
          </Routes>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
