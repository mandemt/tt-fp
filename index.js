fetch('http://localhost:8888/tt-dataset.json') // laadt het JSON bestand in
.then(data => data.json())
.then(data => {
	return data.map(obj => {
		Object.keys(obj).forEach(key => {
			obj[key] = removeSpaces(obj[key]);
			obj[key] = removeCapitals(obj[key]);
			obj[key] = removeEmptyValues(obj[key])
			obj[key] = bekijkAlles(obj[key])

		})
	})
})

	function removeSpaces(string) {	
		if(typeof string === 'string'){
			return string.replace(/ /gi, '');
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
		// console.log(string)
		if(string.length == 0 || string === 'geenidee' || string === 'maaktmijnietuit'){
			return string.replace(string, 'no data')
		}		
		else{
			return string;
		}
		
	}
	
	function bekijkAlles(string){
		console.log(string)
	}