
var App = {
    "parken":{},
    "init":function(){
        var self = this;
        
        var url = "/data/parken.json";
        self.loadJson(url);
    },
    "loadJson":function(url){
        var results = Utils.getJSONByPromise(url);
        console.log("Results",results);
    }
};

document.addEventListener("DOMContentLoaded", function(){
   App.init();
});




var losloopweides = [ 
            {
                    Straat:"Azaleastraat",
                    Postcode:"9040.0",
                    Gemeente:"Gent",
                    Soort: "Losloopweide",
                    Huisnummer: "36",
                    Plaatsomschrijving:"T.h.v. Azaleastraat 36/Azaleapark (tegenover hondentoilet). Oppervlakte 180 m2."       
            },
            {
                Straat:"Dracenastraat",
                Postcode: "9000.0",
                Gemeente: "Gent",
                Soort: "Losloopweide",
                Huisnummer:"18",
                Plaatsomschrijving: "T.h.v. Dracenastraat 18/Hakkeneistraat (tegenover hondentoilet). Oppervlakte 1290 m2."
            },
            {
                Straat:"Europalaan",
                Postcode: "9000.0",
                Gemeente:"Gent",
                Soort: "Losloopweide",
                Huisnummer: "134",
                Plaatsomschrijving: "T.h.v. Europalaan 134 (aan hondenzwemplaats). Oppervlakte 1950 m2."       
            },
            {
                Straat:"Evarist De Buckstraat",
                Postcode:"9040.0",
                Gemeente:"Gent",
                Soort: "Losloopweide",
                Huisnummer: "9",
                Plaatsomschrijving:"T.h.v. Evarist De Buckstraat 9 (aan buurtpark, naast hondentoilet). Oppervlakte 180 m2."       
            },
            {
                Straat:"Wittekaproenenplein",
                Postcode: "9000.0",
                Gemeente: "Gent",
                Soort: "Losloopweide",
                Huisnummer:"3",
                Plaatsomschrijving: "T.h.v. Wittekaproenenplein 3/Gebroeders De Smetstraat (naast hondentoilet). Oppervlakte 470 m2."
            },
            {
                Straat:"Jan Samijnstraat",
                Postcode: "9000.0",
                Gemeente:"Gent",
                Soort: "Losloopweide",
                Huisnummer: "1",
                Plaatsomschrijving: "T.h.v. Jan Samijnstraat 1/Frederik Burvenichstraat (met hondentoilet). Oppervlakte 750 m2."       
            },
            {
                Straat:"Kriekerijstraat",
                Postcode:"9040.0",
                Gemeente:"Gent",
                Soort: "Losloopweide",
                Huisnummer: "48",
                Plaatsomschrijving:"T.h.v. Kriekerijstraat 48/Prettige Wildernis. Oppervlakte 3700 m2."       
            },
            {
                Straat:"Nieuwewandeling",
                Postcode: "9000.0",
                Gemeente: "Gent",
                Soort: "Losloopweide",
                Huisnummer:"90",
                Plaatsomschrijving: "T.h.v. Nieuwewandeling 90/Spinmolenplein (Groenevalleipark). Oppervlakte 785 m2."
            },
            {
                Straat:"Pauwstraat",
                Postcode: "9000.0",
                Gemeente:"Gent",
                Soort: "Losloopweide",
                Huisnummer: "3",
                Plaatsomschrijving: "T.h.v. Pauwstraat 3 (langs spoorweg, naast hondentoilet). Oppervlakte 400 m2."       
            }
        ]

