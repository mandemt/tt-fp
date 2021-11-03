
export default function dataOpschonen(vraag) {
	fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
		.then(data => data.json()) // als dit gelukt is, zal het het opgehaalde bestand omzetten in een json type 
		.then(data => { // daarna wordt er iets met de data gedaan.

			let oud = []; // array wordt leeggemaakt om zo niet bij elke submit de array groter te maken
			let cleanedData = [];

			data.map(data => { // maakt nieuwe array die ook met huidige data erin
				oud.push(data[vraag]); // de data uit deze array wordt in de oude array gezet 
				// dit zijn alle filters waar de antwoorden doorheen gaan
				data[vraag] = verwijderSpaties(data[vraag]); // Onbewerkte antwoorden worden toegankelijkere waarden zonder spaties
				data[vraag] = verwijderHoofdletters(data[vraag]); // waarden worden zonder hoofdletter voor meer consistentie
				data[vraag] = voorkomDubbeleWaarden(data[vraag]); // De verdiepingen worden vervangen door een getal. Ook wordt het type data Number.
				data[vraag] = stringNaarNummer(data[vraag]); // verdieping namen worden van string naar Number omgezet. 

				cleanedData.push(data[vraag]); // De opgeschoonde data gaat in de nieuwe array
			})



			console.table(oud); // oude data wordt in de console als tabel weergegeven
			console.table(cleanedData.sort(sorteren)); // de opgeschoonde data wordt gesorteerd in de console als tabel weergegeven
		})
}


import verwijderSpaties from '/modules/verwijderspaties.js' // verwijderen spaties
import verwijderHoofdletters from '/modules/verwijderhoofdletters.js' // verwijderen hoofdletters
import voorkomDubbeleWaarden from '/modules/dubbelewaarden.js' // overeenkomende woorden tot 1 waarde omzetten
import stringNaarNummer from '/modules/stringnaarnummer.js' //  string type wordt Number
import sorteren from '/modules/fixsorteren.js' // De getallen van 1-10 kunnen normaal niet worden gesorteerd doordat er default op alfabet wordt gesorteerd.