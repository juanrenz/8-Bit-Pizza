let carritoDeCompras = [];

const contenedorProductos = document.getElementById("principal");
const contenedorCarrito = document.getElementById("carrito-contenedor");

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal")

for (let i = 0; i < productos.length; i++){
    let boton = document.getElementById(`boton${productos[i].id}`)
    boton.addEventListener("click",()=>{
        agregarAlCarrito(productos[i].id)
    })
};


function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(prodR => prodR.id == id);
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">cantidad: ${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = productos.find(prod => prod.id == id);

        carritoDeCompras.push(productoAgregar);

        productoAgregar.cantidad = 1;
        actualizarCarrito()
        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${productoAgregar.nombre}</p>
                        <p>Precio: ${productoAgregar.precio}</p>
                        <p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><img src="https://w7.pngwing.com/pngs/392/540/png-transparent-pixel-c-pixel-art-waste-openbsd-garbage-miscellaneous-angle-furniture.png" alt="boton-eliminar" srcset=""></button>`
        contenedorCarrito.appendChild(div)
        
        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

        botonEliminar.addEventListener('click', ()=>{
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
            actualizarCarrito()
        }) 
    }
    
}


function actualizarCarrito() {
   contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad,0);
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
}

let botonVaciar = document.getElementById("vaciarCarrito");
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    carritoDeCompras = [];
    contenedorCarrito.innerHTML = "";
    alert("Se vació tu carrito")
    actualizarCarrito();
}