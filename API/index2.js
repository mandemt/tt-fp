const dinges = document.querySelector('input[type="text"]')
dinges.addEventListener('input', veranderWaarde)

function veranderWaarde() {
   let id = dinges.value
   maakReq(id)
}

function maakReq(id) {
  


var request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/' + id + '?key=' + apikey )

request.onload = function() {

let data = JSON.parse(request.response)
let kleuren = data.artObject.colors
let titel = data.artObject.title
console.log(titel)


if (request.status >= 200 && request.status < 400) {
kleuren.forEach((kleur, index) => {
    let lijst = document.getElementById(index)
    lijst.style.backgroundColor = kleur.hex
    
    
})
}
else{
    console.log('dit kunstwerk bestaat niet!')
}
let naam = document.getElementsByClassName('hallo')
}
request.send()
    }
