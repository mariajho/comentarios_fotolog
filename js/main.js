/*aquí va tu código*/

/*funcion boton*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);
}

/*funcion guardar datos*/
function guardarDatos(){
	var nombre = document.getElementById("clave").value;
	var comentarios = document.getElementById("valor").value;

	sessionStorage.setItem(nombre, comentario);
}
  




/*funcion boton*/
function init(){
	var button = document.getElementById("boton2");
	button.addEventListener("click", limpiar);
}


function recuperarDatos(){
	if((localStor))
}
