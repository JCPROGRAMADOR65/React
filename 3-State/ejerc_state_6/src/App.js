import { useState } from "react"
import "./App.css"

function App() {
  let [tablero, setTablero] = useState([
   null,
   null,
   null,
   null,
   null,
   null,
   null,
   null,
   null,
  ])
  let [simbolo, setSimbolo] = useState("x")
  
  let ganador = comprobar()
  function tirar(i) {
    console.log(ganador)
     let array = [...tablero]
     if (array[i] == null){
       array[i] = simbolo
       simbolo == '0' ? setSimbolo('x') : setSimbolo('0')
       setTablero(array)
     }
    }

    
    function comprobar(){
      console.log('Buenoquepasa?')
      let tableroNew = [...tablero]
      //Horizontales
      if(tableroNew[0] == tableroNew[2]) {
        console.log(tableroNew[0])
        return tableroNew[0]
      }else if(tableroNew[3] == tableroNew[4] && tablero[4] == tableroNew[5]){
        console.log(tableroNew[3])
        return tableroNew[3]
      }else if(tableroNew[6] == tableroNew[7] && tablero[7] == tableroNew[8]){
        console.log(tableroNew[6])
        return tableroNew[6]
      // Verticales
      }else if(tableroNew[0] == tableroNew[3] && tablero[3] == tableroNew[6]){
        console.log(tableroNew[0])
        return tableroNew[0]
      }else if(tableroNew[1] == tableroNew[4] && tablero[4] == tableroNew[7]){
        console.log(tableroNew[1])
        return tableroNew[1]
      }else if(tableroNew[2] == tableroNew[5] && tablero[5] == tableroNew[8]){
        console.log(tableroNew[2])
        return tableroNew[2]
      //Diagonales
      }else if(tableroNew[0] == tableroNew[4] && tablero[4] == tableroNew[8]){
        console.log(tableroNew[0])
        return tableroNew[0]
      }else if(tableroNew[2] == tableroNew[4] == tableroNew[6]){
        console.log(tableroNew[2])
        return tableroNew[2] 
      } else {
        return ''
      }
    }
    return (
    <>
      <div>
        <button onClick={() => tirar(0)}>{tablero[0]}</button>
        <button onClick={() => tirar(1)}>{tablero[1]}</button>
        <button onClick={() => tirar(2)}>{tablero[2]}</button>
      </div>
      <div>
       <button onClick={() => tirar(3)}>{tablero[3]}</button>
        <button onClick={() => tirar(4)}>{tablero[4]}</button>
        <button onClick={() => tirar(5)}>{tablero[5]}</button> 
      </div>
      <div>
        <button onClick={() => tirar(6)}>{tablero[6]}</button>
        <button onClick={() => tirar(7)}>{tablero[7]}</button>
        <button onClick={() => tirar(8)}>{tablero[8]}</button> 
      </div>
      <div>{ganador}</div>
    </>
  )
}
export default App
