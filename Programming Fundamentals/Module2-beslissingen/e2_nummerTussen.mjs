import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let varMin = 24;
let varMax = 42;

let getal = parseFloat(await userInput.question('geef een getal...  '));

if (varMin<getal && getal<varMax) {
    console.log('je getal '+ getal +' ligt tussen 24 en 42')
}

else{
    console.log('je getal '+ getal + ' ligt niet tussen 24 en 42')
}

process.exit();