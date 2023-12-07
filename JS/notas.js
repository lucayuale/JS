// operadores logicas (and/&&), (or/ ||), (or ex/ |)


// operadores comparativos (<, >, ==, <=, >=, ===, !==)



// if(true, false)

if (saludo === "hola" ) {
    console.log("es verdadero") 
}
else {console.log("es falso")}




if (saludo === "hola" ) {
    console.log("es verdaderor") 
}
else if ( saludo === insulto )
{
    console.log("podes retirarte")
} 
else {console.log("salude")}



// for (variable; argumento; condicion )

for (let i = 0; i <= 6; i=i + 1 ){
    console.log("este es i", i)
}

// switch break(corta va despues de cada case)



// while (argumento)
i1 = 0
while ( i1++ ){
    console.log(i1)
}





function compratapas(){
    if (camioneta === "Ranger" || camioneta === "Nissan" || camioneta === "Strada" || camioneta === "Hilux") {
        let camionetapersonal = confirm("quiere comprar una tapa?");
        if(camionetapersonal === true){    
            sumarimpuesto()
        }
        else {
            alert("puede retirarse")
        }
    }
    else{
        alert("no trabajamos con esa marca");
    }
}