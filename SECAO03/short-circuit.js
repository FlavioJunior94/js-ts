/*
&& -> todas expressoes precisa ser verdadeiras, para retornar verdadeira
|| -> todas tem que ser falsas, para retornar falsa

FALSY 
-false
0
'' "" ``
nul/undefined
NaN

*/

console.log('Luiz Otavio' && 0 && 'Maria');

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao2)