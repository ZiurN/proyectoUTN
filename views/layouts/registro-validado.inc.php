<div class="dato-formulario">
	<label class="dato-nombre">Tu nombre</label>
	<input name="nombre" type="text" class="dato-entrada" placeholder="Pón tu nombre aquí" <?php $validador -> mostrar_autor(); ?>>
	<?php
		$validador -> mostrar_error_autor();
	?>
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Tu correo electrónico</label>
	<input name="email" type="email" class="dato-entrada"  placeholder="ejemplo@dominio" <?php $validador -> mostrar_email(); ?>>
	<small class="dato-texto">No compartimos tu información con nadie más.</small>
	<?php
		$validador -> mostrar_error_email();
	?>
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Tu Contraseña</label>
	<input name="password1" type="password" class="dato-entrada" placeholder="Contraseña">
	<?php
		$validador -> mostrar_error_clave1();
	?>
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Repite tu contraseña</label>
	<input name="password2" type="password" class="dato-entrada" placeholder="Confirma tu contraseña">
	<?php
		$validador -> mostrar_error_clave2();
	?>
</div>

<div class="dato-formulario">
 	<label class="dato-nombre">Carga una imágen de perfil</label>
 	<input type="file" id="imagen-autor" name="imagen-autor">
	<small class="dato-texto">Si no cargas una imágen, se pondrá una por defecto.</small>
	<?php
		$validador -> mostrar_error_imagen();
	?>
</div>

<div class="checkbox">
	<label class="dato-nombre">
		<input type="checkbox"> Acepto las condiciones.
	</label>
</div>

<br>
	
<button name="limpiar" type="reset" class="btn btn-azul btn-centrado">Limpiar el formulario</button>
<br>
<button name="enviar_datos" type="submit" class="btn btn-azul btn-centrado">Enviar Datos</button