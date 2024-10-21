import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

<<<<<<< HEAD
let getal1 = parseFloat(await userInput.question('geef getal 1  '));
let getal2 = parseFloat(await userInput.question('geef getal 2  '));


function opteller(getal1, getal2) {
    let som = getal1 + getal2;
    console.log('de som van de berekening ' + getal1 + ' + ' + getal2 + ' = ' + som);
}


process.exit();
=======
function optellen(getal1, getal2) {
    let antwoord = getal1 + getal2;
    console.log('het antwoord van ' + getal1 + '+' + getal2 + ' = ' + antwoord);
}

let getal1 = parseFloat(await userInput.question('geef een eerse getal. '));
let getal2 = parseFloat(await userInput.question('geef een tweede getal. '));

optellen(getal1,getal2);

process.exit();
>>>>>>> 8a668e64b8e0d134fbaae33e061fedcbc04ba7f2
