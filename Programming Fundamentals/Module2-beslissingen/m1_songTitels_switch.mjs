import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest= await userInput.question('geef een artiest, kies uit jul, naps, indila, ouidad.     ');
let song=0;


switch (artiest) {
    case 'jul':
        song= 'paranoia'
        break;

    case 'naps':
        song = 'danses des bandits'
        break;

    case 'indila':
        song= 'tourne dans le vide'
        break;

    case 'ouidad':
        song= 'casa'
        break;
}

console.log('de artiest die u koos, ' + artiest + ' interpreteert nl. '+ song);

process.exit();