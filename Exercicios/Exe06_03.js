const prompt = require('prompt-sync')()

let somaPar = 0
let somaImpar = 0
let qtdPar = 0
let qtdImpar = 0
let entrada = 0
for(let i = 0; i <= 5; i++){
    entrada = Number(prompt("Digite um numero: "))
    if(entrada % 2 == 0){
        somaPar += entrada
        qtdPar++
    }
    else{
        somaImpar += entrada
        qtdImpar++
    }
}

console.log(`A soma de ${qtdPar} é ${somaPar}`)
console.log(`A soma de ${qtdImpar} é ${somaImpar}`)