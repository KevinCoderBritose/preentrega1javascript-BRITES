

 let edad = prompt("Si queres pasar tenes que tener mas 18 años");

edad = parseInt(edad);

if (edad >= 18) {
  alert("Puedes pasar");
} 



  let suma = 0;

let numero;

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



  let monto = parseFloat(prompt("Ingrese el monto principal:"));
let tasaAnual = parseFloat(prompt("Ingrese la tasa de interés (%):"));
let cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

let tasaMensual = tasaAnual / 12 / 100;
let cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));

alert("Para un préstamo de $" + monto.toFixed(2) + " a una tasa de interés anual del " + tasaAnual.toFixed(2) + "% con " + cuotas + " cuotas, el pago mensual es de $" + cuotaMensual.toFixed(2));  