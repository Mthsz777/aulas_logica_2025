const prompt = require('prompt-sync')()


ano = Number(prompt('Ano de nascimento'))
if(ano <= 2007){
    console.log('Voce é maior de idade')
}else{
    console.log('Voce e menor de idade')
}