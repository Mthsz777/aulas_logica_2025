const prompt = require('prompt-sync')()

const carroString = 'Gol;Corsa;Palio;Monza;Fusca;';
const carros = carroString.split(';');

for (let i = 0; i < carros.length; i++) {
  if (carros[i] !== '') { 
    console.log(`Posição ${i + 1}, Carro: ${carros[i]}`);
  }
}