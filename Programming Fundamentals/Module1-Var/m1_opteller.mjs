import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 54
let getal2 ="21"

let som= getal1+getal2;

console.log("je getallen zijn "+ getal1 + " en " + getal2)
console.log("de som ervan is "+ som)

process.exit();