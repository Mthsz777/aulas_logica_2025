let listaVazia = [];
console.log(listaVazia)

let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2]);

let nomes = ["Ana", "João", "Maria"]
console.log(nomes);

let listaMista = [1, "dois", true, 2.5]
console.log(listaMista);

let listaComLista = [
    ["Coca-cola", "Cachorro-Quente"],
    [5.0, 10.0]
]
console.log(listaComLista)

let frutas = ['maçã', 'pêra', 'Uva', 'abacaxi']
console.log(frutas);
frutas.push('Laranja')
console.log(frutas);

frutas = [...frutas, 'Banana']
console.log(frutas);

frutas.splice(2, 0, 'Morango')
console.log(frutas);

frutas.splice(3,1) //excluindo item pelo indice
console.log(frutas);

frutas.shift() //excluindo primeiro item da lista

frutas.pop() //encluindo ultimo item da lista
console.log(frutas);

//acessar itens da lista
console.log(frutas[3]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

//ordenar itens da lista
console.log(frutas);
frutas.sort()//ordenar lista de forma crescente
console.log(frutas);
frutas.reverse()//ordenando de forma decrescente
console.log(frutas);





