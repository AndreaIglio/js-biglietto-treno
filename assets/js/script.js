

// Quanti km che si vogliono percorrere

var kmPassenger = Number(prompt("Quanti km vuoi percorrere?"));

// Quanti anni hai?

var etaPassenger = Number(prompt("Quanti anni hai?"));

// final price calc

var ticketPrice = kmPassenger * 0.21;

// final price underage

var ticketPriceUnderage = ticketPrice - (ticketPrice * (20/100));

// final price over65

var ticketPriceOver65 = ticketPrice - (ticketPrice * (40/100));

document.getElementById('ticketprice').innerHTML = ticketPrice;

// Discount minorenni/over65

if (etaPassenger < 18)  {

document.getElementById('ticketprice').innerHTML = ticketPriceUnderage

}

else if (etaPassenger >= 65) {
    document.getElementById('ticketprice').innerHTML = ticketPriceOver65
}