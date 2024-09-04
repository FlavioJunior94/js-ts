const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador+=valor;
    return acumulador
},0);


console.log(total);

const par = numeros.reduce(function(acumulador,valor,indice,array){
    if (valor%2===0) acumulador.push(valor);
    return acumulador;
},[]);

console.log(par)


const pessoas = [
    {nome: 'Flavio' , idade: 29 },
    {nome: 'Geraldao' , idade: 39 },
    {nome: 'Joao' , idade: 80 },
    {nome: 'Jose' , idade: 51 },
    {nome: 'enza' , idade: 15 },
 ]


 const older =  pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade >valor.idade) return acumulador;
    return valor;
 });

 console.log(older);
 