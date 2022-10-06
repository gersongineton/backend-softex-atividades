class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.numeroRodas = numeroRodas
  }

  get marcaModelo() {    
    return `Veículo: ${this.marca} ${this.modelo}`
  }

  clone(){

  }

  represent(){
    console.log(this.marcaModelo)
  }
}

const array = []

class Carro extends Veiculo {  
  constructor(modelo, marca, cor, numeroRodas, pintura, tipo) {
    super(modelo, marca, cor, numeroRodas);
    this.pintura = pintura;
    this.tipo = tipo;
  }
  clone() {
    const novoCarro = new Carro (this.modelo, this.marca, this.cor, this.numeroRodas, this.pintura, this.tipo)
    return novoCarro
  }

}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, categoria) {
    super(modelo, marca, cor, numeroRodas);
    this.categoria = categoria;
  }
  clone() {
    const novaMoto = new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.categoria)
    return novaMoto
  }

}

const carro = new Carro('Camaro', 'Chevrolet', 'Amarelo', 4, 'Perolisada', 'Esportivo')
const moto = new Moto('Fazer 250cc', 'Yamaha', 'Preta', 2, 'Street')

class App {
  fabricar() {
    for (let i = 0; i < 6; i++) {
      if (i <= 3) {
        const novo = carro.clone()
        array.push(novo)
      } else {
        const novo = moto.clone()
        array.push(novo)
      }
    }
  }
  represents() {
    console.log(array)
    carro.represent()
    moto.represent()
  }
}

const startApp = new App()
startApp.fabricar()
startApp.represents()