function usuario() {
    nome = "Gerson"
    codigo = 231085
    return (`Usuário: ${nome} | Código: ${codigo}`)
}
function calcIdade(anoAtual, anoNascimento){
    idade =  anoAtual - anoNascimento
    return(idade)
}
let suaIdade = calcIdade(2022, 1985)

let calcImc = (altura, peso) => {
    return eval(`${peso} / (${altura} * ${altura})`)
}
let seuImc = calcImc(1.6, 70)

console.log(usuario())
console.log(`Idade: ${suaIdade}`)
console.log(`IMC: ${seuImc}`)


