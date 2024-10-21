import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function addVat(price, vat = 21){
    return(price * (1 + vat/100));
}

let price = parseFloat(await userInput.question('geef de prijs zonder btw.  '))
let vat = parseFloat(await userInput.question('geef de % vd BTW. '))



console.log(addVat(price,vat));       

process.exit();
