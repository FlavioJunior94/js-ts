//return finaliza a função

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' +resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('Mundo!')

console.log(resto);


/*function duplica(n){
    return n*2;
}*/

function criaMultiplicador(multiplicador){
    //multiplicador
    return function  (n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));

