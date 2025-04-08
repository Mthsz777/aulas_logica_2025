//trabalhando com while
const prompt = require('prompt-sync')()
//execultar o laço x vezes

let contador = 1

//irá repetir enquanto a condição for verdadeira 
//Ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <= 5){
    console.log(`O contador é ${contador}`)
    //incrementando a variavel ou seja adicionando valor a ela
    //para que continue o processo ate que a condição seja atingida
    contador = contador + 1
}
console.log("FIM")

let senha_senai = '12345'

while(true){
    let senha = prompt("digite a senha: ")
    if(senha_senai == senha){
        console.log('Voce hackeou a senha')
        break
    }else if(senha == 'Desisto'){
        break
    }
}


//Escreva um programa que fique recebendo o valor de varios produtos, até que digite 0 e exiba no final a soma de minha compra e
//a quantidade de produtos lidos

let soma = 0
let qtd = 0

while(true){
    let valor = Number(prompt('Digite o valor do produto(0 para encerrar): '))
    if(valor == 0){
        break
    }
    else{
        soma = soma + valor
        qtd++
    }
}

console.log(`Foram informados ${qtd}`)
//tofixed para colocar somente dois digitos apos a virgula
console.log(`Valor total dos produtos ${soma.toFixed(2)}`)
let soma2 = 0
let qtd2 = 0
let encerrar = ""

while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto: '))
        soma2 = soma + valor
        qtd2++
        encerrar = prompt("Deseja continuar: (digite SUB-TOTAL) ")
    }


console.log(`Foram informados ${qtd}`)
//tofixed para colocar somente dois digitos apos a virgula
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`)

//jogo de adivinhação de numeros
console.log("##########################")
console.log("🦅 JOGO DA ADIVINHAÇÃO 🦅")
console.log("##########################")

let nrSorteado = Math.floor(Math.random() * 100 + 1) //gera um numero aleatorio
let acertou = false

while(!acertou){
    const chute = parseInt(prompt('🦅Digite um numero entre 1 e 100 para adivinha🦅'))

    if(chute > nrSorteado){
        console.log(`Voce chutou ${chute}, tente um numero menor `)
    }else if(chute < nrSorteado){
        console.log(`Voce chutou ${chute}, tente um numero maior`)
    }else if(chute == nrSorteado){
        console.log(`Voce chutou ${chute}, Parabens voce acertou`)
        acertou = true
    }
}