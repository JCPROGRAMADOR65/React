
/*entry point */

let datos = require("./datos") /*importamos */

let arrayPaises = datos.paises.a.concat(datos.paises.b)/*guarda en array a + b*/
arrayPaises = arrayPaises.concat(datos.paises.c)/*los tres concatendos*/

console.log(arrayPaises)

console.log(arrayPaises[datos.favoritos[0]])
console.log(arrayPaises[datos.favoritos[1]])
console.log(arrayPaises[datos.favoritos[2]])


