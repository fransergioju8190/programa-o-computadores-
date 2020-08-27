chefe()

function chefe(){
    var vetor = []
    exe7(vetor)// estamos passando o vetor como parametro - escopo global
    console.log(vetor)
    calculamedia(vetor)
}
function exe7(vet){// vet representa vetor -> o que fizemos com vet, será feito no vetor
var numero =  Number(prompt(`Informe um número`))
do{
    // Coloca o numero em vet
    vet.push(numero)
    numero = Number(prompt(`Informe outro número, informe número negativo para encerrar`))
}
while(numero >= 0)
}

function calculamedia(vet){
    var soma = 0
    for(var i=0; i < vet.length; i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.length}`)
}
