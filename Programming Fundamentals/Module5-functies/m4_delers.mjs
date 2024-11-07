import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question('geef een getal.    '));
let som_delers = 0;
let delers = [];

function deler() {
    for (let i = 1; i < getal; i++) {
        if (getal % i === 0) {
            delers.push(i);
            som_delers += i;
        }

    }
}

deler();
let delersWeergave = delers.join(' + ');

console.log('de som vd delers van het getal ' + getal + ' zijn '+ delersWeergave + ' = ' + som_delers);


process.exit();