export default function verwijderHoofdletters(string) {
	if (typeof string === 'string') { // als er letters in het antwoord voorkomen
		return string.toLowerCase(); // alle hoofdletters laten verdwijnen
	}
	else {
		return string; // anders normale antwoord meenemen
	}
}