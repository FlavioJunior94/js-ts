export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ){}

    getIdade(): number{
        return this.idade;
    }

    getCpf(): string{
        return this.cpf
    }

    getNomeCompleto(): string{
        return this.nome + ' '+ this.sobrenome;
    }
}


export class Aluno extends Pessoa{
    getNomeCompleto(): string{
        return 'Isso vem do Aluno '+this.nome + ' '+ this.sobrenome;
    }
}
export class Cliente extends Pessoa{
    getNomeCompleto(): string{
        return 'Isso vem do Cliente '+this.nome + ' '+ this.sobrenome;
    }
}

const aluno = new Aluno('Flavio','Santos',30,'000.000.000-00');
const pessoa = new Pessoa('Flavio','Santos',30,'000.000.000-00');
const cliente = new Cliente('Flavio','Santos',30,'000.000.000-00');

console.log(aluno.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());
