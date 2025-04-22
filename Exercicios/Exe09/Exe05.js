function calcular(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return console.log("Erro: divisão por zero.");
            }
            break;
        case "**":
            resultado = num1 ** num2;
            break;
        default:
            return console.log("Operador inválido.");
    }

    console.log(`${num1} ${operador} ${num2} = ${resultado}`);
}
calcular(2, 5, "*")
calcular(10, 3, "+")
calcular(4, 2, "**")