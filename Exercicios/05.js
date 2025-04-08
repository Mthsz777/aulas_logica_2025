const prompt = require('prompt-sync')()

let metros = Number(prompt('Digite um valor em metros?'))
let centimetros = metros * 100
let milimetros = metros * 1000
let km = metros / 1000
console.log(`O valor convertido em centimetros é ${centimetros}`)
console.log(`O valor convertido em milimetros é ${milimetros}`)
console.log(`O valor convertido em KM é ${km}`)