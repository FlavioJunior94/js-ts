let numero = 987654321
let numeroin =[]
numero = String(numero)
let tamanho = numero.length
//console.log(typeof(numero) + ' ' + tamanho)

for (i=0;i<tamanho;i++){
    numeroin.unshift(numero[i])
}
console.log(String(numeroin).replace(/,/g,''))

console.log('--------------')

