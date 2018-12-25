var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sobre-mi-freelance', { title: 'Sobre Mi - Freelance', css: 'estilos-sobre-mi-freelance.css' });
});

module.exports = router;