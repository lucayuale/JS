let confirmar = true
const nombre = "andres"
const mail = "andres@gmail.com"
const contrasena = "1234"
const marcas = ["Amarok", "Nissan", "Hilux", "Strada"]
const opiniones =["son muy seguras y faciles de colocar","super sencillo de colocar y muy buena la garantia",]
function mostrarmarcas(){
    alert(marcas)
    menu()
}
function inicio(){

    
    for(i=0 ; i < 3; i++) {
        const usuario = {
            nombre: prompt("ingrese su nombre"),
            mail: prompt("ingrese su mail"),
            contrasenaa:prompt("ingrese su contraseña") ,
        }
        if(usuario.contrasenaa === contrasena && usuario.mail === mail && usuario.nombre === nombre ){
            menu()
            break
        }else{
            alert("introduzca de nuevo sus datos recuerde que solo tiene tres intentos")
        }
    }
}

function menu(){
    let eleccion = prompt("Si quiere saber informacion sobre la tapa ponga 1, si quiere saber el precio de la tapa ponga 2, quiere ver las marcas con las que trabajamos ponga 3, si quiere dejar una opinion y ver las que tenemos ponga 4, si quiere salir ponga 5")
    switch (eleccion){
        case "1":
            info()
            break
        case "2":
           sumarimpuesto()
            break
        case "3":
            mostrarmarcas()
        break
        case "4":
            opinion()
        break
        default:
            alert("Gracias por visitarnos")
    }
}
function opinion(){
    alert(opiniones)
    opiniones[opiniones.length] = prompt("deje su opinion aqui")
    menu()
}
function datoscamioneta(){

        alert("su camioneta es una" + modelo + "de ano" + ano)
        sumarimpuesto()
}
function sumarimpuesto(){
    const camioneta = {
        marca : prompt("indique su marca de camioneta (Amarok, Nissan, Hilux, Strada)"),
        modelo: prompt("indique su modelo "),
        ano: prompt ("indique de que año es su camioneta"),
    }
    if(camioneta.marca === "Amarok" || camioneta.marca === "Hilux" || camioneta.marca === "Nissan" || camioneta.marca === "Strada"){
        switch (camioneta.marca){
            case "Amarok":
                let r1 = 100*1.21 
                alert ("su precio es" + r1)
                menu()
                break
            case "Nissan":
                let r2 = 400*1.21 
                alert ("su precio es" + r2)
                menu()
                break
            case "Hilux":
                let r3 = 300*1.21
                alert ("su precio es" + r3)
                menu() 
                break
            default:
                let r4 =500*1.21 
                alert ("su precio es" + r4)
                menu()

        }
    }else{
        alert("no trabajamos con ese modelo")
        menu()
    }
}
function info(){
    alert("las tapas son muy seguras, estana hechas 100% de aluminio, son super faciles de instalar y seguras, son 90% hermeticas y las mejores que vas a encontrar en el mercado")
    menu()
} 
inicio()