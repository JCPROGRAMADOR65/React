/*2.  Crea una aplicación en la que guardes en el state el array ‘peliculas’.
a.  Crea un componente en el que muestres todas las películas: título e imagen y que se vea al 
entrar a la aplicación (“/”).
b. Después crea un componente por cada película y, al hacer click en cualquiera de los títulos, nos 
llevará a la ruta de cada película, donde también aparecerá la sinopsis.
*/

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import videoclub from "./datos/catalogo";
import Catalogo from "./components/Catalogo";
import Pelicula from "./components/Pelicula";

function App() {
  const [catalogo] = useState(videoclub);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo catalogo={catalogo} />} />
        {catalogo.map((pelicula, indes) => {
          return (
            <Route
              path={"/" + pelicula.titulo.replaceAll(" ", "-")}
              element={
                <Pelicula
                  full={true}
                  sinopsis={pelicula.sinopsis}
                  cartel={pelicula.cartel}
                  titulo={pelicula.titulo}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
