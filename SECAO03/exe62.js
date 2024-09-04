function fizzBuzz (x){
    let retorno=[''];
    if (typeof x !=='number'){
        return x
    }
    if (x%3===0 && x%5===0 ){
        retorno.push('FizzBuzz')
    } else if (x%3===0){
        retorno.push('Fizz')
    } else if (x%5===0){
        retorno.push('Buzz')
    }else{
        retorno.push(x)
    }

    return retorno[1]
}

for (let i=0;i<=100;i++){
    console.log(fizzBuzz(i))
}