var dogtoilets = [ 
            {
                    Straat:"Aloïs Joosstraat",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "106",
                    Plaatsomschrijving:"T.h.v. Aloïs Joosstraat 106-238/Guldenvliesstraat."       
            },
            {
                    Straat:"Batterijstraat",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "2",
                    Plaatsomschrijving:"T.h.v. Batterijstraat 2/Emilius Seghersplein 15."       
            },
            {
                    Straat:"Nekkersberglaan",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "282",
                    Plaatsomschrijving:"T.h.v. Nekkersberglaan 282-704/Belvédèreweg (naast zebrapad)."       
            },
            {
                    Straat:"Boerderijstraat",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "2",
                    Plaatsomschrijving:"T.h.v. Boerderijstraat 2."       
            },
            {
                    Straat:"Charles Andrieslaan",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "1",
                    Plaatsomschrijving:"T.h.v. Charles Andrieslaan 1 (aan zebrapad)."       
            },
            {
                    Straat:"Charles de l'Epéeplein",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "1",
                    Plaatsomschrijving:"T.h.v. Charles de l'Epéeplein 1-64/Appelstraat 17."       
            },
            {
                    Straat:"Dikkelindestraat",
                    Postcode:"9032",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "23",
                    Plaatsomschrijving:"T.h.v. Dikkelindestraat 23/Gentseaardeweg."       
            },
            {
                    Straat:"Driepikkelstraat",
                    Postcode:"9030",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "30",
                    Plaatsomschrijving:"T.h.v. Driepikkelstraat 30-32 (ingang Sportgebouw Bourgoyen)."       
            },
            {
                    Straat:"Duifhuisstraat",
                    Postcode:"9000",
                    Gemeente:"Gent",
                    Soort: "Dog toilet",
                    Huisnummer: "128",
                    Plaatsomschrijving:"T.h.v. Duifhuisstraat 128/Marathonstraat (naast zebrapad)."       
            }
        ]

var parken =[ 
            {
                    Sector:"Gent-Zuid",
                    Parknaam:"Muinkpark",
                    Speeltuin: "Yes",
                    Oppervlakte:"13127 square meters",
                    Lengte: "491 meters"     
            },
            {
                    Sector:"D.C. Gentbrugge",
                    Parknaam:"Frans Tochpark",
                    Speeltuin: "Yes",
                    Oppervlakte:"30362 square meters",
                    Lengte: "761 meters"     
            },
            {
                    Sector:"Gent-Astridpark",
                    Parknaam:"Keizerpark",
                    Speeltuin: "Yes",
                    Oppervlakte:"15345 square meters",
                    Lengte: "665 meters"     
            },
            {
                    Sector:"D.C. Ledeberg",
                    Parknaam:"Park De Vijvers",
                    Speeltuin: "Yes",
                    Oppervlakte:"46433 square meters",
                    Lengte: "1257 meters"     
            },
            {
                    Sector:"Nieuw Gent",
                    Parknaam:"Henri Storyplein",
                    Speeltuin: "No",
                    Oppervlakte:"56636 square meters",
                    Lengte: "1263 meters"     
            },
            {
                    Sector:"D.C. Zwijnaarde",
                    Parknaam:"Buurtpark Hekers",
                    Speeltuin: "No",
                    Oppervlakte:"9818 square meters",
                    Lengte: "570 meters"     
            },
            {
                    Sector:"Citadelpark",
                    Parknaam:"Paul de Smet De Naeyerplein",
                    Speeltuin: "No",
                    Oppervlakte:"22580 square meters",
                    Lengte: "1368 meters"     
            },
            {
                    Sector:"Gent-Zuid",
                    Parknaam:"Koning Albertpark",
                    Speeltuin: "Yes",
                    Oppervlakte:"36149 square meters",
                    Lengte: "2172 meters"     
            },
            {
                    Sector:"Gent-Astridpark",
                    Parknaam:"Sint-Annaplein",
                    Speeltuin: "No",
                    Oppervlakte:"3933 square meters",
                    Lengte: "250 meters"     
            }

]

document.getElementById("knopFreeRun").addEventListener("click", function(){
    alert("Hello World!");
});

