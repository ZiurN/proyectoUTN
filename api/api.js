var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
let multer = require('multer');
let upload = multer();


router.post('/', upload.fields([]), function (req, res) {

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
            //console.log('album :'+ album);
            coleccion.find({ Album: album }).toArray(function (err, resultados) {
                if (err) {
                    console.log(err);
                }
                res.send(resultados);
                //console.log('entro aqui');
                //console.log('resultados: '+resultados);                
            });
            data.close();
            //res.redirect('/fotografia');
        }
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
            res.send('/blog/login');
        }
    });
    //res.redirect('/blog/login');
});


module.exports = router;



