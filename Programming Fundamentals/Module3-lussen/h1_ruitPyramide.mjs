import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte;

hoogte = parseFloat(await userInput.question('Geef de hoogte van de losange in: '));

for (let i = 1; i <= hoogte; i++) {
    let stars = '*'.repeat(i);
    console.log(stars);
}

for (let i = hoogte - 1; i >= 1; i--) {
    let stars = '*'.repeat(i);
    console.log(stars);
}

process.exit();
