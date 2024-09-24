import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let taal = await userInput.question("Welke taal spreekt u ? NL //vous parlez quelle langue? FR //what language u speak? EN  ");

if (taal == "NL" || taal == "nl") {
    
    console.log("hallo, hoe kan ik u helpen? ")
}
else if (taal == "FR" || taal == "fr") {
    console.log("bonjour, comment puisje vous aidez?")
}
else if (taal == "EN" || taal == "en") {
    console.log("hello, how can i help u?")
}
else{
    console.log("undefiend language...")
}

process.exit();