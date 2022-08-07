/*4. Realiza una clase Finanzas que convierta dólares a euros y viceversa. Codifica los
métodos dolaresToEuros y eurosToDolares.*/

class Finanazas {
  dolaresToEuros(dolares){
   return dolares * 0.99
}
dolaresToEuros(euros) {
   return euros * 1.01
}
}
let patata = new Finanazas
console.log(patata.dolaresToEuros(3))