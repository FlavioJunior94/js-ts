const {cpfs} = require('./base');

/<.+?>.+?<\/.+?>/g
const expr = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
const expr2 = /(\d{3}\.){2}\d{3}\-\d{2}/g; //mais simplificada

const varios_cpfs = cpfs.match(expr2);

let cont =1;
for (const cpf of varios_cpfs){
    console.log(`CPF ${cont}: ${cpf}`);
    cont++;    
}
