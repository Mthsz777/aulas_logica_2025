const prompt = require('prompt-sync')()
let nr1 = Number(prompt('Digite um numero'))

switch(nr1){
    case nr1 = 1:
        console.log(`Domingo`)
        break
        case nr1 = 2:
            console.log(`Segunda-feira`)
            break
            case nr1 = 3:
                console.log(`Terça-feira`)
                break
                case nr1 = 4:
                    console.log(`Quarta-feira`)
                    break
                    case nr1 = 5:
                        console.log(`Quinta-feira`)
                        break
                        case nr1 = 6:
                            console.log(`Sexta-feira`)
                    default:
                        console.log(`Sabado`)
}