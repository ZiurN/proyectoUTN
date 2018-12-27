var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
let multer = require('multer');
let upload = multer();
var nodemailer = require('nodemailer');


router.post('/galeria', upload.fields([]), function (req, res) {

    var mongoCliente = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/proyectoUTN';
    let formulario = req.body;

    mongoCliente.connect(url, { useNewUrlParser: true }, function (error, data) {

        if (error) {
            console.log('error conectando a la red');
        } else {
            //console.log(data);
            //console.log('conectado');
            // console.log(data);
            var coleccion = data.db('proyectoUTN').collection('galeria');
            //console.log(data);
            var album = formulario.album;
            var idPre = formulario.idPre;
            var idFormulario = formulario.idFormulario;
            var id;
            if (idPre !== undefined) {
                id = idPre;
            }
            else if (idFormulario !== undefined) {
                id = idFormulario;
            }
            console.log('album :' + album);
            console.log('id pre :' + id);
            if (album !== undefined) {
                coleccion.find({ Album: album }).toArray(function (err, resultados) {
                    if (err) {
                        console.log(err);
                    }
                    res.send(resultados);
                    //console.log('entro aqui');
                    //console.log('resultados: '+resultados);                
                });
                data.close();
            }
            if (id !== undefined) {
                coleccion.findOne({ _id: ObjectId(id) }, function (err, resultados) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(resultados);
                    res.send(resultados);
                    //console.log('entro aqui');
                    //console.log('resultados: '+resultados);                
                });
                data.close();
            }
            //res.redirect('/fotografia');
        }
    });
});

router.post('/galeria/eliminar', upload.fields([]), function (req, res) {

    var mongoCliente = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/proyectoUTN';
    let formulario = req.body;

    mongoCliente.connect(url, { useNewUrlParser: true }, function (error, data) {

        if (error) {
            console.log('error conectando a la red');
        } else {

            var coleccion = data.db('proyectoUTN').collection('galeria');
            var id = formulario.idBorrar;

            coleccion.deleteOne({ _id: ObjectId(id) }, function (err, resultado) {
                if (err) {
                    console.log(err);
                } else {
                    var mensaje = 'foto eliminada';
                    res.send(mensaje);
                }
            });
        }
        data.close();
    });
});

router.post('/galeria/actualizar', upload.fields([]), function (req, res) {

    var mongoCliente = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/proyectoUTN';
    let formulario = req.body;

    mongoCliente.connect(url, { useNewUrlParser: true }, function (error, data) {

        if (error) {
            console.log('error conectando a la red');
        } else {

            var coleccion = data.db('proyectoUTN').collection('galeria');

            var id = formulario.idModificar;
            var ubicacion = formulario.ubicacionModificar;
            var descripcion = formulario.descripcionModificar;
            var album = formulario.albumModificar;

            coleccion.updateOne({ _id: ObjectId(id) }, { $set: { Ubicacion: ubicacion, Descripcion: descripcion, Album: album } }, function (err, resultado) {
                if (err) {
                    console.log(err);
                } else {
                    var mensaje = 'información modificada';
                    res.send(mensaje);
                }
            });
        }
        data.close();
    });
});

router.post('/registro', upload.fields([]), function (req, res) {

    let nombre = req.body.nombre;
    let email = req.body.email;
    let clave = req.body.clave;
    let fecha = req.body.fecha;
    let imagen = req.body.imagen;
    let activo = req.body.activo;

    var mongoCliente = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/proyectoUTN';

    mongoCliente.connect(url, { useNewUrlParser: true }, function (error, data) {

        if (error) {
            console.log('error conectando a la red');
        } else {

            var coleccion = data.db('proyectoUTN').collection('blogAutores');

            coleccion.insertOne({
                Autor: nombre,
                Email: email,
                Clave: clave,
                Fecha_registro: fecha,
                Imagen: imagen,
                Activo: activo
            })
            data.close();
        }
    });
    console.log('email: ' + email);
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 587,
            auth: {
                user: 'ziurfreelance@gmail.com',
                pass: 'jef123456'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Jeferson Ruiz" <ziurfreelance@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Prueba de NodeMailer Proyecto UTN desarrollador FullStack ✔', // Subject line
            text: 'Si esta leyendo este correo, todo salio bien', // plain text body
            html: '<b>Si esta leyendo este correo, todo salio bien</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
    res.send('/blog/login');
});

module.exports = router;



