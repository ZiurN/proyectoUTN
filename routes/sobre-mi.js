var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sobre-mi', { title: 'Sobre Mi', css: 'estilos-sobre-mi.css' });
});

module.exports = router;