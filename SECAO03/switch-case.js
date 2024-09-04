const data = new Date();
let diaSemana = data.getDay();

//diaSemana = null
console.log(diaSemana);

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

console.log(diaSemana, diaSemanaTexto)

//se tiver dentro de uma função poe usar o return diaSemanaTexto no lugar do break, (substituindo o break pr return)