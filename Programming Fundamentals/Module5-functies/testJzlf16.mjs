import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('geef getal 1  '));
let getal2 = parseFloat(await userInput.question('geef getal 2  '));


function opteller(getal1, getal2) {
    let som = getal1 + getal2;
    console.log('de som van de berekening ' + getal1 + ' + ' + getal2 + ' = ' + som);
}


process.exit();
