import { API_KEY } from '/API/apikey.js' // De verborgen api key is vanuit een in git verborgen bestand gehaald.
export default function maakRequest(id) { //  maakRequest wordt als module geexporteerd.
    const apikey = API_KEY // Verborgen key
    let request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd 
    request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/?key=' + apikey + '&involvedMaker=' + id) // De link naar de API. Een verschillend id zorgt voor andere resultaten.
    request.onload = function () { // Als het request wordt uitgevoerd zal deze anonieme functie worden uitgevoerd.
        let ruweData = []; // Array voor de onbewerkte data
        let schoneData = []; // Array voor opsgeschoonde data
        let data = JSON.parse(request.response); // string uit de API wordt omgezet als JS object
        let kunstwerken = data.artObjects; // Ik haal de specifieke variabele uit de kunstenaar uit id.

        kunstwerken.forEach(kunstwerk => { // Er wordt over alle (10) kunstwerken heengegaan
            let titel = kunstwerk.title; // titel wordt beschreven
            let locatie = kunstwerk.productionPlaces; // Waar het schilderij is geschreven
            let afbeelding = kunstwerk.webImage; // De afbeelding en eigenschappen
            ruweData.push(titel, locatie); // De onbewerkte data wordt aan de array toegevoegd
            if (locatie.length <= 0) { // Als er geen locatie is
                locatie = ["Niet bekend"]; // Verander deze waarde naar 'niet bekend'
            }
            if (afbeelding == null) { // Als er geen afbeelding beschikbaar is 
                afbeelding = "geen afbeelding"; // Verander deze waarde naar 'geen afbeelding'
            }
            else {
                afbeelding = kunstwerk.webImage.url; // Anders wordt de URL van de afbeelding teruggekeerd
            }

            schoneData.push({ "Titel:": titel, "Locatie geschidlerd": locatie[0], "Afbeelding Link": afbeelding }); // De opsgeschoonde data wordt naar de nieuwe array gestuurd.

        })
        console.table(ruweData); // in de console komt nu een overzicht van de oude data en nieuwe data.
        console.table(schoneData);
    }
console.log('hallo')

    request.send(); // De aanvraag wordt verstuurd.
}