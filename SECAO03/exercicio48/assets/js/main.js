const h1 = document.querySelector('#date')
const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano =  data.getFullYear();
const diaSemana = data.getDay();
const hora = data.getHours();
const minuto = data.getMinutes();

let diaSemanaTexto;
let MesTexto;

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}

switch(diaSemana){
    case 0:
        diaSemanaTexto ='Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    default:
        diaSemanaTexto =''
}

switch (mes){
    case 0:
        MesTexto ='Janeiro';
        break
    case 1:
        MesTexto ='Fevereiro';
        break
    case 2:
        MesTexto ='Março';
        break
    case 3:
        MesTexto ='Abril';
        break
    case 4:
        MesTexto ='Maio';
        break
    case 5:
        MesTexto ='Junho';
        break
    case 6:
        MesTexto ='Junho';
        break
    case 7:
        MesTexto ='Agosto';
        break
    case 8:
        MesTexto ='Setembro';
        break
    case 9:
        MesTexto ='Outubro';
        break
    case 10:
        MesTexto ='Novembro';
        break
    case 11:
        MesTexto ='Dezembro';
        break
    default:
        MesTexto =''
    
}

h1.innerHTML=`
${diaSemanaTexto}, ${dia} de ${MesTexto} de ${ano} ${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}
`

//jeito mais rapido [ seguuindo documentações]
/*
const h1 = document.querySelector('#date')
const data = new Date();
const opcoes ={
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML= data.toLocaleDateString('pt-BR',opcoes);

*/