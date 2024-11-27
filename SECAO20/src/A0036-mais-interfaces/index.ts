// Declaration Merging
interface Pessoa {
    nome: string;
  }

  interface Pessoa {
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    idade?: number;
  }

  const pessoa: Pessoa = {
    nome: 'Flavio',
    sobrenome: 'santos',
    enderecos: ['R. Paulo Osorio'],
    idade: 30,
  };

  pessoa.idade = 22;
  console.log(pessoa);
