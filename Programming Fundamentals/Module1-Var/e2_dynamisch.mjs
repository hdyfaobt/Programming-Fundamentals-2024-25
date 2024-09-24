import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question("wat is u naam? ");
let age = await userInput.question("wat is je leeftijd? ");
let favSpel= await userInput.question("wat is je fav spel? ");

console.log("hallo, "+ naam +" je bent "+ age +" jaar oud en je favo spel is "+ favSpel);

process.exit();