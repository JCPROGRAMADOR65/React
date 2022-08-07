/*2. Crea una clase Distancia con un método MillasAMetros() que toma como parámetro
de entrada un valor en millas marinas y las convierte a metros.
a. Una vez tengas este método escribe otro MillasAKilometros() que realice la
misma conversión, pero esta vez exprese el resultado en kilómetros.
Nota: 1 milla marina equivale a 1609,34 metros.*/

class Distancia{
  millasAmetros(millas){
    return millas * 1609.34
  }
  millasAKilometros(millas){
    return millas * 1609
  }
}
 let patata = new Distancia

  patata.millasAmetros(24)