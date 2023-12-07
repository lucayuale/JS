// objetos simples
const amarok ={
    precio: 120,
    modelo: "extreme",

    mostrardaros: function(){
        alert("su precio y modelo es" + amarok.precio)
    }

}

// arrays

const lista = ["mauro" , "amanda", "leonel", "damian"]

console.log(lista)

//para llamar un numero esn especifico
console.log(lista [3])

//para agregar cosas al array

lista.push("camila") //al final de la lista

lista.unshift("hernesto")//al principio de la lista

//para quitar cosas de la lista

lista.pop() //no necesita parametros borra el ultimo

lista.shift()//no necesita parametros borra el primero

//para agregar muchos datos a la ves 

const arrayrapido = [1,2,3,4,5]

arrayrapido[arrayrapido.length] = 7

//une los elementos del trabajo

console.log("join", arrayrapido(), arrayrapido.join(""))

// se utiliza para mostrar la posicion de el elemento

console.log(arrayrapido.indexOf(3)) //si algo no exciste lo mar como -1

// se utiliza para saber si pertenece un elemento

console.log (arrayrapido.includes(4))

// sirve para ordenar el array

console.log(arrayrapido.sort()) //el orden es alfabetico

// se da vuelta la lista

arrayrapido.reverse()

// el" for of "un for que sirve para los arrays
for(elemento of array){
    console.log(elemento)
}
