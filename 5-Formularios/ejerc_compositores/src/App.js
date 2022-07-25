import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import "./App.css";
import Eliminar from './Components/Eliminar'; 
import Lista from './Components/Lista';

function App() {
  const [input, setInput] = useState('');

  const [init, setInit] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40", "Don Giovanni'],
    }, 
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32'],
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace", "Largo ma non tanto'],
    },
  ])
    
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="eliminar">Eliminar</Link></li>
          </ul> 
        </nav>
      </header>
      <Routes>
        <Route
          path='/'
          element={
          <>
    <Lista lista={init}/>
      <input type='text' onChange={e =>  setInput(e.target.value) } value={input} />
      <button
        onClick={() => {
          let array = [...init, {nombre: input}]
          setInit(array)
          setInput('')
          }}>
           Guardar
           </button>
      </>
    }
        />
        <Route path='/eliminar' element={<Eliminar init={init} setInit={setInit} />}/>
        </Routes>
    </BrowserRouter>  
  )
}
export default App
  