const prompt = require('prompt-sync')()

let numero = Number (prompt('Digite um numero'))
let dobro = numero * 2 
let triplo = numero * 3
let aoCubo = numero * numero * numero
console.log(`O dobro do numero é ${dobro}`)
console.log(`O triplo do numero é ${triplo}`)
console.log(`O numero ao cubo é igual a ${aoCubo}`)