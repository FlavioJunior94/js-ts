//Promise.all Promise.race Promice.resolve Promise.reject

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{

        if(typeof msg!=='string') reject('BAD VALUE');
        
        setTimeout(()=>{
            resolve(msg+'- passei na promise');
        },tempo);

    });

}

function aleatorio(min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise1',aleatorio(1,5)),
    esperaAi('Promise2',aleatorio(1,5)),
    esperaAi('Promise3',aleatorio(1,5)),
    //esperaAi(200,1000),
    //'outro valor'
];

Promise.race(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
    
});

//all => resolve tudo e entrega de uma vez o resultado
//race => entrega a primeira que resolver.

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Pagina em cache'); //promise reject leva para o erro
    }else{
        return esperaAi('Baixei a pagina',3000);
    }
}

baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
