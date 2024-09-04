function funcao(){
    console.log(arguments[0]);
}

funcao('valor',1,2,3,4,5,6,7,8,9,0);


function soma(){
    let total =0;
    for (let argumento of arguments){
        total += argumento;
    }
    return console.log(total);
    
}

soma(3,4,10);


function soma2(a=1,b = 0){
    console.log(a+b);
}

soma2(2);

function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    
}

conta('*',1,200,30,240,50);