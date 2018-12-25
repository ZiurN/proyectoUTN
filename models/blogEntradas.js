var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var blogEntradasSchema = new Schema({
    ID: 	{ type: Number },
    Titulo: { type: String },
    Fecha: 	{ type: Date },
    IDAutor:{ type: Number },
    Portada:{ type: String },
    Texto: 	{ type: String }
});

module.exports = mongoose.model('EntradasDB', blogEntradasSchema);