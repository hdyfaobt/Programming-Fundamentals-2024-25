import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let tafel;
let antwoord;
let i=0;

tafel = parseFloat( await userInput.question('van welke maaltafel wil je de berekeningen?   '));
    
for (i = 0; i <= 10; i++) {
    antwoord = tafel * i ;
    console.log(tafel + ' * ' + i + ' = ' + antwoord)
} 

process.exit();

