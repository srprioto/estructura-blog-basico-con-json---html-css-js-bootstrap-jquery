// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
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
  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha > hoy){
      proximos.push(eventos[i]);
    }
  }
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  proximos = proximos.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });
  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < proximos.length; j++){
    html += `
            <div class="card w-100 m-3">
              <div class="card-body">
                <h2 class=" text-primary mb-0">
                  <a href="detalle.html">${proximos[j].nombre}</a>
                </h2>
                <p class="mb-0 list-inline-item text-secondary">${proximos[j].fecha} -</p>
                <p class="mb-0 list-inline-item text-secondary">${proximos[j].lugar}</p>
                <p class="mb-0">${proximos[j].descripcion}</p>
                <p class="text-info mb-0">Invitados: ${proximos[j].invitados}</p>
                <p class="mb-0 text-success">precio: ${proximos[j].precio}</p>
              </div>
            </div>
            `
  }
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("proximos").innerHTML = html
  })
});
