//record
const objeto1: Record<string,string | number>={
    nome: 'Flavio',
    sobrenome: 'Santos',
    idade: 30,
};

console.log(objeto1);

type PessoaProtocol ={
    nome?:string;
    sobrenome?:string;
    idade?: number;
}

//required
type PessoaRequired = Required<PessoaProtocol>; // transforma tudo q é opcional para required ( nao opcional).
//partial
type PessoaPartial = Partial<PessoaRequired>; // transforma tudo em opcional
//readonly
type PessoaReadonly = Readonly<PessoaRequired>;
//pick
type PessoaPicj = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol={
    nome: 'Flavio',
    sobrenome: 'Santos',
    idade: 30,
};

console.log(objeto2);

//Extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC,CDE>; // A B
type TipoExtract = Extract<ABC,CDE>; // C

//Module mode
export default 1;
