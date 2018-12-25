window.onload = init();

function init (){
	"use strict";
	var menu = document.getElementById("navbar");
	var logo = document.getElementById("logo");
	var btn = document.getElementById("btn-abajo-1");
	var main = document.getElementById("main");	
	var tituloPagina = document.getElementById("titulo-pagina");
	window.addEventListener('load',asignarMarco);
	
	var pantalla = determinarPantalla();
	
	function determinarPantalla(){
		var anchoPantalla = window.innerWidth;
		console.log('ancho de pantalla= '+anchoPantalla);
		var anchoDeterminado;
		if(anchoPantalla <= 640){
			anchoDeterminado = 0;
		}else if(anchoPantalla < 1280){
			anchoDeterminado = 1;
		}else if(anchoPantalla >= 1280){
			anchoDeterminado = 2;
		}
		console.log('ancho determinado ='+ anchoDeterminado);
		return anchoDeterminado;
	}
	
	function asignarMarco(){
		if(pantalla === 2){
			var anchoPantalla = screen.width;
			var porcentaje = (1280/anchoPantalla)*100;
			var porcentajeMargen = (100%-porcentaje)/2;
			var contenedoresMargen = document.getElementsByClassName('sub-main-margen');
			for(var i=0; contenedoresMargen.length; i++){
				contenedoresMargen[i].style.paddingLeft = porcentajeMargen+"%";
				contenedoresMargen[i].style.paddingRight = porcentajeMargen+"%";
			}
				
			}
		}
	
	var tamanoPantalla = window.innerHeight;

	window.addEventListener("scroll", menuUnion);
	window.addEventListener('wheel',function(e){mostrarMenu(e);});
	window.addEventListener('beforeunload', function(){
		setTimeout(window.scrollTo(0,0),500);
	});

	function menuUnion() {
		var distancia = main.offsetTop;
		var altura = window.scrollY;
		//Modificador de la barra de navegación
		if(pantalla > 1){
			if ((distancia - altura < tamanoPantalla / 2)) {
				logo.classList.remove("logo");
				logo.classList.add("logo-scrolled");
				menu.classList.remove("navbar");
				menu.classList.add("navbar-scrolled");
			} else {
				logo.classList.remove("logo-scrolled");
				logo.classList.add("logo");
				menu.classList.remove("navbar-scrolled");
				menu.classList.add("navbar");
			}
		}
		//Ocultar el boton luego de cierta altura
		if(distancia - altura < (tamanoPantalla / 5)*4){
			btn.style.opacity = 0;
		}else {
			btn.style.opacity = 1;	
		}
		//Ocultar el TITULO DE LA PAGINA luego de cierta altura
		if(distancia - altura < (tamanoPantalla / 100)*99){
			tituloPagina.style.opacity = 0;
		}else {
			tituloPagina.style.opacity = 1;
		}
	}

	function mostrarMenu(e){
		var header = document.getElementById("menu-principal");
		var Y = e.deltaY;
		var menu = document.getElementById("navbar");
		if(pantalla > 1){
			if(menu.className === "navbar-scrolled"){
				header.style.top = "-4.25rem";
				if(Y > 0){
					header.style.top = "-4.25rem";
				}else if(Y < 0) {
					header.style.top = "0";	
				}
			}	
		}
		if(pantalla <= 1){
			var botonMenu = document.getElementById('navbar-boton-contenedor');
			if(Y > 0){
				botonMenu.style.top = "-4.25rem";
				header.style.top = "-4.25rem";
			}else if(Y < 0) {
				botonMenu.style.top = "0";
				header.style.top = "0";				
			}
		}
	}
	
	if(pantalla <= 1){
		var botonMenu = document.getElementById('navbar-boton');
		botonMenu.addEventListener('click', menuBoton);
	}
	var visible = false;
	
	function menuBoton(){
		var menu = document.getElementById('navbar');
		if(!visible){
			menu.style.left = "0%";
			visible = !visible;
		}else{
			menu.style.left = "-81vw";
			visible =!visible;
		}
	}	
}