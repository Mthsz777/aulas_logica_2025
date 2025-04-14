const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade'))

if(idade >= 18 && idade <= 70){
    console.log("Voto obrigatorio")
}
else{
    if(idade < 16){
        console.log("Voce não pode votar")
    }else{
        if(idade >= 16 || idade > 70){
            console.log("Voto facultativo")
        }
    }
}

//switch case estrutura de controle de fluxo para tomar decisões com base no valor de uma variavel
let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))
let op = prompt("escolha a operação (+, -, *, /, **): ")

//testa o valor da variavel se é true
switch(op){
    case '+':
        console.log(`Resultado: ${n1 + n2}`)
        break
    case '-':
            console.log(`Resultado: ${n1 - n2}`)
             break
             case '*':
                console.log(`Resultado: ${n1 * n2}`)
                break
                case '/':
                    console.log(`Resultado ${n1 / n2}`)
                    break
                    case '**':
                        console.log(`Resultado ${n1 ** n2}`)
                        break
                        default:
                            console.log(`Operação invalida`)
}
//Verificar qual letra é igual
let letra = prompt('Digite uma letra: ').toUpperCase()
//Quando usamos switch(variavel), o switch compara exatamente o valor da variavel com os cases definidos
switch(letra){
    case "A":
        case "E":
            case "I":
                case "O":
                    case "U":
                        console.log('Vogal')
                        break
                        default:
                            console.log('Consoante')
}

//converter a nota em numero para letra
let nota = parseInt(prompt('Digite a nota do aluno: '))

switch(true){
    case nota >= 90:
        console.log("Nota A")
        break
        case nota >= 80:
            console.log("Nota B")
            break
            case nota >= 70:
                console.log("Nota c")
                break
                case nota >= 60:
                    console.log("Nota D")
                    break
                    default:
                        console.log("Nota E")
}