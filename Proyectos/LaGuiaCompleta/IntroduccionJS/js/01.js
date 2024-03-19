// Repaso JS

// const no se puede reasignar y debe arrancar con un valor
const nombre = 'Jeferson';

// let se puee reasignar y no requiere un valor inicial
let equipo = 'Chelsea';

console.log('Hello Work');
console.log(`El equipo favorito de ${nombre} es ${equipo}`);

let cliente;
// Para conocer el tipo de dato, usamos typeof
console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);

// BigInt
const numeroGrande = BigInt(314159265359);
console.log(`tipo de dato para un BigInt: ${typeof numeroGrande}`);

// valores nulos
const descuento = null;
console.log(`valor nulo: ${descuento}`);

// valores undefines
const precio = null;
console.log(`valor undefine: ${precio}`);

// Symbol, nunca seran iguales
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(`Comparacion entre Symbol: ${primerSymbol === segundoSymbol}`);
