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