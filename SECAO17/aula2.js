// (...)(...)(...) $1 $2 $3
const {texto} = require('./base');

const regExp1 = /João/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(/João/gi,'Flávio'));
console.log(texto.replace(/(João)/gi,'<b>$1</b>'));
console.log(texto.replace(/(João)/gi,function(input){
    return '---'+input.toUpperCase()+'---';
}));

