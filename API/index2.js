const dinges = document.querySelector('input[type="checkbox"]')
dinges.addEventListener('input', veranderWaarde)

function veranderWaarde() {
   let id = dinges.value
   maakReq(id)
}

function maakReq(id) {
  

    const apikey = secret

var request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/' + id + '?key=' + apikey )

request.onload = function() {

let data = JSON.parse(request.response)
let kleuren = data.artObject.colors
console.log(kleuren)
let url = data.artObject.webImage.url
let titel = data.artObject.title
console.log(titel + ' ' + url)


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
