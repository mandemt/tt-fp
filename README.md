## Opschonen van lokale en API data met mandemtable-cleaner
<img src="https://github.com/mandemt/tt-fp/blob/main/images/readme-img1.png"> </img>

### Introductie
mandemtable-cleaner is een tool waarmee je lokale data en data van de RijksData API kunt opschonen en specificeren. De waarden zullen overzichtelijker overkomen en weer gebruikt kunnen worden voor het presenteren van duidelijkere data.

De tool bevat aparte code voor het opschonen van lokale JSON data en API data. Je kunt zelf kiezen welke lokale data je gebruikt. De API is van het Rijksmuseum.

### Installeren

clone deze repository met github Desktop of via de terminal in de folder waar je de repository wilt hebben.:

```terminal
git clone https://github.com/mandemt/tt-fp.git
```
Je kunt niet zomaar het index.html bestand in de browser runnen. Het is aanbevolen om het via een lokale server uit te voeren.

Je kunt het via express renderen en uitvoeren in de browser, of via MAMP. 
Met MAMP hoef je alleen het programma te installeren en uit te kiezen vanaf waar de server gaat runnen.
Daarna zal de server alleen voor jou zichtbaar zijn op een localhost:port naar keuze.

Download MAMP: https://www.mamp.info/en/downloads/

Er zijn twee webpagina' s waarop je de tool kunst testen. De resultaten van het opschonen zal zichtbaar worden in de console (via element inspecteren>Console)
Lees ook de documentatie in mijn wiki als je wilt weten welke functies waarvoor zijn!

* Lokale data opschonen: De index van je lokale server. 
> <img src="https://github.com/mandemt/tt-fp/blob/main/images/webpage.png" width="50%"></img>
De betreffende database genaamd `tt-dataset.json` is meegekloond met de rest van de repository. Je kunt je eigen toevoegen door in `dataopschonen.js` in de fetch link de naam te veranderen naar de naam van jouw dataset, of simpelweg de content in `tt-dataset.json` te vervangen door jouw data.

Test een vraag in het invoerveld en kijk in de console welke waarden je terugkrijgt. Je hoort de ruwe data eerst te krijgen, daarna de opgeschoonde data.

 

* API data opschonen: `localhost:port/API/index2.js`
> <img src="https://github.com/mandemt/tt-fp/blob/main/images/webpage2.png" width="20%" ></img>

Met deze methode haal je een dataset van het internet af. Zorg dus dat je een internetverbinding hebt.

Je zult moeten verbinden met de API van het rijksmuseum. Dit gebeurt vanzelf in  `gebruikdata.js`. Echter heb je een *key* nodig om toegang te krijgen tot de API. 
Dit is gratis en heel gemakkelijk te doen met een account van het rijksmuseum op https://www.rijksmuseum.nl/en/rijksstudio en bij geavanceerde instellingen een API op te vragen. Je krijgt dan een e-mail met deze code.

Vervolgens maak je een nieuw bestand aan, genaamd `apikey.js` dit is een verborgen bestand voor git. In dit bestand zet je de api key als volgt neer:

```js
export let API_KEY = 'jouw key' 

```



De key wordt dan automatisch opgehaald door het `dataopschonen.js` bestand en krijgt dan officieel toegang to de API.

Ook hier kun je een schilder invullen en krijg je de opgeschoonde data terug in de console.


Voor meer informatie

* documentatie & bronnen:
* Tech Track uitleg en opdracht: https://github.com/cmda-tt
* RijksData API documentatie: https://data.rijksmuseum.nl/object-metadata/api/
* Hogeschool van amsterdam

mandemt






