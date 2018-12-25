var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var blogRelacionesSchema = new Schema({
	ID: 		{ type: Number },
	IDCategoria:{ type: String },
	IDEntrada: 	{ type: String },
});

module.exports = mongoose.model('RelacionesDB', blogRelacionesSchema);