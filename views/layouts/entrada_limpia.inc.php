<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Blog</title>
	<link rel="icon" type="image/png" href="/img/iconos/logoicon.ico">
	<link rel="stylesheet" href="<?php echo RUTA_CSS?>editor.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" > 
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Advent+Pro|Julius+Sans+One" > 
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" >
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/editor.css">
	
	<script type="text/javascript" src="js/jquery-1.12.0.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/editor.js"></script>	
	<script type="text/javascript">
		$(document).ready(function(){
			$('#txt-content').Editor();
		});	
	</script>
	
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<form action="<?php echo RUTA_SUBIDA_POSTS;?>" method="post" id="frm-test" enctype="multipart/form-data">
					<div class="form-group">
						<label for="titulo-entrada">Titulo de la entrada</label>
						<input type="text" class="form-control" name="titulo-entrada"</input>
							<br>

						<label for="fecha-entrada">Fecha de publicación</label>
						<input type="date" class="form-control" name="fecha-entrada"></input>
							<br>

						 <label for="autor-entrada">Autor</label>
						<input type="text" class="form-control" name="autor-entrada"></input>
							<br>

						<label for="imagen-entrada">Imagen</label>
						<input type="file" name="imagen-entrada" ></input>
							<br>

						<label for="url-entrda">url</label>
						<input type="text" class="form-control" name="url-entrada"></input>
							<br>
						<label for="categoria-entrada">Categorias</label><br>
						<div class="form-check">
							<input id="check-cocina" class="form-check-input" type="checkbox" value="1" name="categoria[]">
							<label class="form-check-label" for="check-cocina">Cocina</label>
							<input id="check-recetas" class="form-check-input" type="checkbox" value="2" name="categoria[]">
							<label class="form-check-label" for="check-recetas">Recetas</label>
							<input id="check-cultura" class="form-check-input" type="checkbox" value="3" name="categoria[]">
							<label class="form-check-label" for="check-cultura">Cultura</label>
							<input id="check-politica" class="form-check-input" type="checkbox" value="4" name="categoria[]">
							<label class="form-check-label" for="check-politica">Politica</label>
							<input id="check-tecnologia" class="form-check-input" type="checkbox" value="5" name="categoria[]">
							<label class="form-check-label" for="check-tecnologia">Tecnología</label>
							<input id="check-ciencias" class="form-check-input" type="checkbox" value="6" name="categoria[]">
							<label class="form-check-label" for="check-ciencias">Ciencias</label>
							<input id="check-viajes" class="form-check-input" type="checkbox" value="7" name="categoria[]">
							<label class="form-check-label" for="check-viajes">Viajes</label>
							<input id="check-diseno" class="form-check-input" type="checkbox" value="8" name="categoria[]">
							<label class="form-check-label" for="check-diseno">Diseño</label>
							<input id="check-fotografia" class="form-check-input" type="checkbox" value="9" name="categoria[]">
							<label class="form-check-label" for="check-fotografia">Fotografía</label>
							<input id="check-videojuegos" class="form-check-input" type="checkbox" value="10" name="categoria[]">
							<label class="form-check-label" for="check-videojuegos">videojuegos</label>
						</div>						
						<label for="texto-entrada">Texto entrada</label>
						<textarea name="texto-entrada" id="texto-entrada" cols="100" rows="20"></textarea>
					</div>
					<input type="submit" class="btn btn-default" name="btn-enviar" id="btn-enviar" value="Mostrar Resultado">
					<input type='button' class="btn btn-default" name="btn-borrar" id="btn-borrar" value="Borrar textarea">
					<script type="text/javascript">
						var textarea = document.getElementById('texto-entrada');
						var btnBorrar = document.getElementById('btn-borrar');
						
						btnBorrar.addEventListener('click', function(){
							textarea.value = '';
						});
					</script>
				</form>
				<textarea id="txt-content"></textarea>
			</div>

		</div>
		<div class="row">
			<div class="col-sm-8">
				<div id="texto" style="border:1px solid #000; padding:10px;margin-top:20px;">
					
				</div>
			</div>
		</div>
	</div>
</body>
</html>