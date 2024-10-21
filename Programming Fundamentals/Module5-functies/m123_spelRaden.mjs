import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

let randomGetal = random(1,10);

let levens = 3;

let getal = parseInt(await userInput.question('probeer een getal te raden tussen 1 en 10    '));

while (levens>0) {

  

    if (getal >randomGetal) {
        console.log('prober een LAGER getal, je hebt nog ' + levens + ' levens over');
        levens--;
        getal = await userInput.question('probeer opnieuw    ');
       
    }
    else if (getal< randomGetal) {
        console.log('probeer een HOGER getal, je hebt nog ' + levens + ' levens over');
        levens--;
        getal = await userInput.question('probeer opnieuw    ');
        
    }
    else{
        console.log(' proficiat je hebt juist geraden.');
        process.exit();
    }

if (levens === 0) {
    console.error('je hebt geen levens meer... het getal was '+ randomGetal);
    process.exit();
}


}

