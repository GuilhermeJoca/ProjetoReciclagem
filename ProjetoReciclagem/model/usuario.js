const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nome: {type: String, required: true},
    senha: {type: String, required: true},
    pontos: {type: Number},
    latitude: {type: String},
    longitude: {type: String},
    reciclagem: [{type: mongoose.Types.ObjectId, ref: "Reciclagem"}]

});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;