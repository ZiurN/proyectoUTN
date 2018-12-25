window.addEventListener('load',borrarVisores);
window.addEventListener('load',function(){
	"use strict";
	asignarListenersAjax(btnLlamadoAjax);
	console.log('asignados listeners');
});

var pantalla = determinarPantalla();
	
function determinarPantalla(){
		"use strict";
		var anchoPantalla = screen.width;
		var anchoDeterminado;
		if(anchoPantalla <= 640){
			anchoDeterminado = 0;
		}else if(anchoPantalla <= 1023){
			anchoDeterminado = 1;
		}else if(anchoPantalla > 1023){
			anchoDeterminado = 2;
		}
		return anchoDeterminado;
	}
function borrarVisores(){
	"use strict";
	var visoresMovil = document.getElementsByClassName('m-3d-visor');
	for(var i=0; i<visoresMovil.length; i++){
		visoresMovil[i].innerHTML = '';
	}
}

function iniciogaleria(){
	"use strict";
	var visorActivo = true;
	var contenedorFoto = document.getElementById('visor-album');
	var btnMas = document.getElementById('btn-mas');
	var btnMenos = document.getElementById('btn-menos');
	var btnCerrar = document.getElementById('btn-cerrar');
	var contenedorMiniaturas = document.getElementById('contenedor-miniaturas');
	var miniFotos = document.getElementsByClassName('foto-miniatura-visor');
	btnCerrar.addEventListener('click',cerrarVisor);
	contenedorFoto.addEventListener('mousemove', function(event){
		ocultaVisorMiniatura(event);
		//console.log(event);
	});
	btnMas.addEventListener('click', function(){
	//		mostrarInfoImagen(imagenIndex);
		siguenteImagen(+1);
	});
	btnMenos.addEventListener('click',function(){
//		mostrarInfoImagen(imagenIndex);
		siguenteImagen(-1);
	});

	contenedorFoto.style.display = 'block';
	window.scrollTo(0,visorDOM.scrollHeight);
		window.onscroll = function (){
			if(visorActivo === true){
				window.scrollTo(0,visorDOM.scrollHeight);
			}
		};
	mostrarImagen(1); 
//EL VISOR DE FOTOGRAFIAS
	//Arrays fijos luego de la ejecucion del codigo PHP
	//var miniFotosGaleria = document.getElementsByClassName('foto-miniatura');
	

	//Para mostrar el visor
	function cerrarVisor(){
		visorActivo = false;
		contenedorFoto.classList.remove('transicion1');
		contenedorFoto.classList.add('transicion2');
		setTimeout(function(){contenedorFoto.style.display = 'none';},500);

	}

	var imagenIndex;

	contenedorMiniaturas.addEventListener('click', function(event) {
			var t = event.target;
			var tIndex = t.dataset.index;
			tIndex = Number(tIndex);
			while (t && t !== this) {

				if (t.matches('.foto-miniatura-visor')) {
					tIndex=tIndex+1;
					mostrarImagen.call(t,tIndex);
				}
				imagenIndex = tIndex;
				t = t.parentNode;
			}
		});

	function siguenteImagen(n) {
		mostrarImagen(imagenIndex += n);
	}

	function mostrarImagen(n) {
		console.log('este mensaje aparece si se activa esta funcion de mostrar imagen');
		var numeroDeFotos = document.getElementsByClassName('contenedor-imagen-elegida');
		imagenIndex = n;
		//Los casos limite:
		if (n > numeroDeFotos.length) {
			imagenIndex = 1;
		}    
		if (n < 1) {
			imagenIndex = numeroDeFotos.length;
		}
		var i;
		var posMiniFoto = miniFotos[imagenIndex-1].offsetLeft;
		var tamanoImagen = miniFotos[imagenIndex-1].clientWidth;
		var tamanoContenedor = contenedorMiniaturas.clientWidth;
		//Ocultar las demas imagenes
		for (i = 0; i < numeroDeFotos.length; i++) {
			numeroDeFotos[i].classList.remove('transicion1');
			numeroDeFotos[i].classList.add('transicion2');
			numeroDeFotos[i].style.display = "none";
		}
		//Opacar las miniaturas de las demas imagenes
		for (i = 0; i < miniFotos.length; i++) {
			miniFotos[i].style.filter = "brightness(35%)";
			miniFotos[i].style.position = "relative";
		}
		//Mostrar la imagen seleccionada y resaltar su miniatura
		numeroDeFotos[imagenIndex-1].style.display = "flex"; 
		numeroDeFotos[imagenIndex-1].classList.remove('transicion2');
		numeroDeFotos[imagenIndex-1].classList.add('transicion1');
		miniFotos[imagenIndex-1].style.filter = "brightness(99%)";
		contenedorMiniaturas.scrollLeft = posMiniFoto-tamanoContenedor/2+tamanoImagen/2;
	}

	function ocultaVisorMiniatura(event){
		var posY = event.clientY;
		//console.log(posY);
		var tamanoContenedorFoto = contenedorFoto.offsetHeight;
		//Mover el visor de miniaturas
		if(posY < tamanoContenedorFoto*0.6 ){
			contenedorMiniaturas.style.bottom = '0%';
		}else{
			contenedorMiniaturas.style.bottom = '20%';
		}
	}
}
//AJAX//
var peticionVisor;
var visorDOM = document.getElementById('visor-album');
var btnLlamadoAjax = document.getElementsByClassName('proyecto3d-boton-imagenes');
//vusores para pantallas pequeñas



