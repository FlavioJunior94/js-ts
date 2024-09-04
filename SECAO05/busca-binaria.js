let arrai = [...Array(10).keys()].map(i => i + 1);

let num = 2;
let inicio = 0;
let fim = arrai.length - 1;
let media;
let contador =1;
while (inicio <= fim) {
    media = Math.floor((inicio + fim) / 2);  // Calcula o índice médio

    console.log(`passo ${contador} Início: ${inicio}, Fim: ${fim}, Média: ${media}, Valor Médio: ${arrai[media]}`);

    if (arrai[media] > num) {
        fim = media - 1;  // Ajusta o fim para procurar na metade esquerda
    } else if (arrai[media] < num) {
        inicio = media + 1;  // Ajusta o início para procurar na metade direita
    } else {
        console.log('Encontramos o número:', arrai[media]);
        break;  // Sai do loop quando encontrar o número
    }

    contador++
}

if (inicio > fim) {
    console.log('Número não encontrado');
}