function myFunctionFreerun() {
        /* weergeven bij drukken knop */
        document.getElementById("panel").style.display = "block";
        document.getElementById("panel_height").style.height = "auto";
        document.getElementById("knopGorun1").style.backgroundColor = "#FFD54F";
        document.getElementById("knopGorun2").style.backgroundColor = "#AAC0AE";
        document.getElementById("knopGorun3").style.backgroundColor = "#AAC0AE";
        /*veranderen titel*/
        document.getElementById("titelOption").innerHTML = "Losloopweides"
        /* veranderen titels van gegevens options */
            document.getElementById("sector").innerHTML  = 'Straat:';
            document.getElementById("sector1").innerHTML  = 'Straat:';
            document.getElementById("sector2").innerHTML  = 'Straat:';
            document.getElementById("sector3").innerHTML  = 'Straat:';
            document.getElementById("sector4").innerHTML  = 'Straat:';
            document.getElementById("sector5").innerHTML  = 'Straat:';
            document.getElementById("sector6").innerHTML  = 'Straat:';
            document.getElementById("sector7").innerHTML  = 'Straat:';
            document.getElementById("sector8").innerHTML  = 'Straat:';

            document.getElementById("parknaam").innerHTML  = 'Stad:';
            document.getElementById("parknaam1").innerHTML  = 'Stad:';
            document.getElementById("parknaam2").innerHTML  = 'Stad:';
            document.getElementById("parknaam3").innerHTML  = 'Stad:';
            document.getElementById("parknaam4").innerHTML  = 'Stad:';
            document.getElementById("parknaam5").innerHTML  = 'Stad:';
            document.getElementById("parknaam6").innerHTML  = 'Stad:';
            document.getElementById("parknaam7").innerHTML  = 'Stad:';
            document.getElementById("parknaam8").innerHTML  = 'Stad:';

            document.getElementById("speeltuin").innerHTML  = 'Soort:';
            document.getElementById("speeltuin1").innerHTML  = 'Soort:';
            document.getElementById("speeltuin2").innerHTML  = 'Soort:';
            document.getElementById("speeltuin3").innerHTML  = 'Soort:';
            document.getElementById("speeltuin4").innerHTML  = 'Soort:';
            document.getElementById("speeltuin5").innerHTML  = 'Soort:';
            document.getElementById("speeltuin6").innerHTML  = 'Soort:';
            document.getElementById("speeltuin7").innerHTML  = 'Soort:';
            document.getElementById("speeltuin8").innerHTML  = 'Soort:';

            document.getElementById("opp").innerHTML  = 'Nummer:';
            document.getElementById("opp1").innerHTML  = 'Nummer:';
            document.getElementById("opp2").innerHTML  = 'Nummer:';
            document.getElementById("opp3").innerHTML  = 'Nummer:';
            document.getElementById("opp4").innerHTML  = 'Nummer:';
            document.getElementById("opp5").innerHTML  = 'Nummer:';
            document.getElementById("opp6").innerHTML  = 'Nummer:';
            document.getElementById("opp7").innerHTML  = 'Nummer:';
            document.getElementById("opp8").innerHTML  = 'Nummer:';

            document.getElementById("lengte").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte1").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte2").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte3").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte4").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte5").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte6").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte7").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte8").innerHTML  = 'Beschrijving:';

            /* inladen gegevens */
            document.getElementById("straat_id").innerHTML = losloopweides[0].Straat;
            document.getElementById("gemeente_id").innerHTML = losloopweides[0].Gemeente;
            document.getElementById("soort_id").innerHTML = losloopweides[0].Soort;
            document.getElementById("hn_id").innerHTML = losloopweides[0].Huisnummer;
            document.getElementById("besch_id").innerHTML = losloopweides[0].Plaatsomschrijving;

            document.getElementById("straat_id1").innerHTML = losloopweides[1].Straat;
            document.getElementById("gemeente_id1").innerHTML = losloopweides[1].Gemeente;
            document.getElementById("soort_id1").innerHTML = losloopweides[1].Soort;
            document.getElementById("hn_id1").innerHTML = losloopweides[1].Huisnummer;
            document.getElementById("besch_id1").innerHTML = losloopweides[1].Plaatsomschrijving;

            document.getElementById("straat_id2").innerHTML = losloopweides[2].Straat;
            document.getElementById("gemeente_id2").innerHTML = losloopweides[2].Gemeente;
            document.getElementById("soort_id2").innerHTML = losloopweides[2].Soort;
            document.getElementById("hn_id2").innerHTML = losloopweides[2].Huisnummer;
            document.getElementById("besch_id2").innerHTML = losloopweides[2].Plaatsomschrijving;

            document.getElementById("straat_id3").innerHTML = losloopweides[3].Straat;
            document.getElementById("gemeente_id3").innerHTML = losloopweides[3].Gemeente;
            document.getElementById("soort_id3").innerHTML = losloopweides[3].Soort;
            document.getElementById("hn_id3").innerHTML = losloopweides[3].Huisnummer;
            document.getElementById("besch_id3").innerHTML = losloopweides[3].Plaatsomschrijving;

            document.getElementById("straat_id4").innerHTML = losloopweides[4].Straat;
            document.getElementById("gemeente_id4").innerHTML = losloopweides[4].Gemeente;
            document.getElementById("soort_id4").innerHTML = losloopweides[4].Soort;
            document.getElementById("hn_id4").innerHTML = losloopweides[4].Huisnummer;
            document.getElementById("besch_id4").innerHTML = losloopweides[4].Plaatsomschrijving;

            document.getElementById("straat_id5").innerHTML = losloopweides[5].Straat;
            document.getElementById("gemeente_id5").innerHTML = losloopweides[5].Gemeente;
            document.getElementById("soort_id5").innerHTML = losloopweides[5].Soort;
            document.getElementById("hn_id5").innerHTML = losloopweides[5].Huisnummer;
            document.getElementById("besch_id5").innerHTML = losloopweides[5].Plaatsomschrijving;

            document.getElementById("straat_id6").innerHTML = losloopweides[6].Straat;
            document.getElementById("gemeente_id6").innerHTML = losloopweides[6].Gemeente;
            document.getElementById("soort_id6").innerHTML = losloopweides[6].Soort;
            document.getElementById("hn_id6").innerHTML = losloopweides[6].Huisnummer;
            document.getElementById("besch_id6").innerHTML = losloopweides[6].Plaatsomschrijving;

            document.getElementById("straat_id7").innerHTML = losloopweides[7].Straat;
            document.getElementById("gemeente_id7").innerHTML = losloopweides[7].Gemeente;
            document.getElementById("soort_id7").innerHTML = losloopweides[7].Soort;
            document.getElementById("hn_id7").innerHTML = losloopweides[7].Huisnummer;
            document.getElementById("besch_id7").innerHTML = losloopweides[7].Plaatsomschrijving;

            document.getElementById("straat_id8").innerHTML = losloopweides[8].Straat;
            document.getElementById("gemeente_id8").innerHTML = losloopweides[8].Gemeente;
            document.getElementById("soort_id8").innerHTML = losloopweides[8].Soort;
            document.getElementById("hn_id8").innerHTML = losloopweides[8].Huisnummer;
            document.getElementById("besch_id8").innerHTML = losloopweides[8].Plaatsomschrijving;
}

