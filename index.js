/* 
La funcion llamada sumaTodosImpares() recibe como parametro un array
de enteros. Debe devoler la suma total entre todos los numeros impares 
ejm: sumaTodosImpares([1,5,2,9,6,4]) devuelve: 1+5+9 = 15
*/

function sumaTodosImpares(array) {
  return array.reduce((prevValue, currValue) => {
    return currValue % 2 !== 0 ? currValue + prevValue : prevValue
  }, 0)
}

//console.log(sumaTodosImpares([1, 5, 2, 9, 6, 4]))

/* 
La funcion llamada 'StringMasLarga', recibe como argumento una frase 
(str) 'str' y debe devolver la palabra (String) mas larga que haya en esa
frase (Es decir el de mayor cantidad de caracteres)
ej: 
1: stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
2: stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
tip: puedes usar el metodo string 'split'

*/
function stringMasLarga(str) {
  return str.split(" ").reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr
  },"")

}

console.log(stringMasLarga('Me gusta mucho javascript'))