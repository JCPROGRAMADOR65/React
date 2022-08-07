/*1. Se pretende crear una clase llamada Cifras que tenga lo siguiente:
a. Un constructor que permite inicializar un número con el valor pasado como
argumento.
b. Un método llamado esPar que devuelve verdadero si lo es y falso en caso
contrario.
c. Un método llamado sumaDigitos que devuelve un entero con la suma de
sus dígitos.*/

class Cifras {
 constructor(num){
  this.num = num
}

esPar() {
 return this.num % 2 == 0
}

sumaDigitos() {
 let suma = 0
 let num = this.num.toString()

 for (let i = 0; i < num.length; i++) {
  suma += parseInt(num[i])
  }
  return suma
 }
}

let patata = new Cifras(454)
console.log(patata.esPar(), patata.sumaDigitos())



