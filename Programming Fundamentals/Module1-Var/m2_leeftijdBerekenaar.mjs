import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat (await userInput.question("geef je geboortejaar."));
let toekomstJaar = parseFloat (await userInput.question("geef een toekomstjaar."));

let toekomstLeeftijd = toekomstJaar - geboorteJaar -1;
let toekomstLeeftijd2 = toekomstJaar - geboorteJaar;

console.log("in " + toekomstJaar +" ben je "+ toekomstLeeftijd +" of "+ toekomstLeeftijd2);
process.exit();