class ControleRemoto{
    constructor(tv){
        this.tv=tv;
        this.volume=0;
    }

    aumentarVolume(){
        this.volume+=2;
    }

    diminuirVolume(){
        this.volume-=2;
    }

    //metodo de instancia
    //trocaPilha(){
        //
    //}

    //metodo estatico

    static trocaPilha(){
        console.log('OK,vou trocar');
        
    }
}


const control1= new ControleRemoto('LG');

control1.aumentarVolume();
control1.aumentarVolume();
control1.aumentarVolume();
console.log(control1);
ControleRemoto.trocaPilha(); //referente a classe, 
console.log(control1);