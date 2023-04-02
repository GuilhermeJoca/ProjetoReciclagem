const mongoose = require('mongoose');
const Premio = require('../model/premio');

const create = async (descricao, pontos, quantidade ) => {
    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade:quantidade});
    return await premio.save();
}

module.exports.create = create;

const read = async (premioId) => {
    const premio = await Premio.findOne({_id: new mongoose.Types.ObjectId(premioId)});
    return premio;
}

module.exports.read = read;

const update = async(premioId, novaDescricao, novoPonto, novaQuantidade) => {
    const premio = await Premio.findOne({_id: new mongoose.Types.ObjectId(premioId)});
    if(premio == null){
        print("O prêmio não existe!");
    } else {
        const novoPremio = await Premio.updateOne({_id: new mongoose.Types.ObjectId(premioId)}, 
                                                 {descricao: novaDescricao,
                                                 pontos: novoPonto,
                                                 quantidade: novaQuantidade});
        return novoPremio;
    }
}

module.exports.update = update;

const deletar = async(premioId) => {
    const premio = await Premio.findOne({_id: new mongoose.Types.ObjectId(premioId)});
    if(premio == null){
        print("O prêmio não existe!");
    } else {
        const premioDeletado = await Premio.deleteOne({_id: new mongoose.Types.ObjectId(premioId)});
        return ("Premio foi excluído.");
    }
}

module.exports.deletar = deletar;