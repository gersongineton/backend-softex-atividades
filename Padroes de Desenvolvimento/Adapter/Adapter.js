class Pato {
  constructor() {
    this.tipo = "Pato"
    this.ave = 'sim'
    this.voa = "nao";
    this.fazQuaQua="sim"     
  }
  getTipo() {    
    return console.log("Tipo: " + this.tipo) 
  }
  getAve() {    
    return console.log("É ave? " + this.ave) 
  }
  getVoa() {    
    return console.log("Voa? " +this.voa) 
  }
  getfazQuaQua() {    
    return console.log("Faz QuaQua? " + this.fazQuaQua) 
  }
}

class PatoAdapter extends Pato{
  constructor(tipo, ave,voa, fazQuaQua) {
    super(tipo, ave,voa, fazQuaQua)
      this.tipo = "Galinha"
      this.ave = 'Sim'
      this.voa = "Sim";
      this.fazQuaQua="Não"
      this.fazCocorico="Sim"
  }
}

class Galinha extends PatoAdapter{
  constructor(tipo, ave,voa, fazCocorico) {
    super(tipo, ave,voa, fazCocorico)
  
}

  getFazCocorico() {
    return console.log("Faz cocoricó? " + this.fazCocorico) 
  }
}

let pato1 = new Pato
let galinha1 = new Galinha

console.log(pato1)
console.log("\n---------------------------------------")
console.log(galinha1)
console.log("\n---------------------------------------")


