import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let day = await userInput.question('geef een dag in?  ');

let locatie = 0;

switch(day){
    case 'maandag':
        locatie = "weekdag";
        break;
    case 'dinsdag':
        locatie = "weekdag";
        break;
    case 'woensdag':
        locatie = "weekdag";
        break;
        case 'donderdag':
        locatie = "weekdag";
        break;
    case 'vrijdag':
        locatie = "weekdag";
        break;

        case 'zaterdag':
        locatie = "weekend dag";
        break;
    case 'zondag':
        locatie = "weekend dag";
        break;
}
console.log(day +" is een " + locatie);



let num1 = await userInput.question('geef een nummer in?  ');
let num2 = await userInput.question('geef een nummer in?  ');

process.exit();