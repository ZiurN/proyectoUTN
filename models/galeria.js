var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    var galeriaSchema = new Schema({
        ID: 		{ type: Number },
        Nombre: 	{ type: String },
        Album:		{ type: String },
        Ruta:  		{ type: String },
        Formato: 	{ type: String },
        Ubicacion: 	{ type: String },
        Alto: 		{ type: Number },
        Ancho: 		{ type: Number },
        Apertura: 	{ type: String },
        Velocidad: 	{ type: String },
        ISO: 		{ type: String },
        DFocal: 	{ type: String },
        Descripcion:{ type: String },
        Fecha: 		{ type: Date }
    });

    module.exports = mongoose.model('galeria', galeriaSchema);