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
const JSONIngredientes = "data/datos.json";

$.getJSON(JSONIngredientes, function (respuesta, estado){
    let ingredientes = respuesta;
    
    if(estado === "success"){
        for (const ingrediente of ingredientes){
            productos.push(new Producto (ingrediente.id, ingrediente.nombre, ingrediente.precio, ingrediente.caracteristica, ingrediente.img, ingrediente.cantidad))
        }
    }
});

const guardarStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarStorage("ingredientes", JSON.stringify(productos));

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        for (let i = 0; i < productos.length; i++) {
            $("#principal").prepend( `<div class="principal__cards__contenedor">
                            <div class="card" style="width: 23rem;">
                                <img class="card-img-top" src="${productos[i].img}" alt="Card image cap">
                                <div class="card-body">
                                    <h3> ${productos[i].nombre} </h3>
                                    <p> ${productos[i].caracteristica} </p>
                                    <b> $ ${productos[i].precio} </b>
                                </div>
                                <button id=boton${productos[i].id} type="button" class="btn btn-outline-warning ">Agregar</button>
                            </div>
                        </div>`)
        };
    }
    xhttp.open("GET", "data/datos.json", true);
    xhttp.send();
}

loadDoc();