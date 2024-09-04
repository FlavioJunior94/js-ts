// defineProperty - defineProperties

function Produto(nome,preco,estoque){
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: true, // valor  pode ou nao ser alterado
        configurable: false// configuravel ou nao
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, // valor  pode ou nao ser alterado
            configurable: true// configuravel ou nao
        },
        preco:{
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: true, // valor  pode ou nao ser alterado
            configurable: true// configuravel ou nao
        },
    });

}

const p1 = new Produto('Camiseta',20,3);
/*p1.estoque=500000;
delete p1.estoque;
console.log(p1);*/

console.log(Object.keys(p1));

for (let chave in p1){
    console.log(chave);
    
}