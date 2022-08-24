// Programa para calcular a nota mínima que o aluno precisa para ser aprovado, 
// após informar as duas primeiras notas.

function calcularMinima() {
    nota1 = 8.5
    nota2 = 7    
    var notaMinima = 21 - (nota1 + nota2)

    notaMinima > 10 ?   console.log(`Reprovado! Faltou ${notaMinima} pontos para alcançar a média!`) :
                        console.log(`Você precisa de no mínimo ${notaMinima} para ser aprovado!`)  
}

calcularMinima()