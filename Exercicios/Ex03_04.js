const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite um numero?'))
let nota2 = Number(prompt('Digite um numero?'))
let media = (nota1 + nota2) / 2 
console.log(`A media do aluno é ${media}`)

if(media > 7){
    console.log('Aprovado')
}else if(media > 5){
    console.log('Reprovado')
}else{
    console.log('Em recuperação')
}