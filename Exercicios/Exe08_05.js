const prompt = require('prompt-sync')()

const numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(`Numero: ${numbers[i]}, Dobro: ${numbers[i] * 2}`);
  }