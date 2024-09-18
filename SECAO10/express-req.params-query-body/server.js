const express = require('express');
const app = express();
 
app.use( //serve para tratar o body da requisição post
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req,res) =>{
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar </button>
        </form>
        `);
});

app.post('/', (req,res) =>{
    console.log(req.body);
    
    res.send(`
        Obrigado, ${req.body.nome} volte sempre.
        `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) =>{ // ? no final do parametro (:paramtro) faz  com que ele seja opcional.
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.sobrenome);

});

app.listen(3000, () =>{
console.log('Acessando http://localhost:3000');
console.log('Servidor executando na porta 3000');

});



//exemplo /profiles/12345?campanha=gooleads&nome_campanha