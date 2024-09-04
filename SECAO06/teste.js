function Cliente(nome,sobrenome,cpf,numero){
    this.nome = nome;
    this.sobrenome= sobrenome;
    this.cpf = cpf;
    this.numero= numero;

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome} `;
    };

}

const c1 = new Cliente();
c1.nome='Flavio';
c1.sobrenome='Santos';
c1.numero=998234567;
c1.cpf='123456432-78';

for( let chave in c1){
    if (chave!=='nomeCompleto'){
        console.log(`${chave}: ${c1[chave]}`);
    }
}
console.log(c1.nomeCompleto());

