var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcularVolume(raio) {
    const pi = 3.14159;
    return ((4/3) * pi * Math.pow(raio, 3)).toFixed(3);
}

let raio = parseFloat(lines[0]);
let volume = calcularVolume(raio);

console.log(`VOLUME = ${volume}`);
