import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulariologin from "./pages/Formulariologin";
import Formulariocrear from "./pages/Formulariocrear";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <div className="contenedor">
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Formulariologin />}></Route>
            <Route path="/crear" element={<Formulariocrear />}></Route>
          </Routes>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
