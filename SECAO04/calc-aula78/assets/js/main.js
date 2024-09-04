function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {    
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elem = event.target;
            if (elem.classList.contains('btn-num')) this.addNumDisplay(elem);
            if (elem.classList.contains('btn-clear')) this.clear();
            if (elem.classList.contains('btn-del')) this.del();
            if (elem.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) {
                alert('Conta Invalida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta Invalida');
            return;
        }
    }


    this.addNumDisplay = elem => {
        this.display.value += elem.innerText;
        this.display.focus();
   };

   this.clear = () => this.display.value = '';
   this.del = () => this.display.value = this.display.value.slice(0,-1);
}

const calculadora = new Calculadora();

calculadora.inicia();