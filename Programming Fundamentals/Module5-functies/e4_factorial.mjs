function factorial(factor) {
   
   if (factor<1) {
        console.error('het getal moet groter zijn als 1')
   }

   let resultaat =1;
   for (let i = 1; i<=factor; i++){
    resultaat *=i;   
   }
   console.log('het factorial van '+ factor + ' is ' + resultaat);
}

factorial(5);