const textInput = document.querySelector('input[type="text"]')
const submitInput = document.querySelector('input[type="submit"]')
submitInput.addEventListener('click', veranderWaarde)

function veranderWaarde() {
	let vraag = textInput.value;
	cleanData(vraag);
}

function cleanData(vraag) {
	fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
		.then(data => data.json())
		.then(data => {
			let oud = [];
			let array = [];

			data.map(data => {
				oud.push(data[vraag]);
				onbewerkt = verwijderSpaties(data[vraag]); // Onbewerkte antwoorden worden toegankelijkere waarden zonder spaties
				waarde = verwijderHoofdletters(onbewerkt); // waarden worden zonder hoofdletter voor meer consistentie
				volledig = voorkomDubbeleWaarden(waarde); // De verdiepingen worden vervangen door een getal. Ook wordt het type data Number.
				ultimate = stringNaarNummer(volledig);
				array.push(ultimate);
			})

			function sorteren(waarde1, waarde2) { // sort() werkt op alfabetische volgorde, dus 1  == 10 waardoor deze bij elkaar komen te staan
				if (waarde1 < waarde2) { // Nu zal de array data gezien worden als een getal en dus wel in volgorde worden gezet
					return -1;
				}
			}

			console.table(oud);
			console.table(array.sort(sorteren));
		})
}

function verwijderSpaties(string) {
	if (typeof string === 'string') {
		return string.replace(/ |[^a-z,0-9]|/gi, ''); // woorden vallen achter elkaar doordat leestekens vervangen worden door -niets-
	}
	else {
		return string;
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


function voorkomDubbeleWaarden(string) {
	if (typeof string === 'string') {
		if (string.indexOf('frontend') > -1 | string.indexOf('front-end') > -1) {
			return string.replace(string, 'frontender');
		}
		if (string.indexOf('design') > -1) {
			return string.replace(string, 'designer');
		}
		if (string === 'kerst') {
			return string.replace(string, '25 december');
		}
		else {
			return string;
		}
	}
	else {
		return string;
	}
}


function stringNaarNummer(string) {
	if (string === 'geen' | string === 'thuis' | string === 'niet' | string === "" | string === "geenidee" | string === "ikbenlactoseintolerant,gaweg") { // lege waarden wordt null
		return 'geen data';
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