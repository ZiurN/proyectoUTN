<div class="dato-formulario">
	<label class="dato-nombre">Tu nombre</label>
	<input name="nombre" type="text" class="dato-entrada" placeholder="Pón tu nombre aquí">
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Tu correo electrónico</label>
	<input name="email" type="email" class="dato-entrada"  placeholder="ejemplo@dominio">
	<small class="dato-texto">No compartimos tu información con nadie más.</small>
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Tu Contraseña</label>
	<input name="password1" type="password" class="dato-entrada" placeholder="Contraseña">
</div>

<div class="dato-formulario">
	<label class="dato-nombre">Repite tu contraseña</label>
	<input name="password2" type="password" class="dato-entrada" placeholder="Confirma tu contraseña">
</div>
<div class="dato-formulario">
	 <label class="dato-nombre">Carga una imágen de perfil</label>
	 <input type="file" id="imagen-autor" name="imagen-autor">
	<small class="dato-texto">Si no cargas una imágen, se pondrá una por defecto.</small>
</div>

<div class="checkbox">
	<label class="dato-nombre">
		<input type="checkbox"> Acepto las condiciones.
	</label>
</div>

<br>
	
<button name="limpiar" type="reset" class="btn btn-azul btn-centrado">Limpiar el formulario</button>
<br>
<button name="enviar-registro" type="submit" class="btn btn-azul btn-centrado">Enviar Datos</button