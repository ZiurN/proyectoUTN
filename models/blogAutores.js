var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    var blogAutoresSchema = new Schema({
        ID: 			{ type: Number },
        Autor: 			{ type: String },
        Email: 			{ type: String },
        Clave: 			{ type: String },
        FechaRegistro:	{ type: Date },
        Imagen: 		{ type: String },
        Activo: 		{ type: Number }
    });
    
module.exports = mongoose.model('AutoresDB', blogAutoresSchema);