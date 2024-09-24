import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = "Houdeyfa";
let age = 20;
let favSpel= "Fifa";

console.log("hallo, "+ naam +" je bent "+ age +" jaar oud en je favo spel is "+ favSpel);

process.exit();