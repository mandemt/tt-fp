let vulin = 'BK-1977-67'
let invulform = document.querySelector('input[type="text"]')
var antwoord = invulform.value
var request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/?key=' + apikey + '&involvedMaker=' + antwoord )

request.onload = function() {
    var data = JSON.parse(request.response)
console.log(data)
   const kunst = data.artObjects
   kunst.forEach (kunst => {
       console.table(kunst.title +' ' + kunst.webImage.url + ' id:' + kunst.id)
   })

      

  
}

request.send()


