function Banco(conta, saldo, tipoConta, agencia){
    this.conta = conta
    this.saldo = saldo
    this.tipoConta = tipoConta
    this.agencia = agencia

    this.buscarSaldo = () => parseFloat(this.saldo)

    this.depositar = (deposito) => this.saldo = this.saldo + deposito
    
    this.sacar = (saque) => this.saldo = this.saldo - saque

    this.numeroConta = () => this.conta
    
}

var conta = new Banco(21312, 1290, "Poupança", 3244)

conta.depositar(100)
conta.sacar(25)

console.log("Olá, após a movimentação, o saldo da sua conta " +
            conta.tipoConta + " de número " + conta.numeroConta() + " é de R$ " + conta.buscarSaldo())


