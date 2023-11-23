import { BrowserRouter, Routes, Route } from "react-router-dom"
import Formulariologin from "./pages/Formulariologin"
import Formulariocrear from "./pages/Formulariocrear"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="contenedor">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Formulariologin/>}></Route>
          <Route path="/crear" element={<Formulariocrear/>}></Route>
        </Routes>
    </div>
    </>
  )
}

export default App
