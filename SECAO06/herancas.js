//Produto -> aumento e desconto
// Camiseta , caneca, lapis = material

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco+=quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco-=quantia;
};

function  Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor=cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //lika os prototypes criados para produto, em Camisa
Camiseta.prototype.constructor = Camiseta; // linka o construtor, é como se existisse essa função construindo antes de linkar na linha acima

Camiseta.prototype.aumento = function(percentual){
    this.preco= this.preco + (this.preco * (percentual/100))
}

const produto = new Produto('Gen',11);
const camiseta = new Camiseta('Regata',7.5,'Preta');


camiseta.aumento(100)
console.log(camiseta);
console.log(produto);


function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material=material;
    this.estoque = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque=valor;
        }
    })
}


Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Batman',9.90,'porcelana',5);


caneca.aumento(10)
console.log(caneca);

caneca.estoque=100; // aqui estou usando setter
console.log(caneca.estoque); // aqui estou usando getter