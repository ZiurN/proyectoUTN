<?php

$album = $_POST['contacto'];
conexion::abrir_conexion();
escritor_albumes::escritor_album(conexion::obtener_conexion(), $album);