function asignarListenersAjax(conjunto){
	"use strict";
	console.log('entrando en los listeners');
	for (var i=0; i<conjunto.length; i++ ){
		listenerAlbum(conjunto[i]);
		console.log('listener N:' + i);
	}
}

function listenerAlbum (elemento){
	"use strict";
	elemento.addEventListener('click',function(e){
		e.preventDefault();
		var botonContenido = e.target;
		var album = elemento.value;
		console.log("se capturo el valor de album: "+ album);
			realizarPeticionVisor(album, botonContenido);
			console.log('peticion de visor realizada');
		});
}

function realizarPeticionVisor(album, boton){
	"use strict";
	var urlVisor = '/api';
	var datosVisor = new FormData();
	datosVisor.append('album',album);
	peticionVisor = new XMLHttpRequest();
		peticionVisor.addEventListener('load', function(){
			construirVisor(album, boton);
		}, false);
		console.log('aqui ya se envio el contruir visor para el album: '+album);
		peticionVisor.open("post", urlVisor, true);
	peticionVisor.send(datosVisor);
}

function construirVisor(elemento,boton){
	"use strict";
	if(peticionVisor.readyState === 4){
		if(peticionVisor.status === 200){
			var textoArmado = '';
			var fotos = JSON.parse(peticionVisor.response);
			if(pantalla <= 1){
				var visorMovil = document.getElementsByName(elemento);
				var otrosVisores = document.getElementsByClassName('m-3d-visor');
				var otrosBotones = document.getElementsByClassName('proyecto3d-boton-imagenes');
				if(visorMovil[0].innerHTML !== ''){
					for (var i = 0; i< otrosVisores.length; i++){
						otrosVisores[i].innerHTML = '';
						otrosBotones[i].innerHTML = 'Ver imágenes';
						console.log('dando click al mismo boton');
					}
				}else{
					for (var j = 0; j< otrosVisores.length; j++){
						otrosVisores[j].innerHTML = '';
						otrosBotones[j].innerHTML = 'Ver imágenes';
						boton.innerHTML = 'Ocultar imágenes';
						console.log('dando click al mismo boton2');
					}

					textoArmado += "<div id='imagen-elegida' class='imagen-elegida'>";

					for(var i=0; i<fotos.length; i++){
						textoArmado += "<div class='contenedor-imagen-elegida' data-index='"+i+"'>";
							textoArmado += "<img class='foto-unica transicion1' src='"+fotos[i].Ruta+"' alt=''>";
						textoArmado += "</div>";
					}

					textoArmado += "<i id='btn-cerrar' class='btn-visor fa fa-times' aria-hidden='true'></i>";
					textoArmado += "<i id='btn-mas' class='btn-visor fas fa-angle-double-right'></i>";
					textoArmado += "<i id='btn-menos' class='btn-visor fas fa-angle-double-left'></i>";
					textoArmado += "</div>";
					textoArmado += "<div id='contenedor-miniaturas' class='miniaturas-album'>";
						for(var i=0; i<fotos.length; i++){
							var alto =160;
							var ancho = (1.777777)*alto;
							textoArmado += "<img data-index='"+i+"' class='foto-miniatura-visor' width='"+ancho+"px' height='"+alto+"px' src='"+fotos[i].Ruta+"' >";
						}
					textoArmado += "</div>";
					
					visorMovil[0].innerHTML = textoArmado;
					console.log('Se supone que ya estan los listeners');
				}			
			}else{
			console.log('para una pantalla de 1024 o mas deberia verse este mensaje');

			textoArmado += "<div id='imagen-elegida' class='imagen-elegida'>";

					for(var i=0; i<fotos.length; i++){
						textoArmado += "<div class='contenedor-imagen-elegida' data-index='"+i+"'>";
							textoArmado += "<img class='foto-unica transicion1' src='"+fotos[i].Ruta+"' alt=''>";
						textoArmado += "</div>";
					}

					textoArmado += "<i id='btn-cerrar' class='btn-visor fa fa-times' aria-hidden='true'></i>";
					textoArmado += "<i id='btn-mas' class='btn-visor fas fa-angle-double-right'></i>";
					textoArmado += "<i id='btn-menos' class='btn-visor fas fa-angle-double-left'></i>";
					textoArmado += "</div>";
					textoArmado += "<div id='contenedor-miniaturas' class='miniaturas-album'>";
						for(var i=0; i<fotos.length; i++){
							var alto =160;
							var ancho = (1.777777)*alto;
							textoArmado += "<img data-index='"+i+"' class='foto-miniatura-visor' width='"+ancho+"px' height='"+alto+"px' src='"+fotos[i].Ruta+"' >";
						}
					textoArmado += "</div>";

			visorDOM.innerHTML = textoArmado;
			iniciogaleria();
			}
		}
	}
}
