export const nome ='Flavio';
export const sobrenome = 'Junior';
export const idade = 29;
const cpf ='19237248';


export default function soma(x,y){
    return x+y
}


export class Pessoa{
    constructor(nome,sobrenome){
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
}
//export {nome, sobrenome as sobrenome2, idade, soma};

//export {nome as default, sobrenome, idade,soma} // exportando a variavel nome como defaut