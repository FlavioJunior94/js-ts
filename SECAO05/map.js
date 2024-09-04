const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosEmdobro = numeros.map( valor => valor*2);

console.log(numerosEmdobro);

const pessoas = [
    {nome: 'Flavio' , idade: 29 },
    {nome: 'Geraldao' , idade: 39 },
    {nome: 'Joao' , idade: 80 },
    {nome: 'Jose' , idade: 51 },
    {nome: 'enza' , idade: 15 },
 ]

// retorna apnas uma string com o nome
const nomes = pessoas.map (obj => obj.nome);
console.log(nomes)
//remova apenas a chave nome do obj
const idades = pessoas.map(obj => {
    return {idade: obj.idade}
});
console.log(idades);
//adicione uma chave de id para cada obj
const comIds = pessoas.map((obj,indice) =>{
    obj.id = indice;
    return obj;;
});
console.log(comIds);
