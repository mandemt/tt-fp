export default function verwijderSpaties(string) {
	if (typeof string === 'string') {
		return string.replace(/ |[^a-z,0-9]|/gi, ''); // woorden vallen achter elkaar doordat leestekens vervangen worden door -niets-
	}
	else {
		return string;
	}
}






