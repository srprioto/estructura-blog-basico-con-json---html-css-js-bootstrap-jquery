// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
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
  //Clasifica los eventos segun la fecha actual del JSON
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha > hoy){
      proximos.push(eventos[i]);
    }
  }
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha < hoy){
      pasados.push(eventos[i]);
    }
  }
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  proximos = proximos.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });
  
  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  pasados = pasados.sort(function(x,y){
    if (x.fecha < y.fecha){
      return 1;
    }
    return -1;
  });
  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < 2; j++){

   

    html += `
            
            <div class="col-sm-6">
              <div class="card ">
                <div class="card-body">
                  <h2 class=" text-primary mb-0">
                    
                    <a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a>
                  </h2>
                  <p class="mb-0 list-inline-item text-secondary">${proximos[j].fecha}</p>
                  <p class="mb-0">${proximos[j].descripcion}</p>
                </div>
              </div>
            </div>
            

            `
  }
  //Modifica el DOM agregando el html generado
  document.getElementById("proximos").innerHTML = html
  
  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < 2; j++){
    html += `
            <div class="col-sm-6">
              <div class="card ">
                <div class="card-body">
                  <h2 class=" text-primary mb-0">
                    <a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a>
                  </h2>
                  <p class="mb-0 list-inline-item text-secondary">${pasados[j].fecha} -</p>
                  <p class="mb-0">${pasados[j].descripcion}</p>
                </div>
              </div>
            </div>
            `
  }
  //Modifica el DOM agregando el html generado
  document.getElementById("pasados").innerHTML = html
  })
});
