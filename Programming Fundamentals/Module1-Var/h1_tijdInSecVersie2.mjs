import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//var declareren
//dagen
let tijd = parseFloat(await userInput.question("geef het aantal dagen in... "));
let seconden = tijd * 86400;


//var hergebruiken zonder let en met += 
//uur
tijd = parseFloat(await userInput.question("geef het aantal uren in... "));
seconden += (tijd*3600);

//minuten
tijd = parseFloat(await userInput.question("geef het aantal minuten in... "));
seconden += (tijd*60);

//seconden
tijd = parseFloat(await userInput.question("geef het aantal seconden in... "));
seconden += tijd;


console.log(seconden)

process.exit();