function myFunctionDogtoilet(){
        /* weergeven bij drukken knop */
        document.getElementById("panel").style.display = "block";
        document.getElementById("panel_height").style.height = "auto";
        document.getElementById("knopGorun2").style.backgroundColor = "#FFD54F";
        document.getElementById("knopGorun3").style.backgroundColor = "#AAC0AE";
        document.getElementById("knopGorun1").style.backgroundColor = "#AAC0AE";
        /*veranderen titel*/
        document.getElementById("titelOption").innerHTML = "Hondentoiletten"
                /* veranderen titels van gegevens options */
            document.getElementById("sector").innerHTML  = 'Straat:';
            document.getElementById("sector1").innerHTML  = 'Straat:';
            document.getElementById("sector2").innerHTML  = 'Straat:';
            document.getElementById("sector3").innerHTML  = 'Straat:';
            document.getElementById("sector4").innerHTML  = 'Straat:';
            document.getElementById("sector5").innerHTML  = 'Straat:';
            document.getElementById("sector6").innerHTML  = 'Straat:';
            document.getElementById("sector7").innerHTML  = 'Straat:';
            document.getElementById("sector8").innerHTML  = 'Straat:';

            document.getElementById("parknaam").innerHTML  = 'Stad:';
            document.getElementById("parknaam1").innerHTML  = 'Stad:';
            document.getElementById("parknaam2").innerHTML  = 'Stad:';
            document.getElementById("parknaam3").innerHTML  = 'Stad:';
            document.getElementById("parknaam4").innerHTML  = 'Stad:';
            document.getElementById("parknaam5").innerHTML  = 'Stad:';
            document.getElementById("parknaam6").innerHTML  = 'Stad:';
            document.getElementById("parknaam7").innerHTML  = 'Stad:';
            document.getElementById("parknaam8").innerHTML  = 'Stad:';

            document.getElementById("speeltuin").innerHTML  = 'Soort:';
            document.getElementById("speeltuin1").innerHTML  = 'Soort:';
            document.getElementById("speeltuin2").innerHTML  = 'Soort:';
            document.getElementById("speeltuin3").innerHTML  = 'Soort:';
            document.getElementById("speeltuin4").innerHTML  = 'Soort:';
            document.getElementById("speeltuin5").innerHTML  = 'Soort:';
            document.getElementById("speeltuin6").innerHTML  = 'Soort:';
            document.getElementById("speeltuin7").innerHTML  = 'Soort:';
            document.getElementById("speeltuin8").innerHTML  = 'Soort:';

            document.getElementById("opp").innerHTML  = 'Nummer:';
            document.getElementById("opp1").innerHTML  = 'Nummer:';
            document.getElementById("opp2").innerHTML  = 'Nummer:';
            document.getElementById("opp3").innerHTML  = 'Nummer:';
            document.getElementById("opp4").innerHTML  = 'Nummer:';
            document.getElementById("opp5").innerHTML  = 'Nummer:';
            document.getElementById("opp6").innerHTML  = 'Nummer:';
            document.getElementById("opp7").innerHTML  = 'Nummer:';
            document.getElementById("opp8").innerHTML  = 'Nummer:';

            document.getElementById("lengte").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte1").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte2").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte3").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte4").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte5").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte6").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte7").innerHTML  = 'Beschrijving:';
            document.getElementById("lengte8").innerHTML  = 'Beschrijving:';

            /* inladen gegevens */
            document.getElementById("straat_id").innerHTML = dogtoilets[0].Straat;
            document.getElementById("gemeente_id").innerHTML = dogtoilets[0].Gemeente;
            document.getElementById("soort_id").innerHTML = dogtoilets[0].Soort;
            document.getElementById("hn_id").innerHTML = dogtoilets[0].Huisnummer;
            document.getElementById("besch_id").innerHTML = dogtoilets[0].Plaatsomschrijving;

            document.getElementById("straat_id1").innerHTML = dogtoilets[1].Straat;
            document.getElementById("gemeente_id1").innerHTML = dogtoilets[1].Gemeente;
            document.getElementById("soort_id1").innerHTML = dogtoilets[1].Soort;
            document.getElementById("hn_id1").innerHTML = dogtoilets[1].Huisnummer;
            document.getElementById("besch_id1").innerHTML = dogtoilets[1].Plaatsomschrijving;

            document.getElementById("straat_id2").innerHTML = dogtoilets[2].Straat;
            document.getElementById("gemeente_id2").innerHTML = dogtoilets[2].Gemeente;
            document.getElementById("soort_id2").innerHTML = dogtoilets[2].Soort;
            document.getElementById("hn_id2").innerHTML = dogtoilets[2].Huisnummer;
            document.getElementById("besch_id2").innerHTML = dogtoilets[2].Plaatsomschrijving;

            document.getElementById("straat_id3").innerHTML = dogtoilets[3].Straat;
            document.getElementById("gemeente_id3").innerHTML = dogtoilets[3].Gemeente;
            document.getElementById("soort_id3").innerHTML = dogtoilets[3].Soort;
            document.getElementById("hn_id3").innerHTML = dogtoilets[3].Huisnummer;
            document.getElementById("besch_id3").innerHTML = dogtoilets[3].Plaatsomschrijving;

            document.getElementById("straat_id4").innerHTML = dogtoilets[4].Straat;
            document.getElementById("gemeente_id4").innerHTML = dogtoilets[4].Gemeente;
            document.getElementById("soort_id4").innerHTML = dogtoilets[4].Soort;
            document.getElementById("hn_id4").innerHTML = dogtoilets[4].Huisnummer;
            document.getElementById("besch_id4").innerHTML = dogtoilets[4].Plaatsomschrijving;

            document.getElementById("straat_id5").innerHTML = dogtoilets[5].Straat;
            document.getElementById("gemeente_id5").innerHTML = dogtoilets[5].Gemeente;
            document.getElementById("soort_id5").innerHTML = dogtoilets[5].Soort;
            document.getElementById("hn_id5").innerHTML = dogtoilets[5].Huisnummer;
            document.getElementById("besch_id5").innerHTML = dogtoilets[5].Plaatsomschrijving;

            document.getElementById("straat_id6").innerHTML = dogtoilets[6].Straat;
            document.getElementById("gemeente_id6").innerHTML = dogtoilets[6].Gemeente;
            document.getElementById("soort_id6").innerHTML = dogtoilets[6].Soort;
            document.getElementById("hn_id6").innerHTML = dogtoilets[6].Huisnummer;
            document.getElementById("besch_id6").innerHTML = dogtoilets[6].Plaatsomschrijving;

            document.getElementById("straat_id7").innerHTML = dogtoilets[7].Straat;
            document.getElementById("gemeente_id7").innerHTML = dogtoilets[7].Gemeente;
            document.getElementById("soort_id7").innerHTML = dogtoilets[7].Soort;
            document.getElementById("hn_id7").innerHTML = dogtoilets[7].Huisnummer;
            document.getElementById("besch_id7").innerHTML = dogtoilets[7].Plaatsomschrijving;

            document.getElementById("straat_id8").innerHTML = dogtoilets[8].Straat;
            document.getElementById("gemeente_id8").innerHTML = dogtoilets[8].Gemeente;
            document.getElementById("soort_id8").innerHTML = dogtoilets[8].Soort;
            document.getElementById("hn_id8").innerHTML = dogtoilets[8].Huisnummer;
            document.getElementById("besch_id8").innerHTML = dogtoilets[8].Plaatsomschrijving;
}

