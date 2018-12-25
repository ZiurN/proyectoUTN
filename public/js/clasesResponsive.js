var pantalla = determinarPantalla();

function determinarPantalla(){
		var anchoPantalla = screen.width;
		var anchoDeterminado;
		if(anchoPantalla <= 600){
			anchoDeterminado = 0;
		}else if(anchoPantalla <= 1024){
			anchoDeterminado = 1;
		}else if(anchoPantalla > 1024){
			anchoDeterminado = 2;
		}
		return anchoDeterminado;
	}
