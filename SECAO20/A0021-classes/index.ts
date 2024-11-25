export class Empresa {
    public readonly nome: string; // public e redundante , é o default
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome:string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void{
        for (const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
}

export class Colaborador{
    constructor(
        public readonly nome:string,
        public readonly sobrenome: string
    ){}
}

const empresa1 = new Empresa('Udemy','11.111.111./ooo1-11');
const colaborador1= new Colaborador('Flavio', 'Santos');
const colaborador2= new Colaborador('Luiz', 'Otavio');
const colaborador3= new Colaborador('Maria', 'Vieira');

console.log(empresa1.nome);
