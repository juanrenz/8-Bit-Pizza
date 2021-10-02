class Producto {
    constructor(id, nombre, precio, caracteristica, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.caracteristica = caracteristica;
        this.img = img;
        this.cantidad = cantidad;
    }
}

const productos = [];

productos.push(new Producto("1", "Queso Azul", 50, "Queso Azul gratinado sobre mozzarella", "https://rankea.com.ar/wp-content/uploads/2019/05/pizza-roquefort.jpg", 1));
productos.push(new Producto("2", "Cebolla", 30, "Cebolla a la plancha", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUYxZ-GCyTilDgeMLdpbLPlulziWrc5kFTFm7IO8-5GtFKDqkOHb0xuJLFfwIaZ8waf0&usqp=CAU", 1));
productos.push(new Producto("3", "Salsa", 20, "Elige tu preferida!", "https://s1.eestatic.com/2018/02/10/cocinillas/cocinillas_283989615_116485098_1024x576.jpg", 1));
productos.push(new Producto("4", "Anchoas", 100, "Anchoas sobre tu pizza","https://www.comemelapizza.com/wp-content/uploads/2015/01/Pizza-de-Nduja-y-anchoa-2-1200x675.jpg", 1));

const guardarStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarStorage("ingredientes", JSON.stringify(productos));

let contenedor = document.getElementById("principal")
let acumulador = "";

for (let i = 0; i < productos.length; i++) {

    acumulador += `<div class="principal__cards__contenedor">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${productos[i].img}" alt="Card image cap">
                        <div class="card-body">
                            <h3> Producto: ${productos[i].nombre} </h3>
                            <p> ${productos[i].caracteristica} </p>
                            <b> $ ${productos[i].precio} </b>
                        </div>
                        <button id=boton${productos[i].id} type="button" class="btn btn-outline-warning ">Agregar</button>
                    </div>
                </div>`;
}

contenedor.innerHTML = acumulador;