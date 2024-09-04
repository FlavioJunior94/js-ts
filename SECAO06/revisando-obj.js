/*
const pessoa = {
    nome: 'Flavio',
    sobrenome: 'Santos'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);


const chave ='nome'
console.log(pessoa[chave]);


const pessoa1 = new Object();
pessoa1.nome = "flavio";
pessoa1.sobrenome = "Santos";

const pessoa2={
    nome: "luiz",
    sobrenome: " Otavio"
}

console.log(pessoa1, pessoa2);

delete pessoa1.nome;
console.log(pessoa1, pessoa2);

pessoa2.idade = 30;

pessoa2.falaNome = function(){
    console.log(`meu nome é ${this.nome}`);
    
}

pessoa2.getNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

pessoa2.falaNome();

console.log(pessoa2.getNascimento());

for (let chave in pessoa2){
    console.log(chave);
    
}

function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){ // sem a palavra get tbm funciona, porem se usar o get , chama p1.nomeCompleto , e se for sem com  () = p1.nomeCompleto
        return`${this.nome} ${this.sobrenome}`;
    }
}
}

const p1 = criaPessoa('Flavio', 'Junior');

console.log(p1.nomeCompleto);

*/

function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;
    Object.freeze(this); // impede de alterar os dados
} // exemplo --> return {nome: 'Luiz', sobrenome:'Miranda}

//new cria um objeto vazio e vai pegar a palavra chave this e atrelar ao objeto e retorna o this
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = "Outronome"
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);


const p3 = {};
 p3.nome = "Flavio";