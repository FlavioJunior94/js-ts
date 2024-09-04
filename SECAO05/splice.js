//                -4       -3      -2         -1
//                 0        1       2          3
const nomes = [ 'Flavio', 'dos', 'Santos', 'Junior' ];

//nomes.splice(indice, delete, elem1, elem2 ); primeiro parametro , onde começar a mexer, segundo quanto quero apagar,terceiro quanto quero add

//nomes.splice(3,1); // [ 'Flavio', 'dos', 'Santos' ]

//const removidos = nomes.splice(2,2); // removidos = [ 'Santos', 'Junior' ]
//const removidos = nomes.splice(-2, Number.MAX_VALUE);
//console.log(nomes,removidos);

nomes.splice(3,1,'Senior');

console.log(nomes)