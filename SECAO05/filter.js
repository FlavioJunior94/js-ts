//filter

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
//retornar os numeros maiores que 10
let maiores =[];
for ( let i of numeros){
    if (i>10){
        maiores.push(i)
    }
}

console.log(maiores);
// filtrando
function callbackFilter(valor ){
    return (valor > 10);
}

const numeroFiltrado = numeros .filter(valor => valor > 10);

console.log(numeroFiltrado);


const arrai = [
    1,  2,  3,  4,  5,  6,  7,  8,  9,
   10, 11, 12, 13, 14, 15, 16, 17, 18,
   19, 20, 21, 22, 23, 24, 25, 26, 27,
   28, 29, 30, 31, 32, 33, 34
 ];


 const par = arrai.filter(i => i%2===0);
 const impar = arrai.filter(i => i%2===1);

 console.log(par,impar);


 const pessoas = [
    {nome: 'Flavio' , idade: 29 },
    {nome: 'Geraldao' , idade: 39 },
    {nome: 'Joao' , idade: 80 },
    {nome: 'Jose' , idade: 51 },
    {nome: 'enza' , idade: 15 },
 ]

 //nomes com mais de 5 letras
 const nomeMaisde5 = pessoas.filter(obj => obj.nome.length >5)
 //pessoas com mais de 20 anos
 const maisVinte = pessoas.filter(obj => obj.idade>20)
//nome termina em a
const terminaEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
 console.log(nomeMaisde5);
 console.log(maisVinte);
 console.log(terminaEmA);
 