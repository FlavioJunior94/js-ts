
const  relogio = document.querySelector('div#relogio');


let seconds = 0; //para começar no tempo 0 do java script
let timer;

document.addEventListener('click',function(e){
    const elem = e.target;
    if (elem.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        seconds=0;
    }

    if (elem.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();
    }

    if (elem.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
})


function getHourSecond(seconds){
    const data = new Date(seconds * 1000); //seconds na verdade é em milessimos de segundos, o *1000 transfoma para segundos realmente

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function startClock(){
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getHourSecond(seconds);
    },1000);
}
/*
ANTES DE USAR  const elem = e.target;

const  iniciar = document.querySelector('.iniciar');
const  pausar = document.querySelector('.pausar');
const  zerar = document.querySelector('.zerar');




iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startClock();
});
pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function(event){
    relogio.innerHTML = '00:00:00'
    seconds=0

});



*/