// g = global (encontra todas as ocorrencias)
// i - insensitive
// () -> grupo

const {texto} = require('./base');

const regExp1 = /João/gi;
const regExp2 = /(os pequenos)(momentos)/i;

console.log(regExp2.test(texto));
console.log(regExp1.test(texto));
console.log(regExp1.exec(texto).index);
console.log(regExp1.exec(texto).input);

const found = regExp2.exec(texto);

console.log('=======');

if(found){

    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
