// Arreglos o Arrays

const numeros = [10,20,30,40,50];

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "programador"}, [1, 2,3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[0]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero){
//     console.log(numero);
// });
// numeros[5] = 60;
numeros.push(60);
numeros.unshift(-10,-20-30);

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop();
// meses.shift();

//meses.splice(2,1)
// console.log(meses);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);