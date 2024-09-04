function maior(x,y){

    if (x>y){
        return console.log(`O ${x} é maior que ${y}`)
    }else{
        return console.log(`O ${y} é maior que ${x}`)
    }

}

let num1=340
let num2=56

maior(num1,num2)

//melhoria da funcao
//1
function maior(x,y){

    if (x>y){
        return console.log(`O ${x} é maior que ${y}`)
    }
    return console.log(`O ${y} é maior que ${x}`) //nao precisa do else


}

//2

function maior(x,y){

    return x>y ? console.log(`O ${x} é maior que ${y}`) : console.log(`O ${y} é maior que ${x}`); //pondo em 1 linha

}


//3

const max2=(x,y) => x> y ? console.log(`O ${x} é maior que ${y}`) : console.log(`O ${y} é maior que ${x}`); //função inteira em 1 linha