for (let i=0;i<=5;i++) {
    console.log(`Linha ${i}`)
}
console.log('----------')
for (let i=5;i>=0;i--) {
    console.log(`Linha ${i}`)
}
console.log('----------')

for (let i = 0; i<=10;i++){
    const par =i%2 === 0 ? 'par' : 'impar';
    console.log(i,par)
}