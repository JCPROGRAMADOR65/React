/* 1. Rick & Morty
Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que
devuelva todos los personajes. Muestra en un div las fotos y los nombres y añade un
botón de página siguiente que muestre los siguientes 10 personajes y un botón de
página anterior que muestre los 10 personajes anteriores.*/

import {useEffect, useState } from 'react'
import './App.css'

function App() {
 let [data, setData] = useState([])
 let [url, setUrl] = useState("https://rickandmortyapi.com/api/character/")
 let [next, setNext] =useState("")
 let [prev, setPrev] =useState("")

 useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(datos =>{
    setData(datos.results)
    setNext(datos.info.next)
    setPrev(datos.info.prev)

 })

}, [url])
 
 return (
  <>
  <div className='catalogo'>
  {data.map((personaje, index) => {

    return (
    <div className="card">
    <img src={personaje.image} alt={personaje.name} />
    <h4>{personaje.name} </h4>
    </div>
    )
   })}
  </div>
  {prev !== null ? (
    <button onClick={()=> setUrl(prev)}>Anterior</button>
  ) : ( 
  <button disabled>Anterior</button>
  )}
<button onClick={()=>setUrl(next)}>Siguiente</button>
  </> 
 
) 
}
export default App;
