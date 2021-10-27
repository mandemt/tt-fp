const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser


let dataset = require('./tt-dataset.json')
app.use(express.static('static')) // nu worden er static files opgevraagd vanuit een andere map.
app.set('view engine', 'ejs') // instellen voor view engine
let ejs = require('ejs');

var vragen = Object.keys(dataset[1]) // Script gaat over alle vraagelementen uit het JSON bestand.
var antwoorden = Object.values(dataset[1])

var hallo = Object.keys(dataset[1])
// console.log(hallo)

dataset.forEach((element, index) => {
    var vragen = Object.values(dataset[index]) // Script gaat over alle vraagelementen uit het JSON bestand.
console.log(vragen)
    if (vragen[index] == 'Wat is je oogkleur?'){
        var oogkleurvraag = vragen[index]
        console.log(oogkleurvraag)
    //    console.log('ja') // Als de vraag tegenkomt , wordt ja gezegd.
    }
    else{
        var wrongQuestion = vragen[index]
        // console.log(wrongQuestion) // Als hij hem niet tegenkomt, wordt de vraag gezegd
    }
})
const cleanVariables = { b: 4, c: 5 };

app.get('/', (req,res) => {
	res.render('index',
    {vragen, antwoorden, dataset},
 )

})

app.listen(port, () =>{
	console.log('de app lusitert op localhost:', port)
})