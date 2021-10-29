function doeWat() {
fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
.then(data => data.json())
.then(data => {
	return data.map(data => {	
		woord = removeSpaces(data[vulin.value]);
		variabele = removeCapitals(woord);
		volledig = changeStringToNumber(variabele);
		let lijst = document.createElement("li")
		lijst.textContent = volledig
		document.body.appendChild(lijst)

		
	})
})
}

// vulin.addEventListener('change',roepNaam )
let vulin = document.querySelector("input[type='text']")
let stuur = document.querySelector("input[type='submit']")
let tekst = document.querySelector("ul  ")
stuur.addEventListener('click', doeWat)
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

	function changeStringToNumber(string) {

		if(string === 'geen' | string === 'thuis' | string === 'niet') { // oplossen foute data
			return string.replace(string, 'no data')
		}	

		if( string ==='eerste') { // oplossen synoniemen en variaties voor 1
			string = string.replace(string, 1) // Het synoniem wordt vervangen door de content 3
			return Number(string)	// het datatype gaat van string naar Number
		}
		
		if(string === '2deverdieping' | string === 'medialounge'){ 
			string = string.replace(string, 2)
			return Number(string) 
		}

		if(string === '3everdieping' | string === '3e' | string === 'debovenste'){ 
			string = string.replace(string, 3) 
			return Number(string) 
		}

		else{
			return string;
		}	
		
	}
	

