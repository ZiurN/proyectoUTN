var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

router.get('/', function (req, res) {

  var mongoCliente = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/proyectoUTN';

  mongoCliente.connect(url, { useNewUrlParser: true }, function (error, data) {

    if (error) {
      console.log('error conectando a la red');
    } else {
      //console.log(data);
      console.log('conectado');
      console.log(data);
      var coleccion = data.db('proyectoUTN').collection('proyectos3d');
      //console.log(data);

      coleccion.find({}).toArray(function (err, resultados) {
        if (err)
          console.log(err);
        res.render('modelado', { title: 'Modelado', css: 'estilos-modelado.css', datos: resultados });
        //console.log('entro aqui');
        //console.log(resultados);
      });
      data.close();
    }
  });
});

module.exports = router;