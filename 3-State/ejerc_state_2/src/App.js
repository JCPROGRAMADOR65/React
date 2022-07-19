/* 2. Declara en tu aplicación un array con los 3 pokemon : Charmander, Bulbasur, Squirtle. Después muestralos leyéndonos del array como <li> dentro de un <ul>.
 */

import "./App.css";

function App() {
  let array = ["Charmander", "Squirtle", "Bulbase"];
  return (
    <ul>
      {array.map((pokemon) => (
        <li>{pokemon}</li>
      ))}
    </ul>
  );
}

export default App;
