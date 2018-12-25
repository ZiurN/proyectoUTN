var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ziur Freelance', css: 'estilos-home.css' });
});

module.exports = router;
