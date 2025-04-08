const prompt = require('prompt-sync')()
//estruturas condicionais e operadores relacionais
let a = 2
let b = 3

console.log(a == b)//relação de igualdade
console.log(a != b)//relação de diferença
console.log(a > b)//maior
console.log(a >= b)//maior ou igual
console.log(a < b)//menor
console.log(a <= b)//menor ou igual

//estruturas condicionais
let tenhoIngresso = true
if(tenhoIngresso == true){console.log('Posso entrar')}
//bloco de codigo
console.log('Posso entar')
//Receber valor da idade
let idade = Number(prompt('Qual sua idade?'))

//verificar se é maior ou igual a 18
if(idade > 18){
    console.log('Maior idade')
}

tenhoIngresso = false
if(tenhoIngresso == true){console.log('Posso entrar')}else{console.log('Estou barrado no baile')}
//bloco de codigo
console.log('Posso entar')

idade = Number(prompt('Digite a idade'))
if(idade >= 18){
    console.log('Voce é maior de idade')
}else{
    console.log('Voce e menor de idade')
}