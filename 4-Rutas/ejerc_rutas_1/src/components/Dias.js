function Dias() {
   let dias = {
    primero: "Lunes",
    segundo: "martes",
    tercero: "miercoles",
    cuarto: "jueves",
    quinto: "viernes",
    sexto: "sabado",
    septimo: "domingo"
}

let diasLi = []
for (const dia in dias) {
    diasLi.push(dias[dia])
}

return (
    <ul>
      {diasLi.map((dia)=><li>{dia}</li>)}
    </ul>
)
}
export default Dias;
