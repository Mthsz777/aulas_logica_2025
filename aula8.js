const prompt = require('prompt-sync')()

let altura = Number(prompt('Digite sua altura'))
let peso = Number(prompt('Digite seu peso'))
let imc = peso / (altura ** 2)
if (imc < 18.5){
    console.log('Abaixo do peso ideal')
}else if(imc >= 18.5 && imc < 25){
    console.log('peso ideal')
}else if(imc >= 25 && imc < 30){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}

//Verificar se o triangulo é equilatero ou escaleno
//receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1:'))
let lado2 = Number(prompt('Digite o valor do lado 2:'))
let lado3 = Number(prompt('Digite o valor do lado 3:'))

//verificar se o triangulo é equilatero caso tenha todos os lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo equilatero ?', eq, 'Triangulo Escaleno', es)


let ld1 = Number(prompt('Digite o valor do lado 1:'))
let ld2 = Number(prompt('Digite o valor do lado 2:'))
let ld3 = Number(prompt('Digite o valor do lado 3:'))

let equ = (ld1 == ld2) && (ld2 == ld3)
let esc = (ld1 != ld2) && (ld2 != ld3) && (ld1 != ld3)

if(equ = (ld1 == ld2) && (ld2 == ld3)){console.log(`Triangulo equilatero`)}else if(esc = (ld1 != ld2) && (ld2 != ld3) && (ld1 != ld3)){console.log(`Triangulo escaleno`)}else{
    console.log(`Triangulo isóceles`)
}


//descobrir a quantidade de horas trabalhadas
let hrs = Number(prompt('Total de horas trabalhadas: '))
let vendas = Number(prompt('Total de vendas: '))

//validar se uma das condições foi atentida (Mais de 5000 em vendas ou mais de 40 hrs trabalhadas)
if(vendas > 5000 || hrs > 40){
    console.log(`Tem direito ao bonus`)
}
else{
    console.log(`Não tem direito ao bonus`)
}

// crie um algoritmo que recebe um caractere e verifique se ele é uma vogal ou uma consoante
let caractere = prompt('Digite o caractere: ')
if(caractere == 'a' || caractere == 'e' || caractere == 'i' ||caractere == 'o'|| caractere =='u'){
    console.log(`Vogal`)
}
else{
    console.log(`Consoante`)
}