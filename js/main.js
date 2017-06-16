/*aquí va tu código*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);
}

function guardarDatos(){
	localStorage.nombre = document.getElementById("clave").value;
	localStorage.comentarios = document.getElementById("valor").value;
}

function recuperarDatos(){
	if((localStor))
}
