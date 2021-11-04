export default function zoekFilter() { // deze functie wordt als module geexporteerd
    const invulveld = document.querySelector('input[type="text"]') // Dit is het invulveld waar je de schilder invult.
    let id = invulveld.value // Het id, ookwel schilder is de waarde die in invulveld wordt ingevuld.
    if (id == "vincent van gogh") { // Hoofdlettergevoeligheid tegengaan
        id = "Vincent van Gogh";
    }
    if (id == "rembrandt van rijn") {
        id = "Rembrandt van Rijn";
    }
    if (id == "piet mondriaan") {
        id = "Piet Mondriaan";
    }
    else { // Anders gewoon de normale schilder terugkeren
        id = invulveld.value;
    }
    maakRequest(id) // Voer de functie om de aanvraag op de API uit te voeren uit de module.
}

import maakRequest from '/API/modules/gebruikdata.js'
