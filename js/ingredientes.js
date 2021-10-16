const JSONIngredientes = "data/datos.json"
const productos = [];
const guardarStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

$.getJSON(JSONIngredientes, function (respuesta, estado) {
    if(estado === "success"){

        let ingredientes = respuesta

        for (let i = 0; i < ingredientes.length; i++) {
            $("#principal").prepend(`<div class="principal__cards__contenedor">
                                        <div class="card" style="width: 23rem;">
                                            <img class="card-img-top" src="${ingredientes[i].img}" alt="Card image cap">
                                            <div class="card-body">
                                                <h3> ${ingredientes[i].nombre} </h3>
                                                <p> ${ingredientes[i].caracteristica} </p>
                                                <b> $ ${ingredientes[i].precio} </b>
                                            </div>
                                            <button id=boton${ingredientes[i].id} type="button" class="btn btn-outline-warning ">Agregar</button>
                                        </div>
                                    </div>`);

            productos.push(ingredientes[i]);
        }
        guardarStorage("ingredientes", JSON.stringify(productos));
    }
})



