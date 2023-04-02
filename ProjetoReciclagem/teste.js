const mongoose = require('mongoose');
const premioController = require('./controller/premio-controller');
const usuarioController = require('./controller/usuario-controller');
const reciclagemController = require('./controller/reciclagem-controller');

const uri = 'mongodb+srv://Joca:Joca123@joca.jrozbp2.mongodb.net/Reciclagem?retryWrites=true&w=majority'

// CRUD PREMIO
mongoose.connect(uri).then(async (conn) => {

    // const ret = await premioController.create('Meus Premios Nick', 10, 2);
    // const ret = await premioController.read("6423551984f92419883ad641");
    // const ret = await premioController.update("6423551984f92419883ad641", "Premio do Joca", 100, 3);
    // const ret = await premioController.deletar("642354d9a3312bc31a32aa12");
   // console.log(ret);
    
})

// CRUD USUARIO
mongoose.connect(uri).then(async (conn) => {

    // const ret = await usuarioController.create('Valeria Almeida', "linsi", 0, "231-23", "8432-00");
    // const ret = await usuarioController.read("6424c00c15f107c6e2936531");
    // const ret = await usuarioController.update("642472c11e167a35d5525925", "Zou Yi Lai", "_oiXand", 90, "231-23", "239-49");
    // const ret = await usuarioController.deletar("642472c11e167a35d5525925");
    // console.log(ret);
    
 });

// CRUD RECICLAGEM
mongoose.connect(uri).then(async (conn) => {

    // const ret = await reciclagemController.create('Metal', "imagem3", "2kg", 20, "6424c00c15f107c6e2936531");
    // const ret = await reciclagemController.read("6429d87ad7e5ff3a3c12d1b9");
    // const ret = await reciclagemController.update("64247b776deae21bbbc11743", 'Plático', "imagem2", "2,4kg", "29/03/2023", "20");
    // const ret = await reciclagemController.deletar("6429d87ad7e5ff3a3c12d1b9");
    // console.log(ret);
    
});