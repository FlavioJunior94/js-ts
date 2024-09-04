const num1 = [1,2,3,4]
const num2 = [5,6,7,8]

//const num3 = num1.concat(num2,[9,10,11],'flavio')



//...rest -> spread

const num3 =[...num1,...num2,...[11,12,14], 'flavio']
console.log(num3);