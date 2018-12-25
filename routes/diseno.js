var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('diseno', { title: 'Diseño', css: 'estilos-home.css' });
});

module.exports = router;