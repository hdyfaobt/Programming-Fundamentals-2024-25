import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

function optellen(getal1, getal2) {
    let antwoord = getal1 + getal2;
    console.log('het antwoord van ' + getal1 + '+' + getal2 + ' = ' + antwoord);
}

let getal1 = parseFloat(await userInput.question('geef een eerse getal. '));
let getal2 = parseFloat(await userInput.question('geef een tweede getal. '));

optellen(getal1,getal2);

process.exit();