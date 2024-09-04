/* valor por referencia
                0         1          2
const nome = ['Eduardo', 'Maria', 'Joana']
string , objetos , funções , numeros
const nomes = new Array('Eduardo', 'Maria', 'Joana');

const nomes = ['Eduardo', 'Maria', 'Joana']
nomes[2]='Joao';

//delete nomes[2];
novo = nomes;
// novo.pop() remove do final .shift remove do começo
const removido =novo.shift();

console.log(nomes, removido);

nomes.push('Joana'); // adiciona no final do array
nomes.unshift('Flavio') // adiciona no começo
console.log(nomes, removido);

const nuevo = nomes.slice(0,-1);
console.log(nuevo);


const nome = "Flavio dos Santos Junior";
const nomes = nome.split(' ');
*/

const nomes = [ 'Flavio', 'dos', 'Santos', 'Junior' ]
const nome = nomes.join(' ');
console.log(nome);
