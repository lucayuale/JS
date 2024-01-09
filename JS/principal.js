class tapas{
    constructor(id, marca, modelo,precio, stock){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}
const camionetas = [
    {id:"001", marca:"hilux",modelo: "d/c",precio: 200, stock: 30},
    {id:"002", marca:"nissan",modelo: "frontier",precio: 500,stock: 10},
    {id:"003", marca:"ranger",modelo: "xlt",precio: 350,stock: 17},
    {id:"004", marca:"strada",modelo: "comun",precio: 400,stock: 21},
]
class nuevosproductos{
    constructor(marca,precio,modelo, id, stock){
        this.marca = marca
        this.precio = precio
        this.modelo = modelo
        this.id = id
        this.stock = stock
    }
}

const productos = JSON.parse(localStorage.getItem("productos")) || [] 
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []

const agregarproducto = ({marca, precio,id, modelo, stock}) =>{

    if(productos.some(prod=>prod.id===id)){

    }else{
        const productosn = new nuevosproductos(marca, precio, id, modelo, stock)
        productos.push(productosn)
        localStorage.setItem("productos", JSON.stringify(productos))

    }

}
const renderizarProductos = (capsula)=>{
    const contenedorProductos = document.getElementById("contenedorProductos")
    contenedorProductos.innerHTML = ""
    capsula.forEach(({id, modelo, precio, stock, marca})=>{
        const prodCard = document.createElement("div")
        prodCard.classList.add("col-xs")
        prodCard.classList.add("card")
        prodCard.style = "width: 270px;height: 550px; margin:3px"
        prodCard.id = id
        prodCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${marca}</h5>
                    <h6>${modelo}</h6>
                    <p class="card-text">${marca}</p>
                    <span>Stock: ${stock}</span>
                    <span>$ ${precio}</span>
                    <form id="form${id}">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-primary" id="botonProd${id}">Agregar</button>
                    </form>
                </div>`
        contenedorProductos.appendChild(prodCard)
        const btn = document.getElementById(`botonProd${id}`)
        btn.addEventListener("click",(evento)=>{
            evento.preventDefault()
            const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
            if(contadorQuantity>0){
                agregarCarrito({ id, modelo, precio, stock, marca, quantity:contadorQuantity})
                renderizarCarrito()
                const form = document.getElementById(`form${id}`)
                form.reset()
            }
        }) 
    })
}

const productosPreexistentes = ()=>{
    if (productos.length===0){
        camionetas.forEach(prod=>{
            let dato = JSON.parse(JSON.stringify(prod))
                agregarproducto(dato)}
            )
    }
}

const totalCarrito = ()=>{
    let total = carrito.reduce((acumulador, {precio, quantity})=>{
        return acumulador + (precio*quantity)
    }, 0)
    return total
}
const totalCarritoRender = ()=>{
    const carritoTotal = document.getElementById("ultimocarrito")
    carritoTotal.innerHTML=`Precio total: $ ${totalCarrito()}`
}

const agregarCarrito = (objCarrito)=>{
    carrito.push(objCarrito)
    totalCarritoRender()
}



const renderizarCarrito = ()=>{
    const listaCarrito = document.getElementById("listadoc")
    listaCarrito.innerHTML=""
    carrito.forEach(({marca, precio, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto:${marca} -- P/u: ${precio} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
        listaCarrito.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }else{
                    
                }
                
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}

const borrarCarrito = ()=>{
    carrito.length = 0 
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
    renderizarCarrito()
}

const finalizarCompra = (event)=>{
    event.preventDefault()
    const data = new FormData(event.target)
    const cliente = Object.fromEntries(data)
    const ticket = {cliente: cliente, total:totalCarrito(),id:pedidos.length, productos:carrito}
    pedidos.push(ticket)
    localStorage.setItem("pedidos", JSON.stringify(pedidos))
    borrarCarrito()
    let mensaje = document.getElementById("ultimocarrito")
    mensaje.innerHTML = "Muchas gracias por su compra."

}

const compraFinal = document.getElementById("formfinal")
compraFinal.addEventListener("submit",(event)=>{
    event.preventDefault()
    if(carrito.length>0){
        finalizarCompra(event)
    } else {
    }
})
const selectorTipo = document.getElementById("marca")
selectorTipo.onchange = (evt)=>{
    const marcaSeleccionado =  evt.target.value
    if(marcaSeleccionado === "0"){
        renderizarProductos(productos)
    } else {
        renderizarProductos(productos.filter(prod=>prod.marca === marcaSeleccionado))
    }
}

const app = ()=>{
    productosPreexistentes()
    renderizarProductos(productos)
    renderizarCarrito()
    totalCarritoRender()
}

app()

