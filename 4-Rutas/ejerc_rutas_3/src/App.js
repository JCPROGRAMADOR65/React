/*3.  Crea una aplicación que recoja tus 6 videojuegos favoritos.
a.  Crea una ficha para cada uno de los videojuegos con un link para ampliar información y en la 
página principal muestra tus 6 favoritos.
b.  Después  crea  las  rutas  que  muestran  información  detallada  de  cada videojuego.
*/
/* falta datos video club, pendiente copiarlo*/

import "./App.css";
import { useSate } from "react";
import videojuegos from "./datos/videojuegos";

//Import Components
import Videojuego from "./components/Videojuego";

function App() {
  const [catalogo] = useSate(videojuegos);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={catalogo.map((videojuego, index) => {
            return (
              <Videojuego full={false} videojuego={videojuego} key={index} />
            );
          })}
        />
        {catalogo.map((videojuegos, index) => {
          return (
            <Route
              path={"/videojuego/" + videojuego.titulo.replaceAll("", "-")}
              element={
                <Videojuego full={true} videojuego={videojuego} key={index} />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
