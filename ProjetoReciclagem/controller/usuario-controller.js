const mongoose = require('mongoose');
const Usuario = require('../model/usuario');

const create = async (nome, senha, pontos, latitude, longitude) => {
    const usuario = new Usuario({nome: nome, senha: senha, pontos: pontos, latitude: latitude, longitude: longitude})
    return await usuario.save();
}

module.exports.create = create;

const read = async (usuarioId) => {
    const usuario = await Usuario.findOne({_id: new mongoose.Types.ObjectId(usuarioId)});
    return usuario;
}

module.exports.read = read;

const update = async(usuarioId, novoNome, novaSenha, novosPontos, novaLat, novaLon) => {
    const usuario = await Usuario.findOne({_id: new mongoose.Types.ObjectId(usuarioId)});
    if(usuario == null){
        print("O usuário não existe!");
    } else {
        const novoUsuario = await Usuario.updateOne({_id: new mongoose.Types.ObjectId(usuarioId)},
                                                    {nome: novoNome, 
                                                    pontos: novosPontos, 
                                                    senha: novaSenha, 
                                                    latitude: novaLat, 
                                                    longitude: novaLon})
        return novoUsuario;
    }
}

module.exports.update = update;

const deletar = async(usuarioId) => {
    const usuario = await Usuario.findOne({_id: new mongoose.Types.ObjectId(usuarioId)});
    if(usuario == null){
        print("O usuário não existe!");
    } else {
        const usuarioDeletado = await Usuario.deleteOne({_id: new mongoose.Types.ObjectId(usuarioId)});
        return ("Usuário deletado!");
    }
}

module.exports.deletar = deletar;