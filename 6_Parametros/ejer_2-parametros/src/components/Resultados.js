import { useParams, Link } from 'react-router-dom'


function Resultados() {
    let params = useParams()
    let num1 = parseInt(params.num1)
    let num2 = parseInt(params.num2)
    
    return (
     <>
        <h1>Resultados</h1>
        <p>La suma de {num1} y {num2} es {num1+num2 }</p>
        <p>La resta de {num1} y {num2} es {num1-num2 }</p>
        <p>La multiplicacion de {num1} y {num2} es {num1*num2 }</p>
        <p>La division de {num1} y {num2} es {num1/num2 }</p>
        <p>La resto de {num1} y {num2} es {num1%num2 }</p>
        <Link to="/">Ocultar</Link>
     </>
    )     
}

export default Resultados 