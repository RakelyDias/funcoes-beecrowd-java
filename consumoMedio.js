var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcularConsumo = (distancia, combustivel) => (distancia / combustivel).toFixed(3);

let distancia = parseInt(lines[0]);
let combustivel = parseFloat(lines[1]);

let consumo = calcularConsumo(distancia, combustivel);
console.log(`${consumo} km/l`);
