window.onload = pruebafuncion();

function pruebafuncion(){
	"use strict";
	
	var trabajos = document.getElementsByClassName('experiencia-laboral');
	var kunstmann = document.getElementById('tl-kunstmann');
	var quatre = document.getElementById('tl-quatre');
	var dagda = document.getElementById('tl-dagda');
	var pioneros = document.getElementById('tl-pioneros');
	var llao = document.getElementById('tl-llao');
	var oliver = document.getElementById('tl-oliver');
	var chamberi = document.getElementById('tl-chamberi');
	var gigis = document.getElementById('tl-gigis');
	var saja = document.getElementById('tl-saja');
	var monkey = document.getElementById('tl-monkey');
	var laforchetta = document.getElementById('tl-forchetta');
	var solowrap = document.getElementById('tl-solowrap');
	var gimnasio = document.getElementById('tl-gimnasio');
	var fude = document.getElementById('tl-fude');
	var mesabar = document.getElementById('tl-mesa');
	var filosofia = document.getElementById('tl-unal-filo');
	var fisica1 = document.getElementById('tl-unal-fisica1');
	var fisica2 = document.getElementById('tl-unal-fisica2');
	var cocina = document.getElementById('tl-cocina');
	var habilidadesDescripcion = document.getElementsByClassName('descripcion-skill');

	kunstmann.addEventListener('click',function(){
		mostrarTrabajo('trabajo-kunstmann');
	});
	quatre.addEventListener('click',function(){
		mostrarTrabajo('trabajo-quatre');
	});
	dagda.addEventListener('click',function(){
		mostrarTrabajo('trabajo-dadga');
	});
	pioneros.addEventListener('click',function(){
		mostrarTrabajo('trabajo-pioneros');
	});
	llao.addEventListener('click',function(){
		mostrarTrabajo('trabajo-llao');
	});
	oliver.addEventListener('click',function(){
		mostrarTrabajo('trabajo-oliver');
	});
	chamberi.addEventListener('click',function(){
		mostrarTrabajo('trabajo-chamberi');
	});
	gigis.addEventListener('click',function(){
		mostrarTrabajo('trabajo-gigis');
	});
	saja.addEventListener('click',function(){
		mostrarTrabajo('trabajo-saja');
	});
	monkey.addEventListener('click',function(){
		mostrarTrabajo('trabajo-monkey');
	});
	laforchetta.addEventListener('click',function(){
		mostrarTrabajo('trabajo-laforchetta');
	});
	solowrap.addEventListener('click',function(){
		mostrarTrabajo('trabajo-solowrap');
	});
	gimnasio.addEventListener('click',function(){
		mostrarTrabajo('trabajo-gimnasio');
	});
	fude.addEventListener('click',function(){
		mostrarTrabajo('formacion-fude');
	});
	filosofia.addEventListener('click',function(){
		mostrarTrabajo('formacion-filosofia');
	});
	mesabar.addEventListener('click',function(){
		mostrarTrabajo('formacion-mesa');
	});
	fisica1.addEventListener('click',function(){
		mostrarTrabajo('formacion-fisica');
	});
	fisica2.addEventListener('click',function(){
		mostrarTrabajo('formacion-fisica');
	});
	cocina.addEventListener('click',function(){
		mostrarTrabajo('formacion-cocina');
	});
	
	var pantalla = determinarPantalla();
	
	function determinarPantalla(){
		var anchoPantalla = screen.width;
		var anchoDeterminado;
		if(anchoPantalla <= 650){
			anchoDeterminado = 0;
		}else if(anchoPantalla <= 1023){
			anchoDeterminado = 1;
		}else if(anchoPantalla <= 1024){
			anchoDeterminado = 2;
		}else if(anchoPantalla > 1024){
			anchoDeterminado = 3;
		}
		return anchoDeterminado;
	}
	
	window.addEventListener('load', function(){
		if(pantalla <= 1){
			movilMostrarObjetos('m-boton-experiencia',trabajos, visible,'50rem');
			movilMostrarObjetos('imagen-skills', habilidadesDescripcion, visibleSkill,'25rem');
			console.log('pantalla es igual a: '+pantalla);
		}else if(pantalla < 3) {
			movilMostrarObjetos('imagen-skills', habilidadesDescripcion, visibleSkill,'18rem');
			console.log('pantalla es igual a: '+pantalla);
		}			
	});
//PARA CELULARES Y COSAS ASI//
	
	function movilMostrarObjetos(classListeners,objetos,bandera,altura){
		var listeners = document.getElementsByClassName(classListeners);
		for(var i=0; i < listeners.length; i++){
			objetos[i].style.height = '0px';
			const j = i;
			listeners[j].addEventListener('click',function(e){
				bandera = display(objetos[j],objetos,bandera,altura);
			});
		}
	}

	var visible = false;
	var visibleSkill = false;
			
	function display(elemento, conjunto, bandera, altura){
		if(bandera === undefined){
			bandera = false;
			if(!bandera){
				elemento.style.height = altura;
				bandera=!bandera;
			}else{
				if(elemento.style.height !== '0px'){
					elemento.style.height = '0px';
					bandera = !bandera;			
				}else{
					for(var i=0; i < conjunto.length; i++){
						conjunto[i].style.height = '0px';
					}
					elemento.style.height = altura;
				}
			}
		}else{
			if(!bandera){
				elemento.style.height = altura;
				bandera=!bandera;
			}else{
				if(elemento.style.height !== '0px'){
					elemento.style.height = '0px';
					bandera = !bandera;				
				}else{
					for(var j=0; j < conjunto.length; j++){
						conjunto[j].style.height = '0px';
					}
					elemento.style.height = altura;
				}
			}
		}
		return bandera;
	}	
//PARA OTRAS COSAS
	function mostrarTrabajo(cosito){
		var i;
		var puesto = document.getElementById(cosito);
		for (i = 0; i < trabajos.length; i++){
			trabajos[i].style.opacity = '0';
			trabajos[i].style.display = 'none';
		}
		puesto.style.display = 'block';
		puesto.style.opacity = '1';
	}
	
	var tamanoPantalla = window.innerHeight;
	
	var skillAdministracion = document.getElementById('cocina-administracion');
	var skillNormatividad = document.getElementById('cocina-normatividad');
	var skillServicio = document.getElementById('cocina-servicio');
	var skillCaliente = document.getElementById('cocina-caliente');
	var skillFria =  document.getElementById('cocina-fria');
	var skillReposteria = document.getElementById('cocina-reposteria');
	var skillPanaderia= document.getElementById('cocina-panaderia');
	var skillParrilla = document.getElementById('cocina-parrilla');
		
	window.addEventListener('scroll',function(){
		
		activarHabilidad(skillAdministracion,'cocina-administracion', 20);
		activarHabilidad(skillNormatividad,'cocina-normatividad', 17);
		activarHabilidad(skillServicio,'cocina-servicio', 15);
		activarHabilidad(skillCaliente,'cocina-caliente', 22);
		activarHabilidad(skillFria,'cocina-fria', 12);
		activarHabilidad(skillReposteria,'cocina-reposteria', 15);
		activarHabilidad(skillPanaderia,'cocina-panaderia', 17);
		activarHabilidad(skillParrilla,'cocina-parrilla', 13);		
	});
	
	var banderaHover = true;
		
	function activarHabilidad(objeto, skill, numero){
		if(banderaHover){
			var distancia = objeto.offsetTop;
			var altura = window.scrollY;
			if((distancia - altura < tamanoPantalla*2/3)){
				contadorHabilidad(skill, numero);
			}
		}
	}
			
	function contadorHabilidad(skill,numero){
		var habilidad = document.getElementById(skill);
		var barras = habilidad.getElementsByClassName('barra');
		var barrasVisibles = [];
		for(var i=0; i<numero; i++){
			const j=i;
			barrasVisibles[j]= barras[j];
			setTimeout(function(){
				visibilidad(barrasVisibles[j]);
			},300);
		}				
	}	
	
	function visibilidad(objeto){
			objeto.style.display = 'block';
	}
}



