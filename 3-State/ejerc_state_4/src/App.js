/* 4.  Crea una aplicación que enseñe el valor de un estado en grande y dos botones para aumentar y decrementar su valor.*/

import "./App.css";
import { useState } from "react";

function App() {
  let [contador, setContador] = useState(0);
  return (
    <>
      <h1>{contador}</h1>
      <div>
        <button onClick={() => setContador(++contador)}>+</button>
        <button onClick={() => setContador(--contador)}>-</button>
      </div>
    </>
  );
}
export default App;