function myFunctionParks(){
        /* weergeven bij drukken knop */
        document.getElementById("panel").style.display = "block";
        document.getElementById("panel_height").style.height = "auto";
        document.getElementById("knopGorun3").style.backgroundColor = "#FFD54F";
        document.getElementById("knopGorun2").style.backgroundColor = "#AAC0AE";
        document.getElementById("knopGorun1").style.backgroundColor = "#AAC0AE";
        /*veranderen titel*/
        document.getElementById("titelOption").innerHTML = "Parken"
                /* veranderen titels van gegevens options */
            document.getElementById("sector").innerHTML  = 'Sector:';
            document.getElementById("sector1").innerHTML  = 'Sector:';
            document.getElementById("sector2").innerHTML  = 'Sector:';
            document.getElementById("sector3").innerHTML  = 'Sector:';
            document.getElementById("sector4").innerHTML  = 'Sector:';
            document.getElementById("sector5").innerHTML  = 'Sector:';
            document.getElementById("sector6").innerHTML  = 'Sector:';
            document.getElementById("sector7").innerHTML  = 'Sector:';
            document.getElementById("sector8").innerHTML  = 'Sector:';

            document.getElementById("parknaam").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam1").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam2").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam3").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam4").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam5").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam6").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam7").innerHTML  = 'Parknaam:';
            document.getElementById("parknaam8").innerHTML  = 'Parknaam:';

            document.getElementById("speeltuin").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin1").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin2").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin3").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin4").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin5").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin6").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin7").innerHTML  = 'Speeltuin:';
            document.getElementById("speeltuin8").innerHTML  = 'Speeltuin:';

            document.getElementById("opp").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp1").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp2").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp3").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp4").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp5").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp6").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp7").innerHTML  = 'Oppervlakte:';
            document.getElementById("opp8").innerHTML  = 'Oppervlakte:';

            document.getElementById("lengte").innerHTML  = 'Lengte:';
            document.getElementById("lengte1").innerHTML  = 'Lengte:';
            document.getElementById("lengte2").innerHTML  = 'Lengte:';
            document.getElementById("lengte3").innerHTML  = 'Lengte:';
            document.getElementById("lengte4").innerHTML  = 'Lengte:';
            document.getElementById("lengte5").innerHTML  = 'Lengte:';
            document.getElementById("lengte6").innerHTML  = 'Lengte:';
            document.getElementById("lengte7").innerHTML  = 'Lengte:';
            document.getElementById("lengte8").innerHTML  = 'Lengte:';

            /* inladen gegevens */
            document.getElementById("straat_id").innerHTML = parken[0].Sector;
            document.getElementById("gemeente_id").innerHTML = parken[0].Parknaam;
            document.getElementById("soort_id").innerHTML = parken[0].Speeltuin;
            document.getElementById("hn_id").innerHTML = parken[0].Oppervlakte;
            document.getElementById("besch_id").innerHTML = parken[0].Lengte;

            document.getElementById("straat_id1").innerHTML = parken[1].Sector;
            document.getElementById("gemeente_id1").innerHTML = parken[1].Parknaam;
            document.getElementById("soort_id1").innerHTML = parken[1].Speeltuin;
            document.getElementById("hn_id1").innerHTML = parken[1].Oppervlakte;
            document.getElementById("besch_id1").innerHTML = parken[1].Lengte;

            document.getElementById("straat_id2").innerHTML = parken[2].Sector;
            document.getElementById("gemeente_id2").innerHTML = parken[2].Parknaam;
            document.getElementById("soort_id2").innerHTML = parken[2].Speeltuin;
            document.getElementById("hn_id2").innerHTML = parken[2].Oppervlakte;
            document.getElementById("besch_id2").innerHTML = parken[2].Lengte;

            document.getElementById("straat_id3").innerHTML = parken[3].Sector;
            document.getElementById("gemeente_id3").innerHTML = parken[3].Parknaam;
            document.getElementById("soort_id3").innerHTML = parken[3].Speeltuin;
            document.getElementById("hn_id3").innerHTML = parken[3].Oppervlakte;
            document.getElementById("besch_id3").innerHTML = parken[3].Lengte;

            document.getElementById("straat_id4").innerHTML = parken[4].Sector;
            document.getElementById("gemeente_id4").innerHTML = parken[4].Parknaam;
            document.getElementById("soort_id4").innerHTML = parken[4].Speeltuin;
            document.getElementById("hn_id4").innerHTML = parken[4].Oppervlakte;
            document.getElementById("besch_id4").innerHTML = parken[4].Lengte;

            document.getElementById("straat_id5").innerHTML = parken[5].Sector;
            document.getElementById("gemeente_id5").innerHTML = parken[5].Parknaam;
            document.getElementById("soort_id5").innerHTML = parken[5].Speeltuin;
            document.getElementById("hn_id5").innerHTML = parken[5].Oppervlakte;
            document.getElementById("besch_id5").innerHTML = parken[5].Lengte;

            document.getElementById("straat_id6").innerHTML = parken[6].Sector;
            document.getElementById("gemeente_id6").innerHTML = parken[6].Parknaam;
            document.getElementById("soort_id6").innerHTML = parken[6].Speeltuin;
            document.getElementById("hn_id6").innerHTML = parken[6].Oppervlakte;
            document.getElementById("besch_id6").innerHTML = parken[6].Lengte;

            document.getElementById("straat_id7").innerHTML = parken[7].Sector;
            document.getElementById("gemeente_id7").innerHTML = parken[7].Parknaam;
            document.getElementById("soort_id7").innerHTML = parken[7].Speeltuin;
            document.getElementById("hn_id7").innerHTML = parken[7].Oppervlakte;
            document.getElementById("besch_id7").innerHTML = parken[7].Lengte;

            document.getElementById("straat_id8").innerHTML = parken[8].Sector;
            document.getElementById("gemeente_id8").innerHTML = parken[8].Parknaam;
            document.getElementById("soort_id8").innerHTML = parken[8].Speeltuin;
            document.getElementById("hn_id8").innerHTML = parken[8].Oppervlakte;
            document.getElementById("besch_id8").innerHTML = parken[8].Lengte;
}