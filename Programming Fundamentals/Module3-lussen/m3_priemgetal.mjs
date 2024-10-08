import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal;
let isPrime = true;

console.log('Geef een getal, ik ga na of het een priemgetal is of niet...');
getal = parseFloat(await userInput.question('Geef een getal: '));

for (let i = 2; i <= Math.sqrt(getal); i++) {
    if (getal % i === 0) {
        isPrime = false; // Le nombre n'est pas premier
        break; // Pas besoin de continuer
    }
}


if (isPrime && getal > 1) {
    console.log('Je getal is een priemgetal');
} else {
    console.log('Je getal is geen priemgetal');
}

process.exit();
