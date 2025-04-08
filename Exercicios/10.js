const prompt = require('prompt-sync')()

let dias = parseInt(prompt('Digite a qtd de dias que o carro foi alugado'))
let kmPercorrido = parseFloat(prompt('Digite a qtd de km percorrido'))

let custoPorDia= 60
let custoPorKm = 0.15

let custoTotal = (dias * custoPorDia) + (kmPercorrido* custoPorKm)
console.log(`Custo da viagem: ${custoTotal.toFixed(2)}`)