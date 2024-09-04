const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
});

function limpaInput(){
    inputTarefa.value='';
    inputTarefa.focus(); //focus evento html
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText+=' ';
    const botaoApagar =document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar') poderia ser assim ,mas usaremos set Atribute
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa.');
    li.appendChild(botaoApagar);
}

document.addEventListener('click',function(e){
    const elemento = e.target;
    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});


function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);

}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()