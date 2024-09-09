function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`);
            
        },

        comer(){
            console.log(`${this.nome} está comendo.`);
            
        },

        beber(){
            console.log(`${this.nome} está bebendo.`);
            
        }
    };

    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    });
}

const p1 = criaPessoa('Flavio','Santos');

console.log(p1.falar());

/*
Pode ser feito assim tambem:

desse modo metodos pode ser usando em outras coisas e nao so "criaPessoa"

const falar= {
        falar(){
            console.log(`${this.nome} está falando.`);
            
        },
};

const comer={
        comer(){
            console.log(`${this.nome} está comendo.`);
            
        },
};

const beber={
        beber(){
            console.log(`${this.nome} está bebendo.`);
            
        },
};

const pessoaPrototype={...falar,beber.comer};  // ou -> const pessoaPrototype=Object.assign({},falar,beber.comer)

function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {

    };

    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    });
}


*/