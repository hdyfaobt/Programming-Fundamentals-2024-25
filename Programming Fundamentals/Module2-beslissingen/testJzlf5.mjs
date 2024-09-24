import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("geef eeneerste getal in..."));
let getal2 = parseFloat(await userInput.question("geef een tweedegetal in ..."));

let grootsteGetal;

if (getal1>getal2) {
    grootsteGetal = getal1
    console.log(grootsteGetal)
}
else if (getal1<getal2) {
    grootsteGetal = getal2
    console.log(grootsteGetal)
}
else{
    console.log("beide getallen zijn gelijk")
}

process.exit();