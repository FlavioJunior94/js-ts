export function funcao(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
  }

  funcao.call(new Date(), 'Flavio', 30);
  funcao.apply(new Date(), ['Flavio', 30]);
