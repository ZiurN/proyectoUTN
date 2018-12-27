window.onload = iniciogaleria();
window.addEventListener('load', borrarVisores);
var pantalla = determinarPantalla();

function determinarPantalla() {
	"use strict";
	var anchoPantalla = screen.width;
	var anchoDeterminado;
	if (anchoPantalla <= 640) {
		anchoDeterminado = 0;
	} else if (anchoPantalla <= 1023) {
		anchoDeterminado = 1;
	} else if (anchoPantalla > 1023) {
		anchoDeterminado = 2;
	}
	return anchoDeterminado;
}

function borrarVisores() {
	"use strict";
	var visoresMovil = document.getElementsByClassName('m-visor-album');
	for (var i = 0; i < visoresMovil.length; i++) {
		visoresMovil[i].innerHTML = '';
	}
}

function iniciogaleria() {
	"use strict";
	var visorActivo = false;
	var contenedorFoto = document.getElementById('visor-album');

	if (pantalla > 1) {
		var btnMas = document.getElementById('btn-mas');
		var btnMenos = document.getElementById('btn-menos');
		var btnCerrar = document.getElementById('btn-cerrar');
		var btnInfo = document.getElementById('btn-info');
		btnCerrar.addEventListener('click', cerrarVisor);
		btnMas.addEventListener('click', function () {
			//		mostrarInfoImagen(imagenIndex);
			siguenteImagen(+1);
		});
		btnMenos.addEventListener('click', function () {
			//		mostrarInfoImagen(imagenIndex);
			siguenteImagen(-1);
		});
		btnInfo.addEventListener('click', function () {
			mostrarInfoImagen(imagenIndex);
		});
	}


	var galeria = document.getElementById('fotografias-galeria');
	var contenedorMiniaturas = document.getElementById('contenedor-miniaturas');
	var indiceGaleria = document.getElementById('indice-galeria');

	contenedorFoto.addEventListener('mousemove', function (event) { ocultaVisorMiniatura(event); });

	//EL VISOR DE FOTOGRAFIAS
	//Arrays fijos luego de la ejecucion del codigo PHP
	//var miniFotosGaleria = document.getElementsByClassName('foto-miniatura');
	var miniFotos = document.getElementsByClassName('foto-miniatura-visor');
	var infoFotos = document.getElementsByClassName('info-imagen-galeria');

	//Para mostrar el visor
	function cerrarVisor() {
		var temp;
		visorActivo = false;
		contenedorFoto.classList.remove('transicion1');
		contenedorFoto.classList.add('transicion2');
		temp = setTimeout(function () { contenedorFoto.style.display = 'none'; }, 500);

	}

	function mostrarVisor(n) {
		visorActivo = true;
		var nuevoIndex = n + 1;
		contenedorFoto.classList.remove('transicion2');
		contenedorFoto.classList.add('transicion1');
		contenedorFoto.style.display = 'block';
		mostrarImagen(nuevoIndex);
		imagenIndex = nuevoIndex;
		window.scrollTo(0, indiceGaleria.scrollHeight);
		window.onscroll = function () {
			if (visorActivo === true) {
				window.scrollTo(0, indiceGaleria.scrollHeight);
			}
		};
	}

	var imagenIndex;

	galeria.addEventListener('click', function (event) {
		var t = event.target;
		var tIndex = t.dataset.index;
		tIndex = Number(tIndex);
		while (t && t !== this) {

			if (t.matches('.foto-miniatura')) {
				mostrarVisor.call(t, tIndex);
			}
			t = t.parentNode;
		}
	});

	contenedorMiniaturas.addEventListener('click', function (event) {
		var t = event.target;
		var tIndex = t.dataset.index;
		tIndex = Number(tIndex);
		while (t && t !== this) {

			if (t.matches('.foto-miniatura-visor')) {
				tIndex = tIndex + 1;
				mostrarImagen.call(t, tIndex);
			}
			imagenIndex = tIndex;
			t = t.parentNode;
		}
	});

	function siguenteImagen(n) {
		mostrarImagen(imagenIndex += n);
	}

	function mostrarImagen(n) {
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
		var posMiniFoto = miniFotos[imagenIndex - 1].offsetLeft;
		var tamanoImagen = miniFotos[imagenIndex - 1].clientWidth;
		var tamanoContenedor = contenedorMiniaturas.clientWidth;
		console.log('estamos en mostrar imagenes');
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
		for (i = 0; i < miniFotos.length; i++) {
			infoFotos[i].style.display = "none";
			infoFotos[i].style.left = '-30%';
		}
		//Mostrar la imagen seleccionada y resaltar su miniatura
		numeroDeFotos[imagenIndex - 1].style.display = "flex";
		numeroDeFotos[imagenIndex - 1].classList.remove('transicion2');
		numeroDeFotos[imagenIndex - 1].classList.add('transicion1');
		miniFotos[imagenIndex - 1].style.filter = "brightness(99%)";
		infoFotos[imagenIndex - 1].style.display = "block";
		contenedorMiniaturas.scrollLeft = posMiniFoto - tamanoContenedor / 2 + tamanoImagen / 2;
	}

	function ocultaVisorMiniatura(event) {
		var posY = event.clientY;
		var tamanoContenedorFoto = contenedorFoto.offsetHeight;
		//Mover el visor de miniaturas
		if (posY < tamanoContenedorFoto * 0.6) {
			contenedorMiniaturas.style.bottom = '0%';
		} else {
			contenedorMiniaturas.style.bottom = '20%';
		}
	}

	function mostrarInfoImagen(n) {
		imagenIndex = n;
		if (infoFotos[imagenIndex - 1].style.left === '-30%') {
			infoFotos[imagenIndex - 1].style.left = '0%';
		} else {
			infoFotos[imagenIndex - 1].style.left = '-30%';
		}

	}
}

