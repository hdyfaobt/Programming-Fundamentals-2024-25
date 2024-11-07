import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let aantalArtikkel = 0;
let randomNumber = Math.floor(Math.random() * (20 - 3 + 1)) + 3;


while (aantalArtikkel < 3 || aantalArtikkel > 20) {
    aantalArtikkel = parseFloat(await userInput.question('Hoe groot is de geschenkmand? (3-20): '));

    if (aantalArtikkel >= 3 && aantalArtikkel <= 20) {
        console.log('Aantal artikelen is correct.       random generator (voor een geschenk) ' + randomNumber);
        if (aantalArtikkel==randomNumber) {
            console.log('PTOFICIAT JE HEBT EEN GESCHENK GEWONNEN!')
        } else{
            console.log('je hebt spijtig niets gewonnen.');
        }


    } else {
        console.log('Aantal artikelen is NIET correct. Probeer opnieuw.');
    }
}

async function vulGeschenkmand(aantal) {
    let geschenkmand = []; 

    while (geschenkmand.length < aantal) { 
        let keuze = await userInput.question('Welk geschenk kies je ? (keuze: W,B,F): ');

        if (keuze === 'W' || keuze === 'B' || keuze === 'F') {
            geschenkmand.push(keuze); 
            console.log('Artikel toegevoegd:' + keuze);
        } else {
            console.log('Foutieve invoer, probeer opnieuw...'); 
        }
    }

    return geschenkmand; 
}


async function berekenTotaal(geschenkmand) {
    const prijzen = {'W':10,'B':2,'F':3  }
    let totaal= 0;
    for (let item of geschenkmand) {
        totaal += prijzen[item];
    }
    return totaal;
}


async function berekenTotaalBTW(geschenkmand) {
    const prijzen = {'W':10,'B':2,'F':3  }
    const btw = { 'W': 0.21, 'B': 0.06, 'F': 0.12}
    let totaalMetBTW= 0;
    for (let item of geschenkmand) {
        totaalMetBTW += prijzen[item] * (1+ btw[item]) ;
    }
    return totaalMetBTW;
}

const geschenkmand = await vulGeschenkmand(aantalArtikkel);
console.log('Geschenkmand gevuld:', geschenkmand);




const totaal = await berekenTotaal(geschenkmand);
console.log('De waarde van je mand is: ' + totaal+ ' Euro.');


const totaalMetBTW = await berekenTotaalBTW(geschenkmand);
console.log('De waarde van je mand  MET BTW is: ' + totaalMetBTW.toFixed(2)+ ' Euro.');



process.exit();