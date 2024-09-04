//construtora -> molde (classe)
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome= sobrenome;
    //this.nomeCompleto =()=> this.nome+' '+this+sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.estouAqui=" ahahahahah";
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}
//instancia 
const pessoa1 = new Pessoa('Luiz','O.');     //<- Pessoa = Função contrutora
const pessoa2 = new Pessoa('Maria','A.');     //<- Pessoa = Função contrutora
const data = new Date();


console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

console.log(pessoa1.estouAqui);
console.log(pessoa2.nomeCompleto());
