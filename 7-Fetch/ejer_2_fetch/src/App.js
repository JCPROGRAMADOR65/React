/*Personajes de Star Wars por planeta:
a. Utilizar la base de datos de Star Wars (disponible en
https://swapi.dev/documentation), para obtener la lista de planetas y
mostrarlos en un dropdown (etiqueta select).
b. Cuando el usuario elige una opción, mostrar en un párrafo el nombre
seleccionado. (puede usarse un botón)
c. En vez de mostrar el párrafo hacer una petición fetch para ver los personajes
que están en ese planeta y mostrarlos en un div debajo del dropdown.
d. Hacer la petición fetch en cuanto se selecciona una opción diferente, sin
utilizar el botón.
(utilizamos otra web similar'https://swapi.dev/api/planets')*/

import {useEffect, useState} from 'react'
  
import './App.css';

function App() {

  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [data3, setData3] = useState([])
  let [loading, setLoading] = useState(true) 
  let [select, setSelect] = useState('')

  useEffect(() => {
   setLoading(true)
   fetch('https://swapi.dev/api/planets')
  .then(res => res.json())
  .then(datos => {setData(datos.results)
   setLoading(false)
  }) 
}, []) 

 useEffect(() =>{
  setLoading(true)
 fetch(select)
 .then(res => res.json())
 .then(datos => { 
  setData2(datos.residents)
  data.length > 1 ? setLoading(false) : setLoading(true) 
 });
 }, [select])


  useEffect(()=>{
    setLoading(true)
    Promise.all(data2.map(url => fetch(url)))
    .then(respuesta => Promise.all(respuesta.map(res => res.json())))
    .then(datos => {
    setData3(datos);
    data.length > 1 ? setLoading(false) : setLoading(true)})
   
    },[data2])
 
   if(loading) {
    return <h1>Cargando...</h1>
   } else {
    return (
    <>
   <select onChange={e => setSelect(e.target.value)}> 
    {data.map((planeta, index) => {
      return (
        <option key={index} value={planeta.url}>{planeta.name}</option>  
        )
    })}
    </select>  
    <ul>
    {data3.map((personaje, index)=>{
      return <li key={index}>{personaje.name}</li>
      })}
  </ul>
  </>  
  ) 
 }
} 
export default App
