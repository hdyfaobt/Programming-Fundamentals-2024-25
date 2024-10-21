function tConverter(temperatuur, isCelsius) {
    if (isCelsius) {
        let tempFahrenheit = (temperatuur * 9/5) + 32;
        console.log('De temperatuur in Fahrenheit is: ' + tempFahrenheit); 
    } else {
        let tempCelsius = (temperatuur - 32) * 5/9;
        console.log('De temperatuur in Celsius is: ' + tempCelsius); 
    }
}

tConverter(77, false);
tConverter(25,true);