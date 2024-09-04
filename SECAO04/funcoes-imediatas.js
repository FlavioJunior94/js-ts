//IIFE -> immediately invoked function expression
/*
function qualquerCoisa(){
    console.log(111,222,333);
}

qualquerCoisa();*/
(function(){
console.log(123456);
const nome = 'flavio'; // nao afeta o scopo global

})();

const nome = 'santos';