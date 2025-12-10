type ObterChaveFn = <o, k extends keyof o>(objeto: o,chave: k)=> o[k];

const obterchave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'Rosa',
    vacinas: ['Vacina 1', 'vacina 2'],
    idade: 10,
};

const vacinas = obterchave(animal, 'vacinas');
const cors = obterchave(animal, 'cor');

console.log(vacinas, cors, obterchave(animal,'idade'));

