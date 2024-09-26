require('dotenv').config(); // referente a variaveis de ambiente configuradas no .env

const express = require('express');
const app = express();

const mongoose = require('mongoose'); // Quem modela e garante a base de dados .nos retorna uma promese 
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( ()=> {
        app.emit('pronto');
    })
    .catch(e=>console.log(e));

const session = require('express-session'); // identificar sessao  e trabalhar com coockie
const MongoStore = require('connect-mongo'); // para falar q sessoes sao salvas no bd
const flash = require('connect-flash'); // mensagens autodestrutivas 
const routes = require('./routes'); // são as rotas da app (/, /contato , etc)
const path = require('path'); // trabalhar com caminhos
const helmet = require('helmet'); //deixar a app mais segura
const csrf = require('csurf') // cria tokens para formularios, torna mais segura a app
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middlewares'); // funções executadas na rota

app.use(helmet());

app.use(express.urlencoded({extended: true})); // permite postar formularios pr dentro da aplicação 
app.use(express.json()); 
app.use(express.static(path.resolve(__dirname,'public'))); //arquivos estaticos que podem ser acessados diretamente.

const sessionOptions= session({
    secret: 'Vs?1Bq:Y%ELvXy2<2^3XSnZ6gh',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src','views')); // são arquivos q renderizamos na tela
app.set('view engine', 'ejs'); // a engine que estamos utilizando para renderizar

app.use(csrf()); // configurando csrf token
//nossos proprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); // chamando as rotas

app.on('pronto', () =>{
    app.listen(3000, () =>{
        console.log('Acessando http://localhost:3000');
        console.log('Servidor executando na porta 3000');
        
        });
});




