const prompt = require('prompt-sync')()

//operação com variaveis
let nr1 = Number(prompt("digite um numero?"))
let nr2 = Number(prompt("digite um numero?"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let subtracao = nr1 - nr2
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

let multiplicacao = nr1 * nr2
console.log(`A multiplicação entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

let divisao = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

let exponenciacao = nr1 ** nr2
console.log(`A exponenciação entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

// Cauculando valor do celular com desconto
let valor = Number(prompt('Digite o preço do celular: '))
let Desconto = Number(prompt('Digite o preço do desconto: '))

valor = valor - Desconto
console.log(`O valor do celular com desconto é r$${valor}`)

// Obtenha o numero e calcule seu dobro e sua metade
let numero = Number(prompt('Digite o numero'))
let dobro = numero * 2
let metade = numero / 2
console.log(`O dobro do numero é ${dobro}`)
console.log(`A metade do numero é ${metade}`)

//
let horas = Number(prompt('Digite as horas: '))
let dias = Number(prompt('Digite quantos dias de trabalho sera: '))
let total = horas * dias
let valorHora = Number(prompt('Quanto eu recebo por R$/h: '))
let cobrar = valorHora * total
console.log(`custo final do projeto R$${cobrar}`)