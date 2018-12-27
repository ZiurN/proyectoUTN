window.onload = init();

function init() {
    "use strict";

    function checkBox() {
        $(".image-checkbox").each(function () {

            if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
                $(this).addClass('image-checkbox-checked');
            } else {
                $(this).removeClass('image-checkbox-checked');
            }
        });

        // sync the state to the input
        $(".image-checkbox").on("click", function (e) {
            $(".image-checkbox").each(function () {
                $(this).removeClass('image-checkbox-checked');
            });
            $(this).toggleClass('image-checkbox-checked');
            var $checkbox = $(this).find('input[type="checkbox"]');
            $checkbox.prop("checked", !$checkbox.prop("checked"));

            var fotoID = $(this).data('fotoid');
            var fotoElegidaSubmit = document.getElementById('foto-elegida-output');
            fotoElegidaSubmit.value = fotoID;
            //console.log("valor final: " + fotoElegidaSubmit.value);
            e.preventDefault();
        });
    }

    var albumModificadores = document.getElementsByClassName('album-modificador');
    var galeriaDOM = document.getElementById('form-images');
    var peticion;
    var peticionBorrado;
    var peticionActualizar;
    var album;
    var btnBorrar = document.getElementById('btn-eliminar');
    var btnConfirmacionBorrar = document.getElementById('btn-eliminar-confirmacion');
    var btnModificar = document.getElementById('btn-modificar');
    var btnSubmitModificar = document.getElementById('btn-modificar-confirmacion');

    btnSubmitModificar.addEventListener('click', function () {
        var id = document.getElementById('foto-elegida-output').value;
        var ubicacion = document.getElementById('foto-ubicacion-actualizar').value;
        var descripcion = document.getElementById('descripcion-actualizar').value;
        //console.log("descripcion: " + descripcion);
        var albumNuevo = document.getElementById('foto-album-actualizacion').value;
        //console.log("objeto album: " + albumNuevo);
        //var submit = e.target;
        //console.log("submit: " + submit);
        actualizar(id, ubicacion, descripcion, albumNuevo);
    });

    btnModificar.addEventListener('click', function () {
        var value = document.getElementById('foto-elegida-output').value;
        diligenciarFormulario(value);
    });

    btnConfirmacionBorrar.addEventListener('click', function () {
        var value = document.getElementById('foto-elegida-output').value;
        eliminar(value);
    });

    btnBorrar.addEventListener('click', function () {
        var value = document.getElementById('foto-elegida-output').value;
        if (value === '') {
            alert('selecciona alguna imágen primero');
        }
        preEliminar(value);
    });

    function diligenciarFormulario(id) {
        var url = '/api/galeria';
        var datos = new FormData();
        datos.append('idFormulario', id);
        peticionBorrado = new XMLHttpRequest();
        peticionBorrado.addEventListener('load', function () {
            var formContenedor = document.getElementById('formulario-actualizacion');
            var datosFoto = JSON.parse(peticionBorrado.response);
            var stringArmado = '<div class="form-group">';
            stringArmado += '<label for="foto-album-actualizacion">Album</label>';
                stringArmado += '<select class="form-control" id="foto-album-actualizacion" name="foto-albumNuevo">';           
					stringArmado += '<option class="album-actualizar" value="S.C. de Bariloche">S.C. de Bariloche</option>';
					stringArmado += '<option class="album-actualizar" value="Vida animal">Vida animal</option>';
					stringArmado += '<option class="album-actualizar" value="Lago Moreno">Lago Perito Moreno</option>';
					stringArmado += '<option class="album-actualizar" value="Itaipu">Itaipu</option>';
					stringArmado += '<option class="album-actualizar" value="Jardin">Jardin</option>';
					stringArmado += '<option class="album-actualizar" value="Circuito Chico">Circuito Chico</option>';
					stringArmado += '<option class="album-actualizar" value="Retratos">Retratos</option>';
					stringArmado += '<option class="album-actualizar" value="En Accion">En Accion</option>';
					stringArmado += '<option class="album-actualizar" value="Miscelaneos">Miscelaneos</option>';
					stringArmado += '<option class="album-actualizar" value="Iguazu">Iguazu</option>';
					stringArmado += '<option class="album-actualizar" value="Nahuel Huapi">Nahuel Huapi</option>';
					stringArmado += '<option class="album-actualizar" value="3d Bathroom">3d Bathroom</option>';
					stringArmado += '<option class="album-actualizar" value="3d Moleculas">3d moleculas</option>';
					stringArmado += '<option class="album-actualizar" value="3d Xopas">3d xopas</option>';
					stringArmado += '<option class="album-actualizar" value="3d Tohatsu">3d Tohatsu</option>';
					stringArmado += '<option class="album-actualizar" value="3d Muebles">3d Muebles</option>';
					stringArmado += '<option class="album-actualizar" value="3d Tante Sara">3d Tante Sara</option>';
				stringArmado += '</select>';
			stringArmado += '</div>';
			stringArmado += '<div class="form-group">';
				stringArmado += '<label for="foto-ubicacion-actualizar">Ubicacion de la foto</label>';
				stringArmado += "<input type='text' class='form-control' name='foto-ubicacion-actualizar' id='foto-ubicacion-actualizar' value='"+datosFoto.Ubicacion+"'></input>";
			stringArmado += '</div>';
			stringArmado += '<div class="form-group">';
				stringArmado += '<label for="descripcion-actualizar">Descripcion del album</label>';
				stringArmado += "<textarea class='form-control' name='foto-descripcion-actualizar' id='descripcion-actualizar' rows='3'>"+datosFoto.Descripcion+"</textarea>";
            stringArmado += '</div>';
            
            formContenedor.innerHTML = stringArmado;

        }, false);
        peticionBorrado.open("post", url, true);
        peticionBorrado.send(datos);
    }

    function preEliminar(ID) {
        var url = '/api/galeria';
        var datos = new FormData();
        console.log('preliminar ID: '+ID);
        datos.append('idPre', ID);
        peticionBorrado = new XMLHttpRequest();
        peticionBorrado.addEventListener('load', function () {
            var fotoMiniatura = JSON.parse(peticionBorrado.response);
            console.log("objeto recibido: "+fotoMiniatura);
            var miniaturaContenedor = document.getElementById('imagen-borrar-mini');
            let altoReal = 160;
            let anchoReal = (1.77777) * altoReal;
            var stringArmado = "<img class='foto-miniatura' width='"+anchoReal+"' height='"+altoReal+"' src='"+fotoMiniatura.Ruta+"'>";
            miniaturaContenedor.innerHTML = stringArmado;
        }, false);
        peticionBorrado.open("post", url, true);
        peticionBorrado.send(datos);
    }

    function eliminar(id) {
        var url = '/api//galeria/eliminar';
        var datos = new FormData();
        datos.append('idBorrar', id);
        peticionBorrado = new XMLHttpRequest();
        peticionBorrado.addEventListener('load', function () {
            
            realizarPeticionGaleria(album);
            setTimeout(alert(peticionBorrado.responseText), 1000);
        }, false);
        peticionBorrado.open("post", url, true);
        peticionBorrado.send(datos);
    }

    function actualizar(id, ubicacion, descripcion, albumNuevo) {
        var url = '/api/galeria/actualizar';
        var datos = new FormData();
        //datos.append('submit', submit);
        //console.log('antes de cambiar el valor de album, album: '+ album);
        album = albumNuevo;
        //console.log('despues de supuestamente cambiar el valor de album, album: '+ album);
        datos.append('idModificar', id);
        datos.append('ubicacionModificar', ubicacion);
        datos.append('descripcionModificar', descripcion);
        datos.append('albumModificar', albumNuevo);
        peticionActualizar = new XMLHttpRequest();
        peticionActualizar.addEventListener('load', function () {
            realizarPeticionGaleria(albumNuevo);
            console.log('si esto se lee, se realizó la petición');
            alert(peticionActualizar.responseText);
            console.log('ahora debio aparecer el alert');
        }, false);
        peticionBorrado.open("post", url, true);
        peticionBorrado.send(datos);
    }


    window.addEventListener('load', function () {
        asignarListenersAjax(albumModificadores);
    });

    function asignarListenersAjax(conjunto) {
        for (var i = 0; i < conjunto.length; i++) {
            listenerAlbum(conjunto[i]);

        }
    }

    function listenerAlbum(elemento) {
        elemento.addEventListener('click', function (e) {
            e.preventDefault();
            album = elemento.value;
            realizarPeticionGaleria(album);
        });
    }

    function realizarPeticionGaleria(albumParam) {
        var url = '/api/galeria';
        var datos = new FormData();
        datos.append('album', albumParam);
        peticion = new XMLHttpRequest();
        peticion.addEventListener('load', mostrarGaleria, false);
        peticion.open("post", url, true);
        peticion.send(datos);
    }

    function mostrarGaleria() {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {
                var fotos = JSON.parse(peticion.response);
                //console.log("largo fotos:  " + fotos.length);
                let stringArmado = "";
                let altoReal = 160;
                let anchoReal = (1.77777) * altoReal;
                if (fotos.length === 0) {
                    stringArmado = "Este album no tiene fotos";
                } else {
                    for (var i = 0; i < fotos.length; i++) {
                        stringArmado += "<label class='image-checkbox' data-fotoid='" + fotos[i]._id + "'>";
                        stringArmado += "<img  data-index='" + i + "' class='img-responsive' src='" + fotos[i].Ruta + "' width='" + anchoReal + "' height='" + altoReal + "'/>";
                        stringArmado += "<input type='checkbox' name='image[]' value='" + fotos[i]._id + "' />";
                        stringArmado += "<i class='fa fa-check hidden'></i>";
                        stringArmado += "</label>";
                    }
                }
                galeriaDOM.innerHTML = stringArmado;
                checkBox();
            }
        }
    }
}
