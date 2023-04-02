const mongoose = require('mongoose');
const Reciclagem = require('../model/reciclagem');
const Usuario = require('../model/usuario')

const create = async (item, imagem, peso, pontos, usuarioId) => {
    let session;
    try{
        session = await mongoose.startSession();
        session.startTransaction();
        const usuario = await Usuario.findById(usuarioId).exec();
        if (usuario){
            let reciclagem = new Reciclagem({item: item, 
                imagem: imagem, 
                peso: peso, 
                data: new Date(), 
                pontos: pontos, 
                usuario: usuario});

            reciclagem = await reciclagem.save();
            usuario.reciclagem.push(reciclagem);
            await usuario.save();
            session.commitTransaction();
            return reciclagem;
        }
    } catch (error){
        console.log(error);
        session.cancelTransaction();
    }
}

module.exports.create = create;

const read = async (reciclagemId) => {
    const reciclagem = await Reciclagem.findOne({_id: new mongoose.Types.ObjectId(reciclagemId)});
    return reciclagem;
}

module.exports.read = read;

const update = async(reciclagemId, novoItem, novaImagem, novoPeso, novaData, novosPontos) => {
    const reciclagem = await Reciclagem.findOne({_id: new mongoose.Types.ObjectId(reciclagemId)});
    if(reciclagem == null){
        console.log("A reciclagem não existe!");
    }else {
        const novaReciclagem = await Reciclagem.updateOne({_id: new mongoose.Types.ObjectId(reciclagemId)},
                                                        {item: novoItem,
                                                        imagem: novaImagem, 
                                                        peso: novoPeso, 
                                                        data: novaData, 
                                                        pontos: novosPontos});
        return novaReciclagem;
    }
}

module.exports.update = update;

const deletar = async(reciclagemId) => {
    let session;
    try{
        session = await mongoose.startSession();
        session.startTransaction();
        const reciclagem = await Reciclagem.findOne({_id: new mongoose.Types.ObjectId(reciclagemId)});
        if(reciclagem == null){
            console.log("Reciclagem não existe!");
        } else {
            const usuario = await Usuario.findById(reciclagem.usuario).exec();
            const reciclagemDeletada = await Reciclagem.deleteOne({_id: new mongoose.Types.ObjectId(reciclagemId)});
            usuario.reciclagem.pull(reciclagem);
            await usuario.save({session: session});
            session.commitTransaction();
            return ("Reciclagem deletado!");
        }
    }
    catch(error){
        console.log(error);
        session.abortTransaction();
    }
}

module.exports.deletar = deletar;