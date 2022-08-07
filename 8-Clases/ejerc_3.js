/*3. Diseñar una clase llamada Rectángulo que contenga :
a. Un constructor que permita declarar objetos con dos argumentos ( largo y
ancho)
b. Un método llamado calcularArea que devuelve el área del rectángulo
c. Un método llamado calcularPerimetro que calcula el perímetro del
rectángulo*/

class Rectangulo {
   constructor(largo, ancho) {  
    this.largo = largo,
    this.ancho = ancho
  }

   calculaArea() {
    return this.largo * this.ancho
 }

  calculaPerimetro(){
    return((this.largo + this.ancho) * 2)
}
}
n
let patata = new Rectangulo(10,20)
console.log(patata.calculaArea(), patata.calculaPerimetro())