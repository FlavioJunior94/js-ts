namespace MeuNamespace {
    const nomeDoNamespace = 'flavio';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }
    const pessoaDoNamespace = new PessoaDoNamespace('Flavio');
    console.log(pessoaDoNamespace);

    export namespace OutroNamespace{
        export const nomeDoNamespace = 'Nome do outro namespace';
    }
}

const constDoNamespace = 'valor da const do namespace';