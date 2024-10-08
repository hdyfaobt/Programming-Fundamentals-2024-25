import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({ input, output });


let getal;
let antwoord=0;

console.log('geef telkens een getal ik ga ze voor je optellen om het resutaal te tonen of te stoppen typ 0 of een negatief getal. ');

do {
getal = parseFloat(await userInput.question('geef nog een getal...  '))
antwoord +=getal;

} while (getal > 0);

console.log(antwoord);

process.exit();