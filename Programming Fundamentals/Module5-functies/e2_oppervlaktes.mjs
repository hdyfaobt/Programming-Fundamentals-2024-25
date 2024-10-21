function oppCirkel(straal, pi = Math.PI) {
    let oppervlakteO = straal*straal*pi;
    console.log(' de oppervlakte van de cirkel is ' + oppervlakteO);
}

function oppDriehoek(basis,hoogte) {
    let oppervlakte3 = (basis*hoogte)/2 ;
    console.log('de oppervlakte van de driehoek is ' + oppervlakte3);
}

function oppVierhoek(zijde1,zijde2 =  zijde1) {
    let oppervlakte4 = zijde1 * zijde2;
    console.log('de oppervlakte van deze vierhoek is ' + oppervlakte4);
}


oppCirkel(3);
oppDriehoek(5,3);
oppVierhoek(4,2);
oppVierhoek(5);