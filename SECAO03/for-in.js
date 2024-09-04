const frutas = ['Pera', 'Maçã','Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

/* for in --> le os indices ou chaves do objetos */

const pessoa ={
    nome: 'Flavio',
    sobrenome: 'Santos',
    idade:30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}