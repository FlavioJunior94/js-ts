//funcao construtora -> objetos
//funcao fabrica -> objetos
/* 
construtora -> Pessoa (new)

*/

function Pessoa(nome,sobrenome) {
    const ID = 123456
    const metodoInterno = function(){
        console.log('metodo interno');
        
    };
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log( this.nome +': sou um metodo');
    };
    
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria','Oliveira');

console.log(p1.nome);
console.log(p2.nome);

p2.metodo();