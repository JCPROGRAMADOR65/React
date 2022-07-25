import { useState } from 'react';

function Eliminar(props) {
  const [erase, setErase] = useState('');

  function borrarCompositor(nombre) {
    let array = props.init.filter(
     compositor => {return compositor.nombre !== nombre}
   ) 
    props.setInit(array);
    setErase('');
  }

  return (
    <div>
      <input
        type='text' onChange={
       (e) => {setErase(e.target.value)}
       }
        value={erase}
      />
      <button onClick={
       () => {borrarCompositor(erase)}
       } >
        Borrar
      </button>
    </div>
  );
}
export default Eliminar;
