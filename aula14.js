let frutas = ['Maca', 'Banana', 'Uva', 'Abacaxi']

//A variavel x serve para interar os valores ate o limite da lista
//O nome não é obrigatoriamente ser o nome i, x ou contador
//pode ser qualquer nome variavel
for(let x = 0; x < frutas.length; x++){
    // O length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul seixas', 'Esteves','Viera']
//para cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome);
    
}

const prompt = require('prompt-sync')()
//verificando se é uma consoante
const vogais = ['a', 'e', 'i', 'o', 'u']
const consoante = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z']

let letra = prompt('Digite uma letra')
//Se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal');
    
}else if(consoante.includes(letra.toLowerCase())){
    console.log('consoante')
}else{
    console.log('Não é uma letra');
    
}

//Obtenha a posição do item
for(let[pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição${pos} e fruta ${fruta}`);
    
}

//separando os itens em uma lista
let produtos = 'Celular, notebook, Tv, tablet, headset'
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto);
    
}

//percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra);
    
}