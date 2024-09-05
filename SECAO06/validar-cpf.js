/*
705.484.450-52 -> cpf de exemplo
pegar os 9 primeiros digitos e multiplicar pr uma sequencia regressiva (10 , 9 8 ... 2) [10x7 + 9x0 + 5x8]

formula
11 - ( total_acima %11 ) = 'primeiro digito'
se o numero for maior que 9, considere 0

pegar os 9 primeiros digitos E O PRIMEIRO DIGITO e multiplicar pr uma sequencia regressiva (11 ,10 8 ... 2) [11x7 + 9x0 + 5x8]

formula
11 - ( total_acima %11 ) = 'segundo digito'
se o numero for maior que 9, considere 0



let cpf='705.484.450-52'
let cpfLimpo=cpf.replace(/\D+/g,''); // essa expressao tira tudo q NAO for numero
cpfArray = Array.from(cpfLimpo); //transforma a string em array
console.log(cpfLimpo);
console.log(cpfArray);


*/

function validaCpf(cpf){
    let cpfSemForm = cpf;
    let cpfFormatado=formataCPf(cpf);
    cpfFormatado.pop();
    cpfFormatado.pop();

    let pDigito = (primeiroDigito(cpf));
    cpfFormatado.push(pDigito);

    let sDigito = (segundoDigito(cpfFormatado));
    cpfFormatado.push(sDigito);

    let cpfFormatadoString = `${cpfFormatado[0]}${cpfFormatado[1]}${cpfFormatado[2]}.${cpfFormatado[3]}${cpfFormatado[4]}${cpfFormatado[5]}.${cpfFormatado[6]}${cpfFormatado[7]}${cpfFormatado[8]}-${cpfFormatado[9]}${cpfFormatado[10]}`;


    if (cpfFormatadoString===cpfSemForm) return console.log('CPF VALIDO !');
    return console.log('CPF INVALIDO!')
    
}

function primeiroDigito(cpf){
    let cpfFormatado=formataCPf(cpf);
    let cont =10;
    let multDigito1 = 0;
    cpfFormatado.pop();
    cpfFormatado.pop();
    for ( i of cpfFormatado){
        multDigito1 = cont*Number(i) + multDigito1
        cont -=1;
    }
    primeiroDigito = 11 - ( multDigito1 %11 )

    if (primeiroDigito>9) return primeiroDigito=0;

    return primeiroDigito
}

function segundoDigito(cpf){

    let cont =11;
    let multDigito2 = 0;

    for ( i of cpf){
        multDigito2 = cont*Number(i) + multDigito2
        cont -=1;
    }
    segundoDigito = 11 - ( multDigito2 %11 )

    if(segundoDigito>9) return segundoDigito = 0 ;

    return segundoDigito
}

formataCPf = (cpf) => cpfArray = Array.from(cpf.replace(/\D+/g,''));

/let cpf = '705.484.450-52';



validaCpf(cpf);

