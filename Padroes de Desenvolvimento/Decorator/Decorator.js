


class Sanduiche {
    constructor() {      
      this.queijoMussarelaRalado = 2
      this.pepperoni = 0.99
      
    }
}
  
  class FrangoAssado extends Sanduiche {
    constructor(queijoMussarelaRalado,pepperoni) {
      super(queijoMussarelaRalado,pepperoni) 
      this.frango = 4.5
      this.preco =  this.frango + this.pepperoni + this.queijoMussarelaRalado               
    } 
  }

  class Carne extends Sanduiche {
    constructor(queijoMussarelaRalado,pepperoni) {
      super(queijoMussarelaRalado,pepperoni)
      this.carne = 5.5
      this.preco =  this.carne + this.pepperoni + this.queijoMussarelaRalado           
    } 
  }

  class Bacon extends Sanduiche {
    constructor(queijoMussarelaRalado,pepperoni) {
      super(queijoMussarelaRalado,pepperoni)
      this.bacon = 4.5
      this.preco =  this.bacon + this.pepperoni
               
    } 
  }

  let sFrangoAssado   = new FrangoAssado()
  let sCarne          = new Carne()
  let sBacon          = new Bacon()


  console.log("Sanduíche de Frango Assado, Peperoni e QueijoMussarelaRalado custa R$: " + sFrangoAssado.preco)
  console.log("Sanduíche de Carne, Peperoni e QueijoMussarelaRalado custa R$: " + sCarne.preco)
  console.log("Sanduíche de Bacon e Peperoni custa R$: " + sBacon.preco)
