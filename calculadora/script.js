function calcular(){
  
    var numero1 = document.getElementById('numero1')
    var numero2 = document.getElementById('numero2')
    var resultado = document.getElementById('resultado')
    var resultado2 = document.getElementById('resultado2')
    var operador = document.getElementsByName('rdoperadores')

    if(operador[0].checked){
        var result = Number(numero1.value) + Number(numero2.value) 
        resultado.innerHTML = "O Resultado da Soma é: " + result
        resultado2.innerHTML = ""
    }
    else if(operador[1].checked){
        var result = Number(numero1.value) - Number(numero2.value) 
        resultado.innerHTML = "O Resultado da Subtração é: " + result
        resultado2.innerHTML = ""
    }
    else if(operador[2].checked){
        var result = Number(numero1.value) * Number(numero2.value) 
        resultado.innerHTML = "O Resultado da Multiplicação é: " + result
        resultado2.innerHTML = ""
    }
    else if(operador[3].checked){
        var result = Number(numero1.value) / Number(numero2.value) 
        var result2 = Number(numero1.value) % Number(numero2.value)
        resultado.innerHTML = "O Resultado da Divisão é: " + result       
        resultado2.innerHTML = "O Resto da Divisão é: " + result2
    }
    else {
        resultado.innerHTML = "Opção inválida"
        resultado2.innerHTML = ""
    }   

}