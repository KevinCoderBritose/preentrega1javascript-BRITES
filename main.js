//algoritmo con un condicional.

/* var edad = prompt("Si queres pasar tenes que tener mas 18 años");

edad = parseInt(edad);

if (edad >= 18) {
  alert("Puedes pasar");
} */

//algoritmo con un ciclo (por alguna razon no muestra el resultado hasta que cierres el alert, me gustaria saber porque)

/* var suma = 0;

var numero;

while (true) {
  numero = prompt("Ingresa un número para sumar");
  
  if (numero === null || numero === "") {
    break;
  }
  
  if (!isNaN(numero)) {
    numero = parseFloat(numero);
    suma += numero;
  }
}
*/

//Simulador Interactivo (Tuve que ayudarme con chatgpt, se me complico bastante, de todas formas seguire practicando)

/* var monto = parseFloat(prompt("Ingrese el monto principal:"));
var tasaAnual = parseFloat(prompt("Ingrese la tasa de interés (%):"));
var cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

var tasaMensual = tasaAnual / 12 / 100;
var cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));

alert("Para un préstamo de $" + monto.toFixed(2) + " a una tasa de interés anual del " + tasaAnual.toFixed(2) + "% con " + cuotas + " cuotas, el pago mensual es de $" + cuotaMensual.toFixed(2)); */