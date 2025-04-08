const prompt = require('prompt-sync')()

let nr1 = Number(prompt('Digite um numero?'))
let positivo = nr1 > 0
let negativo = nr1 > 0
if (nr1 > 0){console.log (`o ${nr1} é positivo}`)}else { (nr1 < 0)
    console.log (`o ${nr1} é negativo`)
}