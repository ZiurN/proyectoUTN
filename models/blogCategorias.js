var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var blogCateroriasSchema = new Schema({
        ID: 		{ type: Number},
        Categoria: 	{ type: String}
    });

    module.exports = mongoose.model('CategoriasDB', blogCateroriasSchema);