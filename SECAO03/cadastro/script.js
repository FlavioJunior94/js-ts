const header = document.querySelector('#header')
header.innerHTML=`
<h1>Cadastro de Clientes</h1>
<p id='subtitulo'> cadastre-se abaixo<p>

`
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.querySelector('#nome').value
    const  nascimento = document.querySelector('#nascimento').value
    const telefone = document.querySelector('#numetelefone').value
    const cpf = document.querySelector('#cpf').value
    const result =document.querySelector('#result')

    result.innerHTML=`
    <p>
        Ola ${nome}, portador do cpf ${cpf}. bem vindo!<br>
        seu nascimento é em ${nascimento} e seu telefone é ${telefone}
    </p>
    `


});