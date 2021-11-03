export default function stringNaarNummer(string) {
	if (string === 'geen' | string === 'thuis' | string === 'niet' | string === "" | string === "geenidee" | string === "ikbenlactoseintolerant,gaweg") { 
		return 'geen data'; // lege en onbruikbare waarden wordt als geen data gelabeld
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
		return string; // Als de string niet aan deze statements voldoet, wordt de originele waarde teruggekeerd.
	}
}