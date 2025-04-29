let cotacaoDolar = 5.65
let cotacaoEuro = 6.64

function converterMoeda(valorReais){
    let valorEmDolar = valorReais / cotacaoDolar
    let valorEmEuro = valorReais / cotacaoEuro

    console.log(`R$ ${valorReais.toFixed(2)} equivale a: `);
    console.log(`R$ ${valorEmDolar.toFixed(2)}  `);
    console.log(`R$ ${valorEmEuro.toFixed(2)}  `);
    
}
converterMoeda(100)
converterMoeda(50)
converterMoeda(10)