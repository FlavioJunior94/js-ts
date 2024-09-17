const fs = require('fs').promises;
 
module.exports =(caminho,dados) => fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf8'});



/*
fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'}); // encoding: 'utf8' já é o w-> apaga e escreve o arquivo do zero, a -> adiciona linha nova
*/