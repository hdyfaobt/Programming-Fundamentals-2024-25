import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*
let kopkoffie = parseFloat(await userInput.question('hvl koefioes drink je per dag      '));

let koffiejaar= kopkoffie * 365;


console.log("je drinkt gem "+ koffiejaar + " kopen kofie per jaar.")

if (koffiejaar<365) {
    console.log("je drinkt geen quasi geen koffie")
}
else if (koffiejaar==365) {
    console.log("je drinkt een kop koffie per dag dat is een goede gemmidelde")
}
else if (koffiejaar>365>730) {
    console.log("je drinkt veel koffie")
}
else if (koffiejaar > 730) {
    console.log("je drinkt teveel koffie")

}
*/

/*
let gradenCelcius = parseFloat(await userInput.question("geef een temperatuur in graden celcius. "));
let gradenFarenheit =  (gradenCelcius * 9 / 5) + 32;


console.log("de temperatuur " + gradenCelcius + "°C komt overeen met " + gradenFarenheit + "°F.")


process.exit();
*/

let getal1 = parseFloat( await userInput.question("geef een eerste getal..."));
let getal2 = parseFloat( await userInput.question("geef een tweede getal..."));
let getal3 = parseFloat( await userInput.question("geef een derde getal..."));
let getal4 = parseFloat( await userInput.question("geef een vierde getal..."));

let gemmidelde= (getal1+getal2+getal3+getal4)/4;

console.log("het gemmiddlede daarvan is " + gemmidelde )

process.exit();