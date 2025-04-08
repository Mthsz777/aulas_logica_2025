const prompt = require('prompt-sync')()

let salario = Number(prompt('Digite seu salario'))

if(salario <= 2000){
    salario = salario + (salario * 0.12)
    console.log(`Salario reajustado em 12%, o valor total é: ${salario}`)
}

else if(salario > 2000 || salario <= 4000){
    salario = salario + (salario * 0.10)
    console.log(`Salario reajustado em 10%, o valor total é: ${salario}`)
}
else{
    salario = salario + (salario * 0.08)
    console.log(`Salario reajustado em 8%, o valor total é: ${salario}`)
}