
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagWeek = await userInput.question("welke dag vd week is het vandaag? ");
let dagMaand = await userInput.question("welke dag vd maand is het vandaag? ");
let maandJaar = await userInput.question("welke maand is het vandaag? ");


console.log("het is vandaag "+ dagWeek + " "+ dagMaand + " "+ maandJaar+ ".");