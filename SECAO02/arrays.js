const alunos = ['Joao','Maria','Luiz']

console.log(alunos[1]) // imprimi maria
console.log(alunos[1][0]) // imprimi m de maria

alunos[3]='Eduardo' // add mais um aluno , se o indice ja existir, substitui

//adicionar na proxima posição

console.log(alunos.length) 
//alunos[alunos.lenght]='Luiza'

//como fazer isso de forma certa
alunos.push('Otavio')
alunos.push('Luiza')

console.log(alunos)

//adicionar no começo
alunos.unshift('Joana')
console.log(alunos)

for ( let i=0;i<alunos.length; i++){
    console.log(alunos[i])
}

//remover do fim
alunos.pop()
console.log(alunos)

//salvar o removido na variavel
let removido = alunos.pop()
console.log(removido)

//deletar aluno

//delete alunos[1] //vai deixar a posição com valor indefinido

console.log(alunos.slice(0, 3)) // pegar um trecho do array
console.log(alunos.slice(0, -3))
console.log(alunos instanceof Array) // se for array volta true