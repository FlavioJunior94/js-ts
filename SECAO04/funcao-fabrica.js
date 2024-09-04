//factory function
//construction function
function criaPessoa(nome, sobrenome,a,p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){ //getter
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' '); //transformando em array
            this.nome=valor.shift(); //shift ele faz 2 coisas, retorna o primeiro valor para a variavel, e tira do array
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,

        imc(){
            const indice = this.peso /(this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Flavio','Junior',1.8,77);
console.log(p1.fala('falando sobre JS'));

console.log(p1.imc());
console.log(p1.nomeCompleto);

p1.nomeCompleto = "Flavio dos Santos Junior";

console.log(p1.nomeCompleto);