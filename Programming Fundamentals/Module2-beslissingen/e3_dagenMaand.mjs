import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('geef een maand...     ');

let aantalDagen = 0;

switch (maand) {

    case "januari":
        aantalDagen = "31";
    break;

    case "februari":
        aantalDagen = "28 of 29";
        break;
        
    case "maart":
        aantalDagen = "31";
        break;
        
    case "april":
        aantalDagen = "30";
        break;
        
    case "mei":
        aantalDagen = "31";
        break;
        
    case "juni":
        aantalDagen = "30";
        break;
        
    case "juli":
        aantalDagen = "31";
        break;
        
    case "augustus":
        aantalDagen = "31";
        break;
        
    case "september":
        aantalDagen = "30";
        break;

        
    case "oktober":
        aantalDagen = "31";
        break;
        
    case "november":
        aantalDagen = "30";
        break;
        
    case "december":
        aantalDagen = "31";
        break;
}

console.log('in maand '+ maand + ' zijn '+ aantalDagen + ' aantal dagen.');

process.exit();