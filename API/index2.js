let apikey = 'N7PX59OF'

var request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=' + apikey)

request.onload = function() {
    var data = JSON.parse(this.response)

   console.log(data.artObject.colors)
}

request.send()


