/*const data = new Date();
console.log(data.toString())

const tresHoras = 60*60*3*1000;

const umDia = 60*60*24*1000; 'contados cm milessimos de segundo'

const data2 = new Date(0+umDia)
console.log(data2)

const data = new Date(2019,3,20,15,14,27,999); // ano , mes ,dia , hora, minuto, segundos, milessimos de segundos

const data = new Date('2019-04-20 20:20:59.100');
console.log('Dia ', data.getDate());
console.log('Mes ', data.getMonth() + 1); //mes começa do 0
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min ', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('ms ', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); //  0 - Domingo, 6 - Sabado
console.log(data.toString());

console.log(Date.now());*/

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}

function formataData(data){
    console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);