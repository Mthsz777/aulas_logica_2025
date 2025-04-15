const prompt = require('prompt-sync')()

function cabecalho(texto) {
    console.log('-----------------------------');
    console.log( texto)
    console.log('-----------------------------');
    
}

function saudacao(){
    let nome = prompt('Digite seu nome')
    console.log(`${nome} tenha um bom dia`);
    
}

//chamando a função
//passando o parametro junto com a função
cabecalho('SESI/SENAI')
//posso declarar uma variavel e passa-la como parametro para função
let escola = 'SESI 025'
cabecalho(escola)
saudacao()

//criei a função soma que ira receber dois valores como paramentro, a partir desses valores realizara o calculo e mostrara o resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
    
}
soma(5,6)

//Exercicio: Crie uma função com nome ParImpar, que receba por parâmetro um número e verifique se esse número é par ou ímpar
//chame essa função por 2 vezes com numeros diferentes
function ParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " e um numero par.");
    } else {
        console.log(numero + " e um numero impar.");
    }
}
ParImpar(4);  
ParImpar(7);

function media(nr1, nr2){
    let resultado = (nr1 + nr2) / 2
    return(resultado)
}
console.log(media(6,8));
let valor = media(9,7)
console.log(valor);
ParImpar(valor)
