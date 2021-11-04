import zoekFilter from '/API/modules/zoekfilter.js'; // module met de zoekfilter functie wordt geimporteerd
const stuurButton = document.querySelector('input[type="submit"]') ;// de verzendknop 
stuurButton.addEventListener('click', zoekFilter); // als de vraag wordt verzonden wordt de functie uitgevoerd



