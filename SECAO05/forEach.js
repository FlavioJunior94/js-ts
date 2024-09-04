const a1 = [1,2,3,4,5,6,7,8,9];

//com for 

for(let valor of a1){
    console.log(valor);
}

//forEach

a1.forEach(function(valor,indice,array){
    console.log(valor,indice,array);
});