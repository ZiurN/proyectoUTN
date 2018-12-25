var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fotografia', { title: 'Fotografia', css: 'estilos-fotografia.css'});
});

module.exports = router;