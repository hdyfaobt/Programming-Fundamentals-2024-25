import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('geef een getal in...  '));

if (getal1 %2 == 0) {
    console.log('het getal is even')
}
else{
    console.log('u getal is oneven')
}
process.exit();