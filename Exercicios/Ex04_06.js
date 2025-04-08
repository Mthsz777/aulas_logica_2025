const prompt = require('prompt-sync')()

let salario = Number(prompt('Digite o salario: '))

switch(true){
    case salario < 2000:
        salario = salario + (salario * 0.12)
        console.log(`salario reajustado ${salario}`)
        break
    case salario >= 2000 && salario < 4000:
        salario = salario + (salario * 0.10)
        console.log(`salario reajustado ${salario}`)
        break
    case salario > 4000:
        salario = salario + (salario * 0.08)
        console.log(`salario reajustado ${salario}`)
        break
        default:
            console.log('Operação invalida')

}