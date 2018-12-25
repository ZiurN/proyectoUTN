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
		<title>Formulario Subida de albumnes de fotos</title>
	</head>
	<body>
		
	<form action="<?php echo RUTA_SUBIDA_FOTOS?>" method="post" enctype="multipart/form-data">
		<label for="foto_album">Album de la foto</label>
		<select name="foto_album">
			<option value="S.C. de Bariloche">S.C. de Bariloche</option>
			<option value="Vida animal">Vida animal</option>
			<option value="Lago Moreno">Lago Perito Moreno</option>
			<option value="Itaipu">Itaipu</option>
			<option value="Jardin">Jardin</option>
			<option value="Circuito Chico">Circuito Chico</option>
			<option value="Retratos">Retratos</option>
			<option value="En Accion">En Accion</option>
			<option value="Miscelaneos">Miscelaneos</option>
			<option value="Iguazu">Iguazu</option>
			<option value="Nahuel Huapi">Nahuel Huapi</option>
			
			<option value="3d Bathroom">3d Bathroom</option>
			<option value="3d Moleculas">3d moleculas</option>
			<option value="3d Xopas">3d xopas</option>
			<option value="3d Tohatsu">3d Tohatsu</option>
			<option value="3d Muebles">3d Muebles</option>
			<option value="3d Tante Sara">3d Tante Sara</option>
			
		</select>
			<br>

		<label for="foto-ubicacion">Ubicacion de la foto</label>
		<input type="text" name="foto-ubicacion" size="10em"></input>
			<br>
		<input type="file" id="fotocargada[]" name="fotocargada[]" multiple="">
			<br>

		 <label for="descripcion">Descripcion de la foto</label>
		<input type="text" name="foto-descripcion" size="200em"></input>
			<br>
	
		<input type="submit" value="enviar imagen para fotografia" name="enviar-imagen-foto"></input>
			<br>
		<input type="submit" value="enviar imagen para otra cosa" name="enviar-imagen-otros"></input>
			<br>
	</form>
	<body>
</html>