const express = require('express');

const app = express();

/*CRUD -> create, read, update, delete
          post     get   put    delete  */
/* http://meusite.com/ <-- GET -> entregue a pagina. /
   http://meusite.com/sobre <-- GET -> entregue a pagina. /sobre   */

app.get('/', (req,res) =>{
    res.send('Hello world !');
});

app.get('/app', (req,res) =>{
    res.send(`
        <form action="/app" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar </button>
        </form>
        `);
});

app.post('/app', (req,res) =>{
    res.send(`
        recebi o formulario!
        `);
});

app.get('/contato', (req,res) =>{
    res.send('Obrigado por entrar em contato com a gente.')

});

app.listen(3000, () =>{
console.log('Acessando http://localhost:3000');
console.log('Servidor executando na porta 3000');

   });