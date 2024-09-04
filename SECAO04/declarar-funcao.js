// Declaração de função (fuction hoisting)
falaOI();
function falaOI(){
    console.log('OI');
    
}
//eleva a função no topo o js , posso executar antes d declarar ela.

//first-class objects ( objeto de primeira classe)
//function expression

const souUmDado = function(){
    console.log('Sou um dado.');
};

souUmDado();


function executaFuncao(funcao){
    funcao();
}

executaFuncao(falaOI);


// Arrow function 

const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
}

funcaoArrow();

//dentro de um objeto

const obj ={
    falar: function(){
        console.log('esotu falando..');
    }
}

obj.falar();