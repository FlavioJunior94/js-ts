/*

try{  //executado quando nao ha errors
    console.log('Abrir um arquivo');
    console.log('Manipulei arquivo, gerou erro');
    console.log('fechei arquivo');
    
}catch(e){ //executado quando h-a erros
    console.log('tratei o erro');
    
} finally{ //executado sempre
    console.log('FINALLY: eu sempre sou executado.');
    
} */


function retornaHora(data){
    if(data && !(data instanceof Date)){
        console.log('Não é data');
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false });
}

try{
    const newdata = new Date('01-01-1970 12:00:13')
    const hora =retornaHora(11);
    
    console.log(hora);
}catch(e){
    console.log(e);
    

}finally{
    console.log('tenha um bom dia');
    
}
