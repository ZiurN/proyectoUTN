<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/app/config.inc.php';

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/png" href="/img/iconos/logoicon.ico">
		<link href="<?php echo RUTA_CSS?>formularios.css" rel="stylesheet">
		<title>Formulario Subida de proyectos 3D</title>
	</head>
	<body>
	<form action="<?php echo RUTA_SUBIDA_3D?>" method="post" enctype="multipart/form-data">
	
		<label for="foto_album">Nombre Del Proyecto</label>
		<input type="text" name="proyecto3d-nombre" size="200rem"></input>

		<label class="etiqueta-formulario" for="proyecto3d-descripcion">Descripción del Proyecto</label>
		<input type="text" name="proyecto3d-descripcion" size="200rem"></input>
			<br>
		
		<label class="etiqueta-formulario" for="proyecto3d-descripcion">Cliente del proyecto</label>
		<input type="text" name="proyecto3d-cliente" size="200rem"></input>
			<br>

		<label class="etiqueta-formulario" for="proyecto3d-album">Nombre del album de fotos del proyecto</label>
		<select name="proyecto3d-album">
			<option value="3d Moleculas">3d moleculas</option>
			<option value="3d Xopas">3d xopas</option>
			<option value="3d Tohatsu">3d Tohatsu</option>
			<option value="3d Muebles">3d Muebles</option>
			<option value="3d Tante Sara">3d Tante Sara</option>
			<option value="3d Bathroom">3d Bathroom</option>
		</select>
			<br>
	
		<input class="boton-formulario" type="submit" value="enviar-proyecto" name="enviar-proyecto"></input>
			<br>
	</form>
</body>
</html> 
