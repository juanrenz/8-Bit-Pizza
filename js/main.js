class Producto{
    constructor(id, nombre, precio, caracteristica) {
        this.id = id;
        this.nombre   = nombre;
        this.precio  = precio;
        this.caracteristica = caracteristica;
        this.detalles = function () {alert(caracteristica)}
    }
}

const productos = [];

productos.push(new Producto ("1", "Queso Azul", 50, "Queso Azul gratinado sobre mozzarella"));
productos.push(new Producto ("2", "Cebolla", 30, "Cebolla a la plancha"));
productos.push(new Producto ("3", "Salsa", 20, "Elige tu preferida!"));
productos.push(new Producto ("4", "Anchoas", 100, "Anchoas sobre tu pizza"));

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
    let agregar = parseInt(prompt("Seleccione el ingrediente a agregar \n\n1- " + productos[0].nombre + "\n2- " + productos[1].nombre + "\n3- " + productos[2].nombre + "\n4- " + productos[3].nombre))

    switch (agregar) {
        case 1:
        ingrediente.push(productos[agregar - 1])
        productos[0].detalles()
        break;

        case 2:
        ingrediente.push(productos[agregar - 1])
        productos[1].detalles()
        break;

        case 3:
        ingrediente.push(productos[agregar - 1])
        productos[2].detalles()
        break;

        case 4:
        ingrediente.push(productos[agregar - 1])
        productos[3].detalles()
        break;
    
        default:

        break;
    }
    
}


function calcularTotal(){

    for (let i = 0; i < ingrediente.length; i++) {
        total = total + ingrediente[i].precio 
    }if (total !== 0) {
        console.log("El total a abonar es: " + total.toFixed(2) + "\n\n Gracias por tu compra!" )
        alert("El total a abonar es: " + total.toFixed(2) + "\n\n Gracias por tu compra!" )
    }else{
        alert("Tu carrito esta vacio, agrega un ingrediente!")
    }
    
};

function mostrarCarrito() {
    console.log(ingrediente)
};



