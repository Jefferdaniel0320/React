// Arreglos
console.log('---------- Arreglos ----------')

const numeros = [20, 30, 40]
console.log(numeros)
console.table(numeros) // Se muestra en forma de tabla
console.log(`Accediendo al tercer elemento del arreglo: ${numeros[2]}`)

console.log('---------- Modificar Arreglos ----------')

const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node']

// tecnologias.shift() // Elimina el primer elemento del Arreglo

// De esta forma es no mutable
const tecnologias2 = tecnologias.filter(function(tech) {
    if (tech !== 'HTML') {
        return tech
    }
})

console.log(tecnologias2)
// De esta forma es no mutable
const tecnologias3 = tecnologias.map(function(tech){
    if (tech === 'Node') {
        return 'Nest'
    } else {
        return tech
    }
})

console.log(tecnologias3)