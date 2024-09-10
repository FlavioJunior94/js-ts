function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{

        if(typeof msg!=='string') reject('BAD VALUE');
        
        setTimeout(()=>{
            resolve(msg);
        },tempo);

    });

}

function aleatorio(min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

esperaAi('conectando DB',aleatorio(1,3))
.then(resposta =>{
    console.log(resposta);
    return esperaAi(22,aleatorio(1,3));
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Tratando os dados da BAse ',aleatorio(1,3));
}).then(resposta =>{
    console.log(resposta);
}).then(()=>{
    console.log('Exibe dados na tela.');
    
})
.catch(e =>{
    console.log('ERRO:',e);
    
});

console.log('isso vai sera exibido antes de qualquer coisa');
