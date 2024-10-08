import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({ input, output });

let hoogte;
let ster = '';

hoogte = parseFloat(await userInput.question('geef de hoogte in. '));

for (let i = 0; i < hoogte; i++) {
    ster += '*';
    console.log(ster);
}
process.exit();