const prompt = require('prompt-sync')()

let reais = parseFloat(prompt('Digite o valor em reais'))
let cotacao = parseFloat(prompt('Digite a cotacao do dolar'))

let dolares = reais / cotacao

console.log(`Tenho ${reais} na minha carteira que equivale a $${dolares.toFixed(2)}`)