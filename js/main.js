class Producto {
    constructor(id, nombre, precio, caracteristica) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.caracteristica = caracteristica;
        this.detalles = function () { alert(caracteristica) }
    }
}

const productos = [];

productos.push(new Producto("1", "Queso Azul", 50, "Queso Azul gratinado sobre mozzarella"));
productos.push(new Producto("2", "Cebolla", 30, "Cebolla a la plancha"));
productos.push(new Producto("3", "Salsa", 20, "Elige tu preferida!"));
productos.push(new Producto("4", "Anchoas", 100, "Anchoas sobre tu pizza"));

let contenedor = document.getElementById("principal")
let acumulador = "";


for (let i = 0; i < productos.length; i++) {

    acumulador += `<div class="principal__cards__contenedor">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwy1aUOF5yO-8x5JhprUk2Oe9aPkUEZKf5VLka8cyS6v14XtpyZfo8EPSTwH3YQPa68Lk&usqp=CAU" alt="Card image cap">
                        <div class="card-body">
                            <h3> Producto: ${productos[i].nombre} </h3>
                            <p> ${productos[i].caracteristica} </p>
                            <b> $ ${productos[i].precio} </b>;
                        </div>
                    </div>
                </div>`;
}

contenedor.innerHTML = acumulador;

