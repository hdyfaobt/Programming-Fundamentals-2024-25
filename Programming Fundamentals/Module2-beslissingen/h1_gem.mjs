import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getallen = 0;

// Vraagt expliciet om 5 getallen van de gebruiker
let getal1 = parseFloat(await userInput.question('Geef getal 1: '));
let getal2 = parseFloat(await userInput.question('Geef getal 2: '));
let getal3 = parseFloat(await userInput.question('Geef getal 3: '));
let getal4 = parseFloat(await userInput.question('Geef getal 4: '));
let getal5 = parseFloat(await userInput.question('Geef getal 5: '));


// Bereken het totaal voor het gemiddelde
let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5)/5;

// Bepaal het hoogste, laagste getal
let hoogste = Math.max(getal1, getal2, getal3, getal4, getal5);
let laagste = Math.min(getal1, getal2, getal3, getal4, getal5);

// Toon de resultaten
console.log('Het hoogste getal is: ' + hoogste );
console.log('Het laagste getal is: ' + laagste);
console.log('het gemeddelde van de gegeven getallen is: '+ gemiddelde.toFixed(2)); 


process.exit();