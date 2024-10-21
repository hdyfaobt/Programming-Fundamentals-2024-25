import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


    let serie = await userInput.question('vul een tv-serie in. ');
    let locatie = 0;

    switch (serie) {

        case "simpson":
            locatie = "Springfield";
        break;

        case "prisonbreak":
            locatie = "fox river";
        break;
      
    }










console.log('je tv-serie ' + serie + 'speelt zich af in ' + locatie);

process.exit();