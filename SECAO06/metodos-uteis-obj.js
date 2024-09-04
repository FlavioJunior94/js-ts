/*const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = {
    ...produto,
    material:'porcelana'
};

outraCoisa.nome = 'Luiz Otavio';
outraCoisa.preco = 2.5;

console.log(outraCoisa);
console.log(produto);*/
const produto = {nome: 'Caneca', preco: 1.8};
//Object.freeze(produto);
Object.defineProperty(produto,'nome',{
    writable: false,
    configurable:false
})
const caneca = {nome: produto.nome, preco: produto.preco};
console.log(Object.getOwnPropertyDescriptor(produto,'nome'));

for ( let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor);
    
}