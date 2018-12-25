var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var proyecto3DSchema = new Schema({
	ID: 		{ type: String },
	Proyecto: 	{ type: String },
	Descripcion:{ type: String },
	Cliente:  	{ type: String },
	Portada: 	{ type: String },
	Album: 		{ type: String }    
});

var Proyecto = mongoose.model('proyectos3d', proyecto3DSchema);

module.exports = Proyecto;



