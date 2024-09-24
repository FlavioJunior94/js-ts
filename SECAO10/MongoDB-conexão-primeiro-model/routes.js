const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js')

/*
function meuMiddleware(req,res,next){
    req.session = {nome:'flavio', sobrenome:'Santos'}
    console.log();
    console.log('Passei no seu middleware.');
    console.log();
    next();    

}
    */

route.get('/', homeController.paginaInicial,  );
route.post('/', homeController.trataPost);

route.get('/contato',contatoController.paginaInicial);

module.exports=route;