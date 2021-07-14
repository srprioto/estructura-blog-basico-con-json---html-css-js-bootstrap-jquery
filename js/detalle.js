// Hemos omitido los acentos en los comentarios por compatibilidad
// var evento;
// var eventos;

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var url = window.location.search;
  var prodId = url.replace("?id=", '');

  console.log("este es el id de la variable: " + prodId);

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax(
    {
      url: "info.json"
    })
    .done(function (resultado) {

    //Guarda el resultado en una variable


      


    const eventos = resultado.eventos;

    const busqueda = eventos.filter(evento => {
      if (evento.id == prodId) {
        return evento
      }
    })

    console.log(busqueda[0]);

    const html = `
      <div class="card w-100 m-3">
        <div class="card-body">
          <h2 class=" text-primary mb-0">${eventos[prodId-1].nombre}</h2>
          <p class="mb-0 list-inline-item text-secondary">${eventos[prodId-1].fecha}</p>
          <p class="mb-0 list-inline-item text-secondary">${eventos[prodId-1].descripcion}</p>
          <p class="mb-0">${eventos[prodId-1].lugar}</p>
          <p class="text-info mb-0">Invitados:${eventos[prodId-1].invitados}</p>
          <p class="mb-0 text-success">precio: ${eventos[prodId-1].precio}</p>
        </div>
      </div>
    `

    //Busca el elemento en el arreglo
 

    //Crea un string que contenga el HTML que describe el detalle del evento


    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html



  })


});

