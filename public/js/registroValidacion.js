window.onload = init();

function init() {

    let botonEnviar = document.getElementById('enviar-registro');
    botonEnviar.addEventListener('click', validarCampos);

    function validarCampos() {

        let nombre = document.getElementById('nombre').value;
        let cuadroAvisoNombre = document.getElementById('nombre-error');
        let errorNombre = '';
        console.log('nombre: ' + nombre);
        if (nombre === '') {
            cuadroAvisoNombre.style.display = 'block';
            errorNombre = 'Tienes que dar un nombre';
            cuadroAvisoNombre.innerHTML = errorNombre;
        } else {
            if (nombre.length < 4) {
                cuadroAvisoNombre.style.display = 'block';
                errorNombre = 'Tu nombre debe ser de más de 4 caracteres';
                cuadroAvisoNombre.innerHTML = errorNombre;
            } else if (nombre.length > 25) {
                cuadroAvisoNombre.style.display = 'block';
                errorNombre = 'Tu nombre debe ser de menos de 25';
                cuadroAvisoNombre.innerHTML = errorNombre;
            } else {
                cuadroAvisoNombre.style.display = 'none';
                errorNombre = '';
                cuadroAvisoNombre.innerHTML = errorNombre;
                console.log('nombre correcto :' + nombre);
            }
        }

        let email = document.getElementById('email').value;
        let cuadroAvisoEmail = document.getElementById('email-error');
        let errorEmail = '';
        console.log('email: ' + email);
        if (email === '') {
            cuadroAvisoEmail.style.display = 'block';
            errorEmail = 'Tienes que proporcionar un correo eléctronico'
            cuadroAvisoEmail.innerHTML = errorEmail;
        } else {
            cuadroAvisoEmail.style.display = 'none';
            errorEmail = ''
            cuadroAvisoEmail.innerHTML = errorEmail;
            console.log('correo válido');
        }

        let clave1 = document.getElementById('password1').value;
        let cuadroAvisoClave1 = document.getElementById('clave1-error');
        let errorClave1 = '';
        console.log('clave: ' + clave1);
        if (clave1 === '') {
            cuadroAvisoClave1.style.display = 'block';
            errorClave1 = 'Tienes que proporcionar una contraseña';
            cuadroAvisoClave1.innerHTML = errorClave1;
        } else {
            cuadroAvisoClave1.style.display = 'none';
            errorClave1 = '';
            cuadroAvisoClave1.innerHTML = errorClave1;
            console.log('contraseña válida');
        }

        let clave2 = document.getElementById('password2').value;
        let cuadroAvisoClave2 = document.getElementById('clave2-error');
        let errorClave2 = '';
        console.log('confirmacion: ' + clave2);
        if (clave1 === '') {
            cuadroAvisoClave2.style.display = 'block';
            errorClave2 = 'Tienes que proporcionar una contraseña primero'
            cuadroAvisoClave2.innerHTML = errorClave2;
        } else {
            if (clave2 === '') {
                cuadroAvisoClave2.style.display = 'block';
                errorClave2 = 'Tienes que Confirmar la contraseña';
                cuadroAvisoClave2.innerHTML = errorClave2;
            } else if (clave2 !== '' && clave1 != clave2) {
                cuadroAvisoClave2.style.display = 'block';
                errorClave2 = 'Las contrasñas no coinciden'
                cuadroAvisoClave2.innerHTML = errorClave2;
            } else if (clave1 === clave2) {
                cuadroAvisoClave2.style.display = 'none';
                errorClave2 = '';
                cuadroAvisoClave2.innerHTML = errorClave2;
                console.log('contraseña válida');
            }
        }

        let checkbox = document.getElementById('checkbox').checked;
        let cuadroAvisoCheckBox = document.getElementById('checkbox-error');
        let errorCheckBox = '';
        console.log('check capturado: ' + checkbox);

        if (!checkbox) {
            cuadroAvisoCheckBox.style.display = 'block';
            errorCheckBox = 'Si no aceptas las condiciones, no te podrás registrar'
            cuadroAvisoCheckBox.innerHTML = errorCheckBox;
        } else {
            cuadroAvisoCheckBox.style.display = 'none';
            errorCheckBox = '';
            cuadroAvisoCheckBox.innerHTML = errorCheckBox;
            console.log('chequeado: ' + checkbox);
        }

        if (errorNombre === '' && errorEmail === '' && errorClave1 === '' && errorClave2 === '' && errorCheckBox === '') {
            var url = '/api/registro';
            var datos = new FormData();
            datos.append('nombre', nombre);
            datos.append('email', email);
            datos.append('clave', clave1);
            datos.append('fecha', new Date());
            datos.append('imagen', '');
            datos.append('activo', 0);

            peticion = new XMLHttpRequest();
            peticion.addEventListener('load', respuestaAjax, false);
            peticion.open("post", url, true);
            peticion.send(datos);
        }

        function respuestaAjax() {
            if (peticion.readyState === 4) {
                if (peticion.status === 200) {
                    console.log('peticion: '+ peticion.responseText);
                    //peticion.responseText
                    window.location=peticion.responseText;
                }
            }
        }
    };
};