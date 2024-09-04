// ?:
/*
const pontuacaoUsuario = 999;

if(pontuacaoUsuario>=1000){
    console.log('Usuario VIP')
}else{
    console.log('Usuario normal')
}
*/

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP': 'Usuario Normal';
console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario,corPadrao)