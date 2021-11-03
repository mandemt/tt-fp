
export default function voorkomDubbeleWaarden(string) {
	if (typeof string === 'string') { // als er woorden in de antwoorden voorkomen
		if (string.indexOf('frontend') > -1 | string.indexOf('front-end') > -1) { // als deze samenstelling van letters voorkomt in het antwoord
			return string.replace(string, 'frontender'); // vervang deze term door beroep: frontender
		}
		if (string.indexOf('design') > -1) {
			return string.replace(string, 'designer');
		}
		if (string === 'kerst') { // Als deze datum wordt geantwoord
			return string.replace(string, 'vijfentwintig december'); // verander het naar 25 december
		}
		if (string === 'vandaag') { // als het antwoord 'vandaag' is
			let vandaag = new Date() // vandaag wordt een nieuwe datum
			let maanden = ["januari", "februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"] // maanden array om voluit de maanden te kunnen weergeven
			return (vandaag.getDay() + " " + maanden[vandaag.getMonth()] + " " + vandaag.getFullYear()) // combinatie van de dagen + maand en jaar
		}
		else {
			return string;
		}
	}
	else {
		return string; // als het geen string is de normale antwoorden uit vorige filter terugkeren
	}
}
