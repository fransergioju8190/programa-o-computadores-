chefe()

function chefe(){
    var numero = Number(prompt(`Informe um número`))
    
    exe9(numero)
}

function exe9(num){ // Supondo num = 6
     var soma = 0
     for(var divisor = num; divisor >=1; divisor++){//Divisor começa em 1 e vai ate 6
        if(num % divisor == 0){
            soma =  soma + divisor
        }
    }    
    console.log(`A soma dos divisores de ${num} é ${soma}`)
}