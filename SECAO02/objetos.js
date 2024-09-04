const nome01='Luiz'
const sobrenome01= 'Miranda'
const idade01= 25;

const pessoa1 ={
    nome: 'Flavio',
    sobrenome: 'Junior',
    idade:29
}

console.log(pessoa1.nome)


function criaPessoa (nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
/*
function criaPessoa (nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
para a função acima pode fazer assim tbm


function criaPessoa (nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade
    }
}
*/


const pessoa2 = criaPessoa('Luizao','Otario',23)
console.log(pessoa2.nome)

const pessoa3 = {
    nome: 'Flavio',
    sobrenome: 'Junior',
    idade: 29,
    
    fala() {
        console.log(`sou ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}`);
    },

    incrementaIdade(){
        ++this.idade
    }
}

pessoa3.fala();
pessoa3.incrementaIdade()
pessoa3.fala();
pessoa3.incrementaIdade()
pessoa3.fala();
pessoa3.incrementaIdade()
pessoa3.fala();
pessoa3.incrementaIdade()
pessoa3.fala();