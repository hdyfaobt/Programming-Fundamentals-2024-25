import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let artiest = await userInput.question('geef een artiest, kies uit jul, naps, indila, ouidad.     ');
let song = 0;


if (artiest == 'jul') {
    song = 'paranoia'
}
else if (artiest == 'naps') {
    song = ' danses des bandits'
}
else if (artiest == 'indila') {
    song = 'tourne dans le vide '
}
else if (artiest == 'ouidad') {
    song = 'casa'
}
else{
    console.log('de artiest die u koos is niet in mijn lijst sorry')
    process.exit();
}

console.log('de artiest die u koos, ' + artiest + ' interpreteert nl. '+ song);
process.exit();