/*
ARRAYS


const [a ,b ,c ] = [1,2,3];
let a= 'A'
let b= 'B'
let c= 'C'

const numeros =[b ,c , a];
[a ,b ,c ] = numeros;
console.log(`a:${a} b:${b} c:${c}`)

*/
// ... rest, spread
const numeros = [ 10,20,30,40,50,60,70,80,90];
console.log(numeros[0])

//const primeiroNumero= numeros[0]

//console.log(primeiroNumero)
/*
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero)
console.log(resto)*/

const [um, , tres, ,cinco]=numeros

console.log(um , tres , cinco)

const numeros2 = [[1,2,3,],[4,5,6]];
console.log(numeros2[1][2])

const [,[,,seis]] = numeros2;
console.log(seis);