//AJAX//
var peticion;
var peticionVisor;
var galeriaDOM = document.getElementById('fotografias-galeria');
var visorDOM = document.getElementById('visor-album');
//vusores para pantallas pequeñas
var btnLlamadoAjax = document.getElementsByClassName('album-selecion');


window.addEventListener('load', function () {
	"use strict";
	asignarListenersAjax(btnLlamadoAjax);

});

function movilMostrarObjetos(classListeners, objetos, bandera, altura) {
	"use strict";
	if (pantalla <= 1) {
		var listeners = document.getElementsByClassName(classListeners);
		for (var i = 0; i < listeners.length; i++) {
			objetos[i].style.height = '0px';
			const j = i;
			listeners[j].addEventListener('click', function (e) {
				bandera = display(objetos[j], objetos, bandera, altura);

			});
		}
	}
}

var visible = false;

function display(elemento, conjunto, bandera, altura) {
	"use strict";
	if (bandera === undefined) {
		bandera = false;
		if (!bandera) {
			elemento.style.height = altura;
			bandera = !bandera;
		} else {
			if (elemento.style.height !== '0px') {
				elemento.style.height = '0px';
				bandera = !bandera;
			} else {
				for (var i = 0; i < conjunto.length; i++) {
					conjunto[i].style.height = '0px';
				}
				elemento.style.height = altura;
			}
		}
	} else {
		if (!bandera) {
			elemento.style.height = altura;
			bandera = !bandera;
		} else {
			if (elemento.style.height !== '0px') {
				elemento.style.height = '0px';
				bandera = !bandera;
			} else {
				for (var j = 0; j < conjunto.length; j++) {
					conjunto[j].style.height = '0px';
				}
				elemento.style.height = altura;
			}
		}
	}
	return bandera;
}

function asignarListenersAjax(conjunto) {
	"use strict";

	for (var i = 0; i < conjunto.length; i++) {
		listenerAlbum(conjunto[i]);

	}
}

