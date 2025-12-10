interface PessoaProtocolo<T =string, U = number>{
    nome: T ;
    sobrenome:T;
    idade: U;
}

const aluno: PessoaProtocolo ={
    nome: 'Flavio',
    sobrenome: 'Santos',
    idade: 30,
}

console.log(aluno);
