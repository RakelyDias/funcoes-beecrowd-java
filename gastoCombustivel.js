var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcularCombustivel(tempo, velocidade) {
    const consumo = 12; // 12 km/l
    return ((tempo * velocidade) / consumo).toFixed(3);
}

let tempo = parseInt(lines[0]);
let velocidade = parseInt(lines[1]);

let litros = calcularCombustivel(tempo, velocidade);
console.log(litros);
