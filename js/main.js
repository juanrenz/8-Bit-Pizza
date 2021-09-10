productos = [
    
    producto1 = {
        id: 1,
        nombre: 'Queso',
        precio: 30,

    },

    producto2 = {
        id: 2,
        nombre: 'Cebolla',
        precio: 50,
    },

    producto3 = {
        id: 3,
        nombre: 'Salsa de tomate',
        precio: 50,
    },

    producto4 = {
        id: 4,
        nombre: 'Queso Azul',
        precio: 80,
    }

];

let total = 0;
let  ingrediente= [];

function start() {
    let opcion = parseInt(prompt("Seleccione la opcion deseada \n\n 1- Agregar ingrediente \n 2- Realizar Pago \n 3- Vaciar Carrito"))

    switch (opcion) {
        case 1:
            agregarIngrediente();
            alert("Agregado!")
        break;

        case 2:
            calcularTotal();
        break;

        case 3:
            ingrediente = [];
            total = 0;
            alert("Su carrito se encuentra vacio")
        break;
            
        default:
        alert("La opcion ingresada es incorrecta")

        break;
    }
}



function agregarIngrediente(){
    let agregar = parseInt(prompt("Seleccione el ingrediente a agregar \n\n 1- Queso \n 2- Cebolla \n 3- Salsa de Tomate \n 4- Queso Azul"))

    switch (agregar) {
        case 1:
        ingrediente.push(productos[agregar - 1])
        break;

        case 2:
        ingrediente.push(productos[agregar - 1])
        break;

        case 3:
        ingrediente.push(productos[agregar - 1])
        break;

        case 4:
        ingrediente.push(productos[agregar - 1])
        break;
    
        default:

        break;
    }
    
}


function calcularTotal(){

    for (let i = 0; i < ingrediente.length; i++) {
        total = total + ingrediente[i].precio 
    }
    console.log("El total a abonar es: " + total.toFixed(2) + "\n\n Gracias por tu compra!" )
    alert("El total a abonar es: " + total.toFixed(2) + "\n\n Gracias por tu compra!" )
}

function mostrarCarrito() {
    console.log(ingrediente)
}



