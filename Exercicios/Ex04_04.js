const prompt = require('prompt-sync')()
let mes = prompt("Digite o mês: ")
switch(true){
    case mes == 'janeiro':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'fevereiro':
        console.log("Corresponde a 28 dias")
        break
    case mes == 'marco':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'abril':
        console.log("Corresponde a 30 dias")
        break
    case mes == 'maio':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'junho':
        console.log("Corresponde a 30 dias")
        break
    case mes == 'julho':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'agosto':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'setembro':
        console.log("Corresponde a 30 dias")
        break
    case mes == 'outubro':
        console.log("Corresponde a 31 dias")
        break
    case mes == 'novembro':
        console.log("Corresponde a 30 dias")
        break
    case mes == 'dezembro':
        console.log("Corresponde a 31 dias")
}