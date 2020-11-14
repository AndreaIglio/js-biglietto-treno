// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// Quanti km che si vogliono percorrere

var kmPassenger = Number(prompt("Quanti km vuoi percorrere?"));

// Quanti anni hai?

var etaPassenger = Number(prompt("Quanti anni hai?"));

//  prezzo al km

var kmPrice = 0.21;

// final price calc

var ticketPrice = kmPassenger * kmPrice;
console.log(ticketPrice);

// discount underage

var discountUnder = ticketPrice * 0.2;
console.log(discountUnder);

// discount over65

var discountOver65 = ticketPrice * 0.4;
console.log(discountOver65);

var finalPrice;

// Prezzo finale over/under

if (etaPassenger < 18)  {

finalPrice = ticketPrice - discountUnder;
console.log(finalPrice);

}

else if (etaPassenger >= 65) {

finalPrice = ticketPrice - discountOver65;
console.log(finalPrice);
}

else {
    finalPrice = ticketPrice;
    console.log(finalPrice);
}


document.getElementById('ticketprice').innerHTML = "Gentile cliente Il prezzo pieno del suo biglietto ammonta a " + ticketPrice.toFixed(2) + "&euro;";
document.getElementById('ticketfinalprice').innerHTML = "Il prezzo del suo biglietto scontato ammonta a " + finalPrice.toFixed(2) + "&euro;";