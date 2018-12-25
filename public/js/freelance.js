window.onload = init();

function init(){
	"use strict";
	var pantalla = determinarPantalla();
	
	var tamanoPantalla = window.innerHeight;
	
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

	var toolHtml = document.getElementById('herramienta-html');
	var toolCss = document.getElementById('herramienta-css');
	var toolJs = document.getElementById('herramienta-js');
	var toolPhp = document.getElementById('herramienta-php');
	var toolSql = document.getElementById('herramienta-sql');
	var toolRhino = document.getElementById('herramienta-rhino');
	var toolVray = document.getElementById('herramienta-vray');
	var tool3ds = document.getElementById('herramienta-3ds');
	var toolBlender = document.getElementById('herramienta-blender');
	var toolPremiere = document.getElementById('herramienta-premiere');
	var toolAftereffects = document.getElementById('herramienta-aftereffects');
	var toolAudition = document.getElementById('herramienta-audition');
	var toolLigthR =  document.getElementById('herramienta-ligth');
	var toolPhotoshop = document.getElementById('herramienta-photoshop');
	var toolIndesign = document.getElementById('herramienta-indesign');
	var toolIllustratror = document.getElementById('herramienta-illustrator');
	var toolLatex = document.getElementById('herramienta-latex');
	
	window.addEventListener('scroll',function(){
		
		activarEstrella(toolHtml,4);
		activarEstrella(toolCss,4);
		activarEstrella(toolJs,3);
		activarEstrella(toolPhp,3);
		activarEstrella(toolSql,2);
			
		activarEstrella(toolRhino,4);
		activarEstrella(toolVray,4);
		activarEstrella(tool3ds,3);
		activarEstrella(toolBlender,2);
		
		activarEstrella(toolPremiere,4);
		activarEstrella(toolAftereffects,3);
		activarEstrella(toolAudition,2);
		
		activarEstrella(toolPhotoshop,3);
		activarEstrella(toolLigthR,3);
		
		activarEstrella(toolIndesign,3);
		activarEstrella(toolIllustratror,4);
		activarEstrella(toolLatex,4);
				
	});	
	
	
	function activarEstrella(objeto, numero){
		var distancia = objeto.offsetTop;
		var altura = window.scrollY;
		if((distancia - altura < tamanoPantalla*2/3)){
			contadorHabilidad(objeto, numero);
		}
	}

	function contadorHabilidad(objeto, numero){
		var estrellas = objeto.getElementsByClassName('estrella');
		var estrellasVisibles = [];
		for(var i=0; i<numero; i++){
			const j=i;
			setTimeout(function(){
				estrellasVisibles[j]= estrellas[j];
				visibilidad(estrellasVisibles[j]);
			},100);
		}				
	}	
	
	function visibilidad(objeto){
		setTimeout(function(){
			objeto.classList.remove('st9');
			objeto.classList.add('starst0');
		},100);
	}	
}