function listenerAlbum(elemento) {
	"use strict";

	elemento.addEventListener('click', function (e) {
		e.preventDefault();
		var album = elemento.value;
		//console.log('value: '+album);
		if (pantalla <= 1) {
			e.preventDefault();
			realizarPeticionVisor(album);
			//console.log('realizar peticion vision');
		}
		else {
			realizarPeticionGaleria(album);
			realizarPeticionVisor(album);
			//console.log('realizar peticion vision');
		}
	});
}

function realizarPeticionGaleria(album) {
	"use strict";
	var url = '/api/galeria';
	var datos = new FormData();
	datos.append('album', album);
	peticion = new XMLHttpRequest();
	peticion.addEventListener('load', mostrarGaleria, false);
	peticion.open("post", url, true);
	peticion.send(datos);
}

function mostrarGaleria() {
	"use strict";
	if (peticion.readyState === 4) {
		if (peticion.status === 200) {
			var fotos = JSON.parse(peticion.response);
			//console.log("largo fotos:  " + fotos.length);
			let stringArmado ="<h1 class='titulo-album'>"+fotos[0].Album+"</h1>";
			for(var i=0; i<fotos.length; i++){
				var alto = fotos[i].Alto*.25;
				var ancho = fotos[i].Ancho*.25;
				stringArmado += "<img data-index='"+i+"' class='foto-miniatura' width='"+ancho+"' height='"+alto+"' src='"+fotos[i].Ruta+"'>";
			}
			galeriaDOM.innerHTML = stringArmado;
			//console.log("armado galeria :" + stringArmado);
		}
	}
}

function realizarPeticionVisor(album) {
	"use strict";
	var urlVisor = '/api';
	var datosVisor = new FormData();
	datosVisor.append('album', album);
	peticionVisor = new XMLHttpRequest();
	peticionVisor.addEventListener('load', function () {
		construirVisor(album);
	}, false);
	peticionVisor.open("post", urlVisor, true);
	peticionVisor.send(datosVisor);
}

