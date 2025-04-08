const prompt = require('prompt-sync')()

let anoAtual = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));

// Calcula a idade
let idade = anoAtual - anoNascimento;

// Verifica a faixa etária utilizando if, else if e else
let faixaEtaria;

if (idade < 10) {console.log("Criança")
} else if (idade >= 11 && idade <= 17) {console.log("Adolescente")
} else if (idade >= 18 && idade <= 59) {console.log("Adulto")
} else {console.log("Idoso")
}