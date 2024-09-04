const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelector('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor
console.log(backgroundColorBody);


for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
}