function construirVisor(elemento) {
	"use strict";
	if (peticionVisor.readyState === 4) {
		if (peticionVisor.status === 200) {
			if (pantalla <= 1) {
				var visorMovil = document.getElementsByName(elemento);

				var otrosVisores = document.getElementsByClassName('m-visor-album');
				if (visorMovil[0].innerHTML !== '') {
					for (var i = 0; i < otrosVisores.length; i++) {
						otrosVisores[i].innerHTML = '';
					}
				} else {
					for (var j = 0; j < otrosVisores.length; j++) {
						otrosVisores[j].innerHTML = '';
					}

					var fotos = JSON.parse(peticionVisor.response);
					
					var armado = "<div id='imagen-elegida' class='imagen-elegida'>";					
					for(var i = 0; i<fotos.length; i++){
						armado += "<div class='contenedor-imagen-elegida' data-index='"+i+"'>";
							armado += "<img class='foto-unica transicion1' src='"+fotos[i].Ruta+"' alt=''>";
							armado += "<i class='m-btn-info fas fa-info-circle'></i>";
							armado += "<div class='contenedor-info-imagen'>";
								armado += "<div class='info-imagen-galeria'>";
									armado += "<div class='txt-foto-ubicacion'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/ubicacionIcon.svg' alt=''>";
										armado += "</div>";
										armado += "<p>"+fotos[i].Ubicacion+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/distanciaFocalIcon.svg' alt=''>";
										armado += "</div>";
										armado += "<p>"+fotos[i].DistanciaFocal+"</p>"
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/aperturaIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].Apertura+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/velocidadIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].Velocidad+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/IsoIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].ISO+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-sobre'>";
										armado += "<h3 >Sobre la foto: </h3>";
										armado += "<p>"+fotos[i].Descripcion+"</p>";
									armado += "</div>";
								armado += "</div></div></div>";
					}
						armado += "<i id='btn-info' class='btn-visor fas fa-info-circle'></i>";
						armado += "<i id='btn-cerrar' class='btn-visor fa fa-times' aria-hidden='true'></i>";
						armado += "<i id='btn-mas' class='btn-visor fas fa-angle-double-right'></i>";
						armado += "<i id='btn-menos' class='btn-visor fas fa-angle-double-left'></i>";
						armado += "</div>";

						armado +="<div id='contenedor-miniaturas' class='miniaturas-album'>";
						for(var i = 0; i<fotos.length; i++){
							var alto = 200;
							var ancho = (fotos[i].Ancho/fotos[i].Alto)*alto;
							console.log("alto: "+alto);
							console.log("ancho: "+ancho);
							armado += "<img data-index='"+i+"' class='foto-miniatura-visor' width='"+ancho+"' height='"+alto+"' src='"+fotos[i].Ruta+"'>";
						}	
						armado +="</div>";
					

					visorMovil[0].innerHTML = armado;
					var movilInfoImagen = document.getElementsByClassName('contenedor-info-imagen');
					movilMostrarObjetos('m-btn-info', movilInfoImagen, visible, '15rem');

				}
			} else {

				var fotos = JSON.parse(peticionVisor.response);
					//console.log("fotos: "+fotos);
					//console.log("largo: "+fotos.length);
					var armado = "<div id='imagen-elegida' class='imagen-elegida'>";					
					for(var i = 0; i<fotos.length; i++){
						armado += "<div class='contenedor-imagen-elegida' data-index='"+i+"'>";
							armado += "<img class='foto-unica transicion1' src='"+fotos[i].Ruta+"' alt=''>";
							armado += "<i class='m-btn-info fas fa-info-circle'></i>";
							armado += "<div class='contenedor-info-imagen'>";
								armado += "<div class='info-imagen-galeria'>";
									armado += "<div class='txt-foto-ubicacion'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/ubicacionIcon.svg' alt=''>";
										armado += "</div>";
										armado += "<p>"+fotos[i].Ubicacion+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/distanciaFocalIcon.svg' alt=''>";
										armado += "</div>";
										armado += "<p>"+fotos[i].DistanciaFocal+"</p>"
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/aperturaIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].Apertura+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/velocidadIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].Velocidad+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-raw'>";
										armado += "<div class='foto-iconos'>";
											armado += "<img src='/img/iconos/IsoIcon.svg' alt=''>";
										armado += "</div>";
									armado += "<p>"+fotos[i].ISO+"</p>";
									armado += "</div><br>";
									armado += "<div class='txt-foto-sobre'>";
										armado += "<h3 >Sobre la foto: </h3>";
										armado += "<p>"+fotos[i].Descripcion+"</p>";
									armado += "</div>";
								armado += "</div></div></div>";
					}
						armado += "<i id='btn-info' class='btn-visor fas fa-info-circle'></i>";
						armado += "<i id='btn-cerrar' class='btn-visor fa fa-times' aria-hidden='true'></i>";
						armado += "<i id='btn-mas' class='btn-visor fas fa-angle-double-right'></i>";
						armado += "<i id='btn-menos' class='btn-visor fas fa-angle-double-left'></i>";
						armado += "</div>";

						armado +="<div id='contenedor-miniaturas' class='miniaturas-album'>";
						for(var i = 0; i<fotos.length; i++){
							var alto = 200;
							var ancho = (fotos[i].Ancho/fotos[i].Alto)*alto;
							console.log("alto: "+alto);
							console.log("ancho: "+ancho);
							armado += "<img data-index='"+i+"' class='foto-miniatura-visor' width='"+ancho+"' height='"+alto+"' src='"+fotos[i].Ruta+"'>";
						}	
						armado +="</div>";
				//console.log("armado: "+ armado);
				visorDOM.innerHTML = armado;
				iniciogaleria();
			}
		}
	}
}
