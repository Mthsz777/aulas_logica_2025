const prompt = require('prompt-sync')()

console.log("Bem-vindo ao curso de JavaScript!")
console.log("Estou aprendendo a usar console.log")
console.log(15 + 25);
console.log(100 - 45);
console.log(12 * 7);
console.log(144 /12);
console.log(20 % 3);
console.log(2 ** 5);

//Exercicios de variaveis e entradas de dados
let nomeAluno = "Tonin"
let altura = 1.64
let escola = "SESI"
let ano = "2°"
console.log(`O aluno ${nomeAluno} tem ${altura}, estuda na escola ${escola} e esta no ${ano}`)

let nomeProfessor = 'Ricardo'
let materia = 'Desenvolvimento de sistemas'
let anoIngresso = 2022
console.log(`O professor ${nomeProfessor} que leciona a materia ${materia} no ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)

nomeAluno = prompt('Digite o nome do aluno? ')
altura = parseFloat(prompt('Digite a altura? '))
escola = prompt('Digite o nome da escola? ')
ano = parseInt(prompt('Digite o ano da turma?' ))
console.log(`O aluno ${nomeAluno} tem ${altura}, estuda na escola ${escola} e esta no ${ano}`)

nomeProfessor = prompt('Digite o nome do professor: ')
materia = prompt('Digite o nome da materia: ')
anoIngresso = parseInt(prompt('Digite o ano de ingresso: '))
console.log(`O professor ${nomeProfessor} que leciona a materia ${materia} no ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)
