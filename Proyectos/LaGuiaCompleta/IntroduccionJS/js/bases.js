// Repaso JS

// const no se puede reasignar y debe arrancar con un valor
const nombreJ = 'Jeferson';

// let se puee reasignar y no requiere un valor inicial
let equipo = 'Chelsea';

console.log('Hello Work');
console.log(`El equipo favorito de ${nombreJ} es ${equipo}`);

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
const precios = null;
console.log(`valor undefine: ${precios}`);

// Symbol, nunca seran iguales
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(`Comparacion entre Symbol: ${primerSymbol === segundoSymbol}`);

// Objetos
console.log('---------- Objetos Inicio ----------')
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}

console.log(producto)
// Otra forma de representarlo
console.table(producto)
// para acceder a una sola propiedad o atributo
console.log(`El Objeto producto tiene el atributo nombre con el valor de "${producto.nombre}"`)
console.log('# Objetos - Aplicando Destructuring')
const { nombre, precio, disponible } = producto
console.log(`El nombre es ${nombre}`)
console.log(`El precio es ${precio}`)
console.log(`La disponibilidad es ${disponible}`)

// Esto seria igual a esto, pero el anterior Script es la forma moderna:
// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(`El nombre es ${nombre}`)
// console.log(`El precio es ${precio}`)
// console.log(`La disponibilidad es ${disponible}`)
console.log('# Objetos - Object Literal Enhacement')
// agrupar variables en un objeto
// si el key y el value se llaman igual, se puede aplicar como en el atributo de autenticado, de lo contrario tocaria usar como esta en usuario1
const autenticado = true
const usuario1 = 'Marco Romero'
const nuevoObjeto = {
    autenticado,
    usuario : usuario1
}
console.log(nuevoObjeto)
console.log('# Manipulación de Objetos')
const carta = {
    tipo : 'Oscuridad',
    atk : 2500,
    efecto : false
}

// Object.freeze(carta) // No permite modificar eliminar o editar ninguna propiedad
Object.seal(carta) // No permite agregar o eliminar, pero si permite editar propiedades
// Reescribir un valor
carta.efecto = true

// Si no existe lo agrega
carta.img = 'magoOscuro.jpg'

// Eliminar propiedad
delete carta.atk
console.log(carta)

console.log('# Objetos - Destructuring de dos o mas objetos')
const equipos = {
    nombreNuevo : 'Millonarios',
    poder : 85,
    disponible : true
}

const jugador = {
    nombreNuevo : 'Jeferson',
    premium : true,
    datos : {
        maquina : 'PC'
    }
}

const { nombreNuevo } = equipos
const { nombreNuevo : nombrePlayer } = jugador // No se puede usar el mismo nombre, así que permite crear uno nuevo
const { datos : {maquina} } = jugador // De esta forma accedemos al atributo en otro objeto
console.log(`Nombre del equipo: ${nombreNuevo}`)
console.log(`Nombre del Jugador: ${nombrePlayer}`)
console.log(`Consola: ${maquina}`)

console.log('# Objetos - Unir dos o mas objetos')
const magoOscuro = {
    nombre : 'Mago Oscuro',
    nivel : 7,
    efecto : false
}
const cortinaMagiaOscura = {
    nombre : 'Cortina de Magia Oscura',
    tipo : 'Magica',
    continua : false
}

// const magoOscuroCarta = {
    // tipo : 'Oscuridad',
    // ...magoOscuro // spread operator
// }
// console.log(magoOscuroCarta)

// Este codigo,  crea un objeto con dos objetos dentro de este
const magoOscuroCortina = {
    magoOscuro,
    cortinaMagiaOscura : {...cortinaMagiaOscura}
}
console.log(magoOscuroCortina)

// Este codigo, reescribe la primera con el segundo
// const magoOscuroCortina = {
//     ...magoOscuro,
//     ...cortinaMagiaOscura
// }

// Este hace lo mismo del Scritp anterior pero se escribe diferente
const magoOscuroCortina2 = Object.assign(magoOscuro, cortinaMagiaOscura)
console.log(magoOscuroCortina2)
console.log('---------- Objetos Fin ----------')
console.log('---------- Template Strings y Concatenación ----------')
const primerNombre = 'Marco'
const apellido = 'Romero'
const edad = 29
const profesion = 'FrontEnd'
console.log(`El señor ${primerNombre} ${apellido} tiene la edad de ${edad} y se desempeña como ${profesion}`)
console.log('---------- Template Strings Fin ----------')
