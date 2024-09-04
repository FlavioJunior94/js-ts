function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

console.log(mostraHora());

//quando quero trabalhar com intervalo de tempo , utilizo o setINterval

function funcaDointerval(){
    console.log(mostraHora());
}

setInterval(funcaDointerval, 1000) //funcao funcaoDOinterval executa de 1 em 1 segundos (1000 milissegundos)

//pode criar a function dentro do setInterval como abaixo

setInterval(function(){
    console.log(mostraHora());
    
}, 1000);

//pode jogar numa variavel

const timer = setInterval(function(){
    console.log(mostraHora());
    
}, 1000);

//executa so uma ver o settimeout
setTimeout(function(){
    clearInterval(timer); //clearInterval -> função nativa do js / e um metodo
},10000) //10k milissegundos , 10 segundos. a função vai executar ate chegar em 10 segundos

//imprimir ola mundo depois de 5 segundos usando setTimeout:

setTimeout(function(){
    console.log('olá mundo');
    
}, 5000); //5000 milissegundos = 5 segundos