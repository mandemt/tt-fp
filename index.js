
function doeWat() {
fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
.then(data => data.json())
.then(data => {
	return data.map(data => {	
		woord = removeSpaces(data[vulin.value]);
		variabele = removeCapitals(woord);
		volledig = changeStringToNumber(variabele);
	
console.log(volledig)

		// if(volledig === 'blauw'){
		// 	blauw.push(volledig)
		// }
		// if(volledig === 'bruin'){
		// 	bruin.push(volledig)
		// }
		// else{
		// 	anders.push(volledig)
		// }
	})

		
	})

}


// vulin.addEventListener('change',roepNaam )
stuur.onclick = doeWat


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
	

