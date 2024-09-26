import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let antwoord = '';
let punten = 0;

// Vraag 1: Hoofdstad van Frankrijk
antwoord = await userInput.question('1. Wat is de hoofdstad van Frankrijk?    ');
if (antwoord.toLowerCase() === 'parijs') {
    console.log('Proficiat, dit is het juiste antwoord. +1');
    punten++;
    console.log('U hebt momenteel ' + punten + '/5');
} else {
    console.log('Spijtig, dit is niet het juiste antwoord...');
    console.log('U hebt momenteel ' + punten + '/5');
}

console.log('') //witregel

// Vraag 2: 3+3
antwoord = await userInput.question('Hoeveel is 3 + 3?   ');
if (parseInt(antwoord) === 6) {  // Gebruik `parseInt` om het antwoord naar een getal te converteren
    console.log('Proficiat, dit is het juiste antwoord. +1');
    punten++;
    console.log('U hebt momenteel ' + punten + '/5');
} else {
    console.log('Spijtig, dit is niet het juiste antwoord...');
    console.log('U hebt momenteel ' + punten + '/5');
}

console.log('') //witregel

// Vraag 3: Kleur van gras
antwoord = await userInput.question('Welke kleur is gras?  ');
if (antwoord.toLowerCase() === 'groen') {  // Haakjes toegevoegd bij `toLowerCase()`
    console.log('Proficiat, dit is het juiste antwoord. +1');
    punten++;
    console.log('U hebt momenteel ' + punten + '/5');
} else {
    console.log('Spijtig, dit is niet het juiste antwoord...');
    console.log('U hebt momenteel ' + punten + '/5');
}

console.log('') //witregel

// Vraag 4: welke ploeg heeft het meeste champions league?
antwoord = await userInput.question('welke ploeg heeft het meeste champions league?  ');
if (antwoord.toLowerCase() === 'real madrid') {  // Haakjes toegevoegd bij `toLowerCase()`
    console.log('Proficiat, dit is het juiste antwoord. +1');
    punten++;
    console.log('U hebt momenteel ' + punten + '/5');
} else {
    console.log('Spijtig, dit is niet het juiste antwoord...');
    console.log('U hebt momenteel ' + punten + '/5');
}

console.log('') //witregel

// Vraag 5: welke ploeg heeft Messi Prime gekent?
antwoord = await userInput.question('welke ploeg heeft Messi Prime gekent?  ');
if (antwoord.toLowerCase() === 'barcelona' || antwoord.toLowerCase() ==='fc barcelona') {  // Haakjes toegevoegd bij `toLowerCase()`
    console.log('Proficiat, dit is het juiste antwoord. +1');
    punten++;
    console.log('') //witregel
    console.log('U hebt uitijndelijk ' + punten + '/5');
} else {
    console.log('Spijtig, dit is niet het juiste antwoord...');
    console.log('') //witregel
    console.log('U hebt uitijndelijk ' + punten + '/5   !!');
}



process.exit();
