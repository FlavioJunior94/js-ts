function fatorial(n){
    let fat = 1;
    while (n>0) {
        fat = fat * n;
        n-=1
    }
    return fat
}

//console.log(fatorial(15));

function fibonacci(a){
    let penultimo =0;
    let ultimo =1;
    let numero;
    let fibo=[1];

    for (i=a; i>0;i--){
        numero = ultimo + penultimo; 
        penultimo = ultimo;
        ultimo = numero; 

        fibo.push(numero)
        
    }

    return fibo
}
/*
let v=27; 
let arrayFibonacci = fibonacci(v)
for (i=0; i<=v;i++){
    console.log(`numero ${i} = ${arrayFibonacci[i]}`)
}*/


function soma(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

//console.log(soma(1,2,3))

min= 11
max=15
const aleatorio =  Math.random() * (max-min)+min;
                                    

console.log(aleatorio);
