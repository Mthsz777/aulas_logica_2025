const prompt = require('prompt-sync')()

let clima= Number(prompt("Digite o clima:"));


if (clima < 15) {console.log("Frio")
} else if (clima >= 15 && clima <= 25) {console.log("Agradavel")
} else if (clima >= 26 && clima <= 35) {console.log("quente")
} else {console.log("Muito quente")
}