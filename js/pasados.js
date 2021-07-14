//Define las variables que necesites

var pasados = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas recientes primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
    
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < pasados.length; j++){
      html += `
              <div class="card w-100 m-3">
                <div class="card-body">
                  <h2 class=" text-primary mb-0">
                    <a href="detalle.html">${pasados[j].nombre}</a>
                  </h2>
                  <p class="mb-0 list-inline-item text-secondary">${pasados[j].fecha} -</p>
                  <p class="mb-0 list-inline-item text-secondary">${pasados[j].lugar}</p>
                  <p class="mb-0">${pasados[j].descripcion}</p>
                  <p class="text-info mb-0">Invitados: ${pasados[j].invitados}</p>
                  <p class="mb-0 text-success">precio: ${pasados[j].precio}</p>
                </div>
              </div>
              `
    }
    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = html
  })
});
