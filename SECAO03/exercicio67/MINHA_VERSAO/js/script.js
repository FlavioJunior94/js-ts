const inputTarefa = document.querySelector('.input-tarefa')
const tarefas = document.querySelector('.listaDetarefas')
const enviar = document.querySelector('.enviar')

//botao 
enviar.addEventListener('click',function(e){
    console.log('apertando o botao')
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e){ // isso serve para quando apertar o enter ( codigo 13) ele executa ação, no caso cria a tarefa
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
});

//cria a tarefa e chama as outras funções necessarias
function criaTarefa(inputTarefa){
    const item = criaItem(); //criou  o item da tarefa / o texto do li
    item.innerText = inputTarefa; // defini o texto da tarefa
    tarefas.appendChild(item) //appendCHild defini o item filho do item na frente tarefas > item , ou seja ul > li
    botaoApagar(item) // adiciona o botao apagar no item (li) chamando a função, na função botaoApagar ela defini como será o botao
}

//cria o item de html , nesse caso cria o item li da lista ul
function criaItem (){
    const item = document.createElement('li');
    item.classList.add('item-lista') // poe uma classe no item criado
    return item;
}

//criar o botao apagar , nao apaga, ele apenas cria o botao que esta la na lista
function botaoApagar(item){
    item.innerText+='  '; // adiciona um espaço sem apagar oq ja tem no text do item (+=) para ter um espaço entre o texto e o botao
    /*const botaoApagar = document.createElement('button');
    botaoApagar.innerText = ' + '; // esse innerTtext adiciona o texto dentro do botao criado na linha de cima
    botaoApagar.setAttribute('class','apagar'); //outra maneira de por uma classe no item 
    botaoApagar.setAttribute('title', 'Apagar tarefa.');
    item.appendChild(botaoApagar); */

    //botao de outro tipo
    const botaoApagar = document.createElement('span');
    botaoApagar.innerText = ' + ';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title', 'Apagar tarefa.');
    botaoApagar.setAttribute('onclick', 'apaga.call(this)');
    item.appendChild(botaoApagar);
}

function apaga() {
    const span = this; // `this` é o <span> que foi clicado
    const li = span.closest('li'); // Encontra o <li> mais próximo
    if (li) {
        li.remove(); // Remove a <li>
    }
}

