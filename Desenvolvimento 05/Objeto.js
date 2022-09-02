let cliente = {
    nome: "Gerson",
    cpf: 09836486934,
    telefone: 81977664455,
}

let produtos = ["Celular", "Televisão","Notebook"]


let listaPropriedades = () => {
    for (const e in cliente){
        console.log(cliente[e])
    }
}

let listElementosArray = () => {
for (const e of produtos){
    console.log(e)
    }
}
console.log("Propriedades do objeto")
listaPropriedades()
console.log("\nElementos do array")
listElementosArray()
