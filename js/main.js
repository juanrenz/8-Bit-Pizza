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
        div.innerHTML = `<p class = "textoModal">${productoAgregar.nombre}</p>
                        <p class = "textoModal">Precio: ${productoAgregar.precio}</p>
                        <p class = "textoModal" id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>
                        <img class="imgProducto" src="${productoAgregar.img}" alt="">
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><img src="https://w7.pngwing.com/pngs/392/540/png-transparent-pixel-c-pixel-art-waste-openbsd-garbage-miscellaneous-angle-furniture.png" alt="boton-eliminar" srcset=""></button>`
        contenedorCarrito.appendChild(div)
        
        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

        botonEliminar.addEventListener('click', ()=>{
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
            alertify.notify('Eliminado!','custom');
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
    swal({
        title: "Estas seguro?",
        text: "Te vas a perder una gran pizza!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Se vaci?? tu carrito", {
            icon: "success",
          });
          carritoDeCompras = [];
          contenedorCarrito.innerHTML = "";
          actualizarCarrito();
        } else {
          swal("Si!! Tu pizza sigue intacta");
        }
      });
}

/* FORM */

$("#contactForm").submit(enviar);
let formulario = [];

function enviar(e) {
    e.preventDefault();
    /*capturando valores del input*/
    let nombre= $("#name").val();
    let email = $("#email").val();
    let celular = $("#phone").val();
    let mensaje = $("#message").val();

    console.log(nombre);
    console.log(email);
    console.log(celular);
    console.log(mensaje);

    let contacto = {
        nombre,
        email,
        celular,
        mensaje
    }

    if (localStorage.getItem('contacto') === null) {
        formulario.push(contacto)
        localStorage.setItem('contacto', JSON.stringify(formulario));
    } else {
        let contacto = JSON.parse(localStorage.getItem('contacto'));
        formulario.push(contacto)
        localStorage.setItem('contacto', JSON.stringify(formulario));
    }
    
    alertify.success('Consulta enviada! Gracias por contactarte');
    $("#contactForm").trigger("reset");
}

