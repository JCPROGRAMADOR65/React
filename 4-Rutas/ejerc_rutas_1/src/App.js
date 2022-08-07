/*1.  Crea una aplicación que siempre muestre una cabecera y que tenga dos rutas:
a.  /meses mostrará una lista de los meses a partir de un array
b.  /dias mostrará una lista de los días a partir de un objeto
*/
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Meses from "./components/Meses";
import Dias from "./components/Dias";

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/meses" element={<Meses />} />
        <Route path="/dias" element={<Dias />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;                                                              
