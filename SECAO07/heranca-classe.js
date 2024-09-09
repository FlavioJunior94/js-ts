class DispositivoEletronico{
    constructor(nome){
        this.nome=nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' Ja ligado');
            return;
        }
        this.ligado=true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome+ ' Ja desligado');
            return;
        }
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor=cor;
        this.modelo=modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi=temWifi;
    }

    ligar(){
        console.log('voce alterou o metodo ligar.');
        
    }
}



const s1 = new Smartphone('iphone','preto','11')

s1.ligar();
console.log(s1);

const t1 = new Tablet('ipad',true);
t1.ligar();
console.log(t1.ligado);
