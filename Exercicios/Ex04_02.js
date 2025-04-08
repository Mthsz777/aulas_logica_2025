const prompt = require('prompt-sync')()
let anoAtual = Number(prompt("Digite o ano atual"))
let anoNascimento = Number(prompt("Digite o ano de nascimento"))
 let faixaEtaria = anoAtual - anoNascimento
 switch(true){
    case faixaEtaria < 10:
        console.log("Criança")
        break
        case faixaEtaria >= 11 && faixaEtaria <= 17:
            console.log("adolescente")
            break
            case faixaEtaria >= 18 && faixaEtaria <= 59:
                console.log("Adulto")
                break
                default:
                    console.log("idoso")
 }