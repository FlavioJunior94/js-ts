const {texto, arquivos} = require('./base');

// * (opcionais) 0 ou n {0,}
// + (obrigatorio) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ caracter de escape
// {n,m} minimo e maximo
// {10,} no minimo 10
// {,10} de 0 a 10
//{5,10} de 5 a 10
/*console.log(texto);

const regExp1= /Jo+ão+/gi

console.log(texto.match(regExp1));*/
const regExp2= /\.(jpe{0,}g)/gi
for (const arquivo of arquivos){
    if (arquivo.match(regExp2)!==null) console.log(arquivo, arquivo.match(regExp2));
    
}