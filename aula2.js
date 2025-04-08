//Importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')();
//Variaveis e constantes
//Passo 1: Receber o nome da pessoa
//Passo 2: Receber a idade da pessoa
//Passo 3: Receber o peso da pessoa
//Passo 4: Exibir o nome, a idade e o peso
let nome = 'Tonin'
let idade = 77
let peso = 77.7
console.log (nome, idade, peso)
console.log ('nome', 'idade', 'peso')

//REceber e armazena o texto em uma variavel
   let    curso    =       "Desenvolvimento de sistemas"
// #tipo  nome   recebe       valor na        variavel

//Exibir o valor amarzenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 35 //valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "rei mago"

console.log("Ola", nome2, "voce tem:", idade2, "e hoje esta fazendo", temperatura, "°C")

//usando template string
console.log(`Ola ${nome2}, voce tem ${idade2} e hoje esta fazendo: ${temperatura}ºC`)

let chovendo = false;
let dia = true;
// as constantes nao podem ser reatribuidos novos valores
const PI = 3.1415;
console.log(PI);

// Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('Qual é seu nome?')
idade = parseFloat(prompt('Qual é sua idade?'))

peso = parseFloat(prompt('Qual seu peso?'))
console.log(`Seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)
// valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso);