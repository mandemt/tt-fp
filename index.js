fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
.then(data => data.json())
.then(data => {
	return data.map(data => {	
		// console.log(data['Wat is je oogkleur?'])
		woord = removeSpaces(data['Op welke verdieping van het TTH studeer je het liefst?']);
		variabele = removeCapitals(woord);
		volledig = removeEmptyValues(variabele);
		console.log(volledig)
	})
})

	function removeSpaces(string) {	
		if(typeof string === 'string'){
			return string.replace(/ |[.]|/gi, '');
		}
		else{
			return string
		}

	}

	function removeCapitals(string) {	

		if(typeof string === 'string'){
			
			return string.toLowerCase();
		}
		else{
			return string
		}

	}

	function removeEmptyValues(string) {

		if(string === 'geen' | string === 'thuis' | string === 'niet') {
			return string.replace(string, 'no data')
		}		
		if(string === '3everdieping' | string === '3e'){
		return string.replace(string, 3) // moet nog van string naar number gaan
		
		
		}
		if(string === '2deverdieping' | string === 'medialounge'){
			return string.replace(string,2) // moet nog van string naar number gaan
		}
		else{
			return string;
		}	
		
	}
	

