let dataset = require('./tt-dataset.json')

var hallo = Object.keys(dataset[1])
// console.log(hallo)

dataset.forEach((element, index) => {
    var vragen = Object.keys(dataset[index]) // Script gaat over alle vraagelementen uit het JSON bestand.
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


// const nouveau = Object.assign(cleanVariables, oud)
// console.log(nouveau)
// const newDataset = Object.assign(dataset[14][, cleanVariables);

// console.log(newDataset);
// expected output: Object { a: 1, b: 4, c: 5 }

// expected output: Object { a: 1, b: 4, c: 5 }


// dataset.forEach((x, i) => {
//     var nieuw = dataset[i].toString().replace(/\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')
//     dataset.push(nieuw)
// })
//     console.log(dataset)

    // dataset.forEach(values => {
    //     let doc = values.toString
    //     doc.replace(0, /\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')
    // }
    // )

    // function cleaning(dataset){
    //     dataset.forEach(x => {
    //         x.replace(0, /\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '');
    //     })
    // }

// cleaning("hallo daar")


// var datasetNoSpaces = dataset.replace(/\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')




// dataset.splice(0, /\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')
// console.log(dataset)
// //Dit zijn alle antwoorden op de vraag Wat is je favoriete soort huisdier?
// for (let i = 0; i < dataset.length; i++) {
//     newDataset.push(dataset[i]["Wat is je favoriete soort huisdier?"])
    // console.log(dataset[i]["Wat is je favoriete soort huisdier?"])
    
    // }



//     for (let i = 0; i < dataset.length; i++){
//     for( var key in dataset[i])
//     {
    
//         // woorden en leestekens, spaties worden vervangen door niets. Hierdoor worden de variabelen een lang woord zodat ze in ieder
//         //geval aangeroepen kunnen worden
//        var cleanedVariable = key.replace(/\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')
//        newDataset.push(cleanedVariable);

//     }
    
// }
// console.log(newDataset)
// dataset.forEach(value => {
//     // console.log(value)
// })


//     var newDataset = []

//     for (let i = 0; i < dataset.length; i++){
//         for( var key in dataset[i]){
    
//            var cleanedVariable = key.replace(/\s+|[^a-z0-9]|wat| wil|is|je|wil|welke|welk| op |als|/gi, '')
//             var cleanedValue = dataset[i]["Wat is je favoriete soort huisdier?"]
           
//            newDataset.push(cleanedVariable, cleanedValue);
    
//         }
//     }
//     var dataset = newDataset

// console.log(dataset)
