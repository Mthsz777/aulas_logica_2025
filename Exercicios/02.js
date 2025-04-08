const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite o numero'))
let sucessor = numero + 1
let antecessor = numero - 1 
console.log(`O sucessor do numero é ${sucessor}`)
console.log(`O antecessor do numero é ${antecessor}`)