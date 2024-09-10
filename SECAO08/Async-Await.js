function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{

        if(typeof msg!=='string') reject('BAD VALUE');
        
        setTimeout(()=>{
            resolve(msg+'- passei na promise');
        },tempo);

    });

}

function rand(min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

/*
esperaAi('Fase1 ', rand(0,3))
    .then(valor => { 
        console.log(valor);
        return esperaAi('Fase2',rand(0,9));
    })
    .then(fase =>{
        console.log(fase);
        return esperaAi('Fase3',rand(0,2));
        
    })
    .then(fase => {
        console.log(fase);
        return fase;  
    })
    .then(fase=>{
        console.log('terminamos as fases', fase)
    })
    .catch(e=>console.log(e)); */

    async function executa(){
        try{
            const fase1= await esperaAi('Fase1 ', rand(0,3));
            console.log(fase1);
            const fase2= await esperaAi(23, rand(0,3));
            console.log(fase2);
            const fase3= await esperaAi('Fase3 ', rand(0,3));
            console.log(fase3);

            console.log('terminamos as fases');
        } catch(e){
            console.log(e);
            
        }
    }

    executa();
    /*
    estados da promisse: pendente (pending) , 
    */