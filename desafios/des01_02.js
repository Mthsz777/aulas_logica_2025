const prompt = require('prompt-sync')()

let horas= Number(prompt("Digite a hora de 0 a 23:"));


if (horas >= 5 && horas <= 11) {console.log("Bom dia")
} else if (horas >= 12 && horas <= 17) {console.log("Boa tarde")
} else if (horas >= 18 && horas <= 23) {console.log("Boa noite")
} else {console.log("Boa madrugada")
}