var prompt = require('prompt-sync')();
/*
Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. 
En cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida 
por pantalla:Introduce el número 1º.➢8El cubo de 8 es 512. Introduce el número 2º.
*/

for (i = 1; i <= 10; i++) {
  let N = parseInt(prompt(`Introduce el número ${i}º: `));
  let cube = Math.pow(N, 3);
  console.log(`El cubo de ${N} es ${cube}`);
}
