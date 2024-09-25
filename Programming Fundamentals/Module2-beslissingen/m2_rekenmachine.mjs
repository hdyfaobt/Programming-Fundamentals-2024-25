import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('geef een eerste getal...  '));

let rekening = await userInput.question('welke rekening wilt u uitvoeren? (+-x/)    ');

let getal2 = parseFloat(await userInput.question('geef een tweede getal...  '));

let antwoord = 0;



switch (rekening) {
    case 'x':
        antwoord = getal1 * getal2;
        break;
    case '+':
        antwoord = getal1 + getal2;
        break;
    case '-':
        antwoord = getal1 - getal2;
        break;
    case '/':
        antwoord = getal1 / getal2;
        break;

}

console.log('de berekening ' + getal1 + rekening + getal2 + ' = ' + antwoord)

process.exit();