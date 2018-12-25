var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sobre-mi-cocina', { title: 'Sobre Mi - Cocina', css: 'estilos-sobre-mi-cocina.css' });
});

module.exports = router;