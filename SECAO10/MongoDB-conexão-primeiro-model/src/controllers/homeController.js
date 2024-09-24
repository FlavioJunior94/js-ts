const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
    .catch( e=> console.log(e));

exports.paginaInicial = (req,res) =>{
    res.render('index');
    console.log('respondendo o cliente');
    //console.log(` 'Pagina inicial' o que tem na req.session.nome ${req.session.nome} `);
    return;
    }

exports.trataPost =(req,res) =>{
    res.send(req.body);
    return;
}