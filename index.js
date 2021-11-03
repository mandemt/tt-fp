import  dataOpschonen from '/modules/dataopschonen.js' // De functie om alle data op te schonen  mbv onderstaande functies

const textInput = document.querySelector('input[type="text"]'); // invoerveld
const submitInput = document.querySelector('input[type="submit"]'); // verstuur knop
submitInput.addEventListener('click', veranderWaarde); // als deze knop wordt ingedrukt wordt functie veranderWaarde uitgevoerd

function veranderWaarde() {
	let vraag = textInput.value; // de variabele vraag wordt vervangen door de vraag die in het invoerveld wordt ingevuld
	dataOpschonen(vraag); // de vraag wordt gebruikt in de functie dataOpschonen
}



