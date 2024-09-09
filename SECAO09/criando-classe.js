//classe

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando.`);
    }
    comer(){
        console.log(`${this.nome} esta comendo.`);
    }
    beber(){
        console.log(`${this.nome} esta bebendo.`);
    }
}

const p1 = new Pessoa('Flavio','Santos');

console.log(p1);
console.log(p1.falar());
console.log(p1.beber());
console.log(p1.comer());

//com função construtora

function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`);
}