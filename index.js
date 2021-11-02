cleanData()
function cleanData() {
	fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
		.then(data => data.json())
		.then(data => {

			return data.map(data => {
				let key = "Wat is je favoriete datum, maar nu in tekst!"
				onbewerkt = verwijderSpaties(data[key]); // Onbewerkte antwoorden worden toegankelijkere waarden zonder spaties
				waarde = verwijderHoofdletters(onbewerkt); // waarden worden zonder hoofdletter voor meer consistentie
				volledig = voorkomDubbeleWaarden(waarde); // De verdiepingen worden vervangen door een getal. Ook wordt het type data Number.
				ultimate = stringNaarNummer(volledig);
				console.log(ultimate)
			})
		})
}

function verwijderSpaties(string) {
if( key = "Wat is je favoriete datum, maar nu in tekst!"){
	return string
}
 else   { 
		return string.replace(/ |[.]|/gi, ''); // woorden vallen achter elkaar doordat leestekens vervangen worden door -niets-
	}
	
	
}

function verwijderHoofdletters(string) {
	if (typeof string === 'string') {

		return string.toLowerCase();
	}

	else {
		return string;
	}

}






function stringNaarNummer(string) {

	if (string === 'geen' | string === 'thuis' | string === 'niet' | string === "" | string === "geenidee" ) { // lege waarden wordt null
		return 'geen data'
	}
	if (string === 'eerste') { // oplossen synoniemen en variaties voor 1
		string = string.replace(string, 1); // Het synoniem wordt vervangen door de content 3
		return Number(string);	// het datatype gaat van string naar Number
	}
	if (string === '2deverdieping' | string === 'medialounge') {
		string = string.replace(string, 2);
		return Number(string);
	}
	if (string === '3everdieping' | string === '3e' | string === 'debovenste') {
		string = string.replace(string, 3);
		return Number(string);
	}
	else {
		return string;
	}



}



function voorkomDubbeleWaarden(string) {
	if(typeof string === 'string'){
	if (string.indexOf('frontend') > -1 | string.indexOf('front-end') > -1) {
		return string.replace(string, 'frontender');
	}
	if (string.indexOf('design') > -1) {
		return string.replace(string, 'designer')
	}
	if(key === "Wat is je favoriete datum, maar nu in tekst!") {
		return string
	}
	else {
		return string.replace(/[^a-z,0-9]|  /gi, '');
	}
}	
}