/*3. Crea una página en la que mostremos los datos de 4 casas diferentes. Almacena los
datos en un archivo de servicio ( como objetos de un array ) y después genera un
componente por cada una de las casas de forma automática.*/

import "./App.css";
import Casa from "./Casa";
import casas from "./casas";

//Import Componentes
function App() {
  return (
    <>
      {casas.map((datosCasa, index) => {
        return <Casa key={index} datos={datosCasa} />;
      })}
    </>
  );
}
export default App;
