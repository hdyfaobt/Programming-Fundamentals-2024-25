import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let tvSerie = await userInput.question('geef een tv serie?  ');

let locatie = 0;

switch(tvSerie){
    case 'Simpson':
        locatie = "Spingfield";
        break;
    case 'prisonbreak':
        locatie = "fox river";
        break;
    case 'naruto':
        locatie = "japan";
        break;
}
console.log(tvSerie +" vindt plaats in " + locatie);

process.exit();