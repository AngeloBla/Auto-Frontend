
import React from 'react';

const Konfigurator = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={ __html: `
body {
    background: url('https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/carousel/aussenfarbegruen.png') no-repeat center center fixed;
    background-size: cover;
    font-family: 'Arial', sans-serif;
    margin: 0;
    filter: brightness(100%);
}

hr {
    max-width: 400px;
    height: 1px;
    background-color: #767676;
}

input, select {
    width: 50%;
    margin: 5% 5% 5% 5%; /* Anpassung hier: 2% rechts */
    padding: 10px;
    box-sizing: border-box;
}

#zahlungsart {
    width: 50%;
}

/* Toggle Function */
.collapsible-content {
    display: none;
}

.toggle-button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    display: inline-block;
    margin: 10px 0;
}

.toggle-button:hover {
    background-color: #2980b9;
}


/* Container */
.container {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    width: 39%;
    box-sizing: border-box;
    overflow-wrap: break-word;
    font-size: calc(0.5vw + 10px);
    margin-right: 5%;
    text-align: center; /* Text zentriert */
    padding-right: 10px; /* Abstand zwischen Text und Trennlinie */
}
.container2 {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    width: 60%; /* Erhöhte Breite für bessere Sichtbarkeit */
    margin-left: 40%; /* Verschieben des Containers nach rechts */
    top: 0;
    text-align: center;
    padding-right: 10px;
}
#reifen {
    border: crimson, solid 4px;
    overflow-wrap: normal;
    /* text-align: left; */
    padding-bottom: 10px; /* Abstand zwischen Text und Trennlinie */
}
#zusatz {
    border: black, solid 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
    input, select {
        width: 90%;
        margin: 5%;
    }

    .container {
        width: 90%;
        top: 5%;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    input, select {
        width: 100%;
        margin: 5% 0;
    }

    .container {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: auto;
        font-size: 12px;
    }
}

/* Fixed Image Panel */
.fixed-image-panel {
    width: 100%;
    height: auto;
}


.fixed-image-panel img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .fixed-image-panel {
        top: 5%;
        right: 5%;
        width: 90vw;
    }
}

@media (max-width: 480px) {
    .fixed-image-panel {
        top: 0;
        right: 0;
        left: 0;
        width: 100vw;
    }
}

/* Fixed Bar */
.fixed-bar {
    position: static;
    bottom: 0;
    left: 0;
    width: 88%;
    height: auto;
    margin: 1.5%;
    color: whitesmoke;
    background-color: #7f7f7f;
    border-radius: 5px;
    padding: 0.5%;
    font-size: min(max(12px, 1vw), 16px);
}

/* Price Panel */
.price-panel {
    padding-top: 0;
    text-align: right;
    padding-right: 5%;
}

@media (max-width: 768px) {
    .fixed-bar {
        padding: 8px;
    }
}

@media (max-width: 480px) {
    .fixed-bar {
        padding: 10px;
    }
}

/* Payment Method Container */
.zahlungsmethode {
    box-sizing: border-box;
    padding-bottom: 10px; /* Abstand zwischen Text und Trennlinie */
}

@media (max-width: 768px) {
    .zahlungsmethode {
        font-size: 90%;
    }
}

@media (max-width: 480px) {
    .zahlungsmethode {
        font-size: 80%;
    }

/* Hidden Test Section */
#test {
    border: solid 2px #ee82ee;
    display: none;
}

/* Zentriert den Text und die Checkboxen innerhalb der Labels */
label {
    display: flex;
    align-items:center;
    justify-content:center   ; /* Zentriert horizontal */
    margin: auto; /* Sorgt für automatische Randabstände*/
}

/* Stellt sicher, dass die Checkboxen nicht zu breit sind */
input[type="checkbox"] {
    width: auto;
    margin-right: 10px; /* Abstand zwischen Checkbox und Text */
}
` } />
            <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>
        Konfigurator
    </title>
    <!-- <link rel="stylesheet" href="../assets/css/bootstrap.min.css"> -->
    <link href="style.css" rel="stylesheet" />

</head>

<body>
    <div class="container2">
        <!-- ########### Bild aus auswahl ########## -->
        <div class="fixed-image-panel">
            <img alt="Auto Bild" id="selectedImage" src="./testbilder/scheiben40getoent.png" onerror="this.onerror=null;this.src='error.jpg';">
        </div>
        <!-- ########### Bild ENDE ########## -->
    </div>
    <div class="container">
    <p align="center" style="color:red; font-weight:bold">!-!-! Work in Progress !-!-!</p>

        <div class="zahlungsmethode">
            <div class="left-panel">
                <h2>
                    Stelle dir dein Traum LandRover zusammen:
                </h2>
                <p>
                    Bitte triff eine Auswahl
                </p>
            </div>
            <!-- ########## Auswahl Zahlungart ########## -->
            <div class="single-model-search">
                <div class="toggle-button" onclick="toggleElements()">
                    ▼ Zahlungsoptionen
                </div>
                <div class="collapsible-content">
                    <h3>
                        Zahlungsart
                    </h3>
                    <div class="model-select-icon">
                        <select class="form-control" id="zahlungsart">
                            <option value="leasing">
                                Leasing
                            </option>
                            <option value="1xZahlung">
                                1x Zahlung
                            </option>
                        </select>
                    </div>
                    <!-- Laufzeit -->
                    <div class="single-model-search" id="laufzeit-container">
                        <h4>
                            Laufzeit (Monate)
                        </h4>
                        <div class="model-select-icon">
                            <input class="form-control" id="laufzeit" max="60" min="12" required="" type="number" />
                        </div>
                    </div>
                    <!-- Laufleistung in km/Jahr -->
                    <div class="single-model-search" id="laufleistung-container">
                        <h4>
                            Laufleistung in km/Jahr
                        </h4>
                        <div class="model-select-icon">
                            <input class="form-control" id="laufleistung" max="30000" min="10000" required="" step="1000"
                                type="number" />
                        </div>
                    </div>
                    <!-- Anzahlung -->
                    <div class="single-model-search">
                        <h4>
                            Anzahlung (Euro)
                        </h4>
                        <div class="model-select-icon" id="model-select-icon">
                            <input class="form-control" id="anzahlung" min="0" step="1000" type="number" />
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        <!-- ########## Zahlungsart ENDE ########## -->
        <!-- ################################################## -->
        <!-- ########## Auswahl Motor ########## -->
        <div class="single-model-search">
            <h3>
                Motor
            </h3>
            <div class="model-select-icon">
                <select class="form-control" id="motor">
                    <option value="2.0-EcoBlue-XL">
                        2.0 EcoBlue (Diesel Euro6) 125kW Extrakab. 4x4 XL
                        170 PS, 4x4-Antrieb
                        8,4 l/100km | CO² komb.: 221 g/km
                    </option>
                    <option value="4.0-MagaTurbo-XL">
                        4.0 S/C Spezial (Benzin) 257kW 4x4 XL
                        350 PS, 4x4-Antrieb
                        16,5 l/100km | CO² komb.: xxl g/km
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="motorPrice">
                Motor Preis: 0 €
            </div>

        </div>

        <hr>

        <!-- ########## Auswahl Getriebe ########## -->
        <div class="single-model-search">
            <h3>
                Getriebe
            </h3>
            <div class="model-select-icon">
                <select class="form-control" id="getriebe">
                    <option value="automatic">
                        automatik Schaltung 6 Gang
                    </option>
                    <option value="manual">
                        manuelle Schaltung 6 Gang
                    </option>
                    <option value="automatic-diff">
                        automatik Schaltung 6 Gang mit differential Getriebe und Sperre
                    </option>
                    <option value="manual-diff">
                        manuelle Schaltung 6 Gang mit differential Getriebe und Sperre
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="getriebePrice">
                Getriebe Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ####### Auswahl Karosseriefarbe ######### -->
        <div class="single-model-search">
            <h3>
                Wähle die Karosseriefarbe
            </h3>
            <select class="form-select" id="bodyColor" onchange="loadCarImage()">
                <option value="red">Rot</option>
                <option value="body-blue">
                    Blau
                </option>
                <option value="body-yellow">
                    Gelb
                </option>
                <option value="body-red">
                    Rot
                </option>
                <option value="body-green">
                    olivegrün
                </option>
                <option value="body-black">
                    Schwarz
                </option>
                <option value="body-white">
                    Weiß
                </option>
            </select>
        </div>
        <!-- Anzeigefenster für den Preis -->
        <div class="price-display" id="bodyColorPrice">
            Außenfarbe Preis: 0 €
        </div>

        <hr>

        <!-- ####### Auswahl Motorhaubenfarbe ######## -->
        <div class="single-model-search">
            <h3>
                Motorhaube Farbe
            </h3>
            <div class="model-select-icon">
                <select class="form-select" id="hoodColor" onchange="loadHoodImage()">
                    <option value="white-hood">
                        Weiß
                    </option>
                    <option value="blue-hood">
                        Blau
                    </option>
                    <option value="green-hood">
                        olivegrün
                    </option>
                    <option value="red-hood">
                        Rot
                    </option>
                    <option value="yellow-hood">
                        Gelb
                    </option>
                    <option value="black-hood">
                        Schwarz
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="hoodColorPrice">
                Motorhaube Farbe Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ####### Auswahl Dachfarbe ######### -->
        <div class="single-model-search">
            <h3>
                Dachfarbe
            </h3>
            <div class="model-select-icon">
                <select class="form-select" id="roofColor" onchange="loadRoofColorImage()">
                    <option value="standard-roof">
                        standard Weiß
                    </option>
                    <option value="blue-roof">
                        Blau
                    </option>
                    <option value="green-roof">
                        olivegrün
                    </option>
                    <option value="red-roof">
                        Rot
                    </option>
                    <option value="yellow-roof">
                        Gelb
                    </option>
                    <option value="black-roof">
                        Schwarz
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="roofColorPrice">
                Dachfarbe Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ####### Auswahl Dachträger ######### -->
        <div class="single-model-search">
            <h3>
                Dachträger
            </h3>
            <div class="model-select-icon">
                <select class="form-select" id="roofrack" onchange="loadroofrackImage()">
                    <option value="roof-rack0">
                        kein Dachträger
                    </option>
                    <option value="roof-rack1">
                        standard Schwarz
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="roofrackPrice">
                Dachträger Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ######## Auswahl getönte Scheiben ######### -->
        <div class="single-model-search">
            <h3>
                Getönte Scheiben
            </h3>
            <div class="model-select-icon">
                <select class="form-select" id="windowcolor" onchange="loadwindowcolorImage()">
                    <option value="window0">
                        keine
                    </option>
                    <option value="window20">
                        20 % getönte Scheiben
                    </option>
                    <option value="window40">
                        40 % getönte Scheiben
                    </option>
                    <option value="window80">
                        80 % getönte Scheiben
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="windowcolorPrice">
                Getönte Scheiben Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ########## Auswahl Innenausstattung1 ########## -->
        <div class="single-model-search">
            <h3>
                Innenausstattung wählen
            </h3>
            <div class="model-select-icon">
                <select class="form-control" id="innenausstattung1">
                    <option value="stoff-ebony">
                        Stoff Ebony
                        Sitzbezüge: Stoff Farbe Schwarz
                    </option>
                    <option value="leather">
                        Leder
                        Sitzbezüge: Leder Farbe Schwarz
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="innenausstattung1Price">
                Innenausstattung 1 Preis: 0 €
            </div>

        </div>

        <hr>

        <!-- ########### Auswahl Innenausstattung2 ########## -->
        <div class="single-model-search">
            <h3>
                Innenausstattung
            </h3>
            <div class="model-select-icon">
                <select class="form-control" id="innenausstattung2">
                    <option value="rubber-floor-mat">
                        Gummifussmatte
                    </option>
                    <option value="fabric-floor-mat">
                        Stofffussmatte
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="innenausstattung2Price">
                Innenausstattung 2 Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ######## Auswahl Service Produkte ######### -->
        <div class="single-model-search">
            <h3>
                ServiceProdukte
            </h3>
            <div class="model-select-icon">
                <div class="form-control" id="service">
                    <label>
                        <input type="checkbox" class="from-control" id="wartung_verschleiss" value="wartung_verschleiss">
                        Wartung & Verschleiß
                    </label>
                        <input type="checkbox" class="from-control" id="ueberfuehrung" value="ueberfuehrung">
                        Überführungskosten
                    </label>
                        <input type="checkbox" class="from-control" id="kfz_versicherung" value="kfz_versicherung">
                        KFZ-Versicherung
                    </label>
                        <input type="checkbox" class="from-control" id="zulassungsservice" value="zulassungsservice">
                        Zulassungsservice
                    </label>
                        <input type="checkbox" class="from-control" id="mobilitaetsgarantie" value="mobilitaetsgarantie">
                        Mobilitätsgarantie Plus
                    </label>
                </div>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="servicePrice">
                Serviceprodukte Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ########### Zusatzoptionen ########### -->
        <div class="single-model-search">
            <h3>Zusatzoptionen</h3>
            <div class="model-select-icon">
                <div id="zusatz" class="form-control">
                    <label>
                        <input type="checkbox" class="form-control zusatz-option" id="hitch" value="hitch"> 
                        Anhängevorrichtung, 13 polig
                    </label>
                    <label>
                        <input type="checkbox" class="form-control zusatz-option" id="underbody-protection" value="underbody-protection"> 
                        Unterbodenschutz auf Wachsbasis
                    </label>
                    <label>
                        <input type="checkbox" class="form-control zusatz-option" id="mudguard" value="mudguard"> 
                        Spritzschutz
                    </label>
                </div>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="karosseriePrice">
                Karosserie Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ########### Auswahl Reifen ########### -->
        <div class="single-model-search">
            <h3>Reifen</h3>
            <div class="model-select-icon">
                <div id="reifen" class="form-control">
                    <label>
                        <input type="checkbox" class="form-control" value="sommer"checked>Sommerreifenset
                    </label>
                    <label>
                        <input type="checkbox" class="form-control" value="winter">Winterreifenset
                    </label>
                    <label>
                        <input type="checkbox" class="form-control" value="all-season-tire">Ganzjahresreifenset
                    </label>
                </div>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ########### Pakete ########### -->
        <div class="single-model-search">
            <h3>
                Pakete
            </h3>
            <div class="model-select-icon">
                <select class="form-control" id="pakete">
                    <option value="flotten-paket-1">
                        Flotten-Paket 1 mit: Bodenbelag Plastik/Gummi, Verstärktes Fahrwerk
                    </option>
                    <option value="komfort-paket-2">
                        Komfort-Paket 2 mit: Spannungskonverter 400 Watt, Schaltersatz - 6 Schalter
                    </option>
                    <option value="outdoor-paket-2">
                        Outdoor-Paket 3 mit: Unterbodenschutzvorrichtung an Kraftstofftank und Motor
                    </option>
                    <option value="winter-paket-1">
                        Winter-Paket 1 mit: Lenkrad beheizt, Fahrersitz und Beifahrersitz Vordersitze mit Sitzheizung,
                        Beheizbare Windschutzscheibe, Klimaanlage, manuell
                    </option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>

        <hr>

        <!-- ########### Abhohlort ########### -->
        <div class="single-model-search">
            <h3>
                Abhohlort auswählen
            </h3>
            <div class="model-select-icon">
                <select class="form-control">
                    <option value="muenchen">München</option>
                    <option value="stuttgart">Stuttgart</option>
                    <option value="berlin">Berlin</option>
                    <option value="potsdam">Potsdam</option>
                    <option value="bremen">Bremen</option>
                    <option value="hamburg">Hamburg</option>
                    <option value="wiesbaden">Wiesbaden</option>
                    <option value="schwerin">Schwerin</option>
                    <option value="hannover">Hannover</option>
                    <option value="duesseldorf">Düsseldorf</option>
                    <option value="mainz">Mainz</option>
                    <option value="saarbruecken">Saarbrücken</option>
                    <option value="dresden">Dresden</option>
                    <option value="dresden" style="font-weight: bold;">Lieferung bis zur Haustür</option>
                </select>
            </div>
            <!-- Anzeigefenster für den Preis -->
            <div class="price-display" id="abholortPrice">
                Abholort Preis: 0 €
            </div>

        </div>

        <!-- ########## Gesamtpreis Box ########## -->
        <div class="fixed-bar" id="fixed-bar">
            <div class="price-panel">
                <div id="totalPrice">
                    <h2>
                        Gesamtpreis: 0 €
                    </h2>
                </div>
                <!-- Hinzufügen der monatlichen Gesamtrate -->
                <div id="monthly-rate-display">
                    <h3>
                        Monatliche Rate: 0 €
                    </h3>
                </div>
            </div>
        </div>
        <!-- ########## Gesmatpreis Box ENDE ########## -->
    </div>
    <!-- ########### Body ENDE ########## -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script src="script.js"></script>
<script>
// Preisbalken groesse automatisch anpassen
function adjustFontSize() {
    var fixedBar = document.querySelector('.fixed-bar');
    var width = fixedBar.offsetWidth;
    var fontSize = Math.max(12, width / 100); // Beispiel: Basis auf Elementbreite
    fixedBar.style.fontSize = fontSize + 'px';
}

// Aufruf der Funktion beim Laden der Seite und bei Größenänderungen des Fensters
window.onload = adjustFontSize;
window.onresize = adjustFontSize;
// ############ Preis laden ############
document.addEventListener('DOMContentLoaded', (event) => {
    loadPrices();
});




        // ########### Funktion toggle Element ##########
            function toggleElements() {
        var content = document.querySelector('.collapsible-content');
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

        // ############### Zahlungsart ####################
        // Hinzufügen des Event Listeners für die Änderung der Zahlungsart
        const zahlungsartSelect = document.getElementById("zahlungsart");
        const laufzeitContainer = document.getElementById("laufzeit-container");
        const laufleistungContainer = document.getElementById("laufleistung-container");

        zahlungsartSelect.addEventListener("change", function () {
            if (zahlungsartSelect.value === "leasing") {
                laufzeitContainer.style.display = "block";
                laufleistungContainer.style.display = "block";
            } else {
                laufzeitContainer.style.display = "none";
                laufleistungContainer.style.display = "none";
            }
        });
        //     function updateLaufzeitAndLaufleistungDisplay() {
            if (zahlungsartSelect.value === "leasing") {
                laufzeitContainer.style.display = "block";
                laufleistungContainer.style.display = "block";
            } else {
                laufzeitContainer.style.display = "none";
                laufleistungContainer.style.display = "none";
            }
        // ########### Funktion Zahlung ENDE ##########

                // ########### Funktion Auswahl karosserie verlinkung Bilder ###########
                function loadCarImage() {
                    var bodyColor = document.getElementById('bodyColor').value;
                    var imagePath;
                    switch (bodyColor) {
                        case 'body-red':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg';
                            break;
                        case 'body-blue':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_blau.jpg';
                            break;
                        case 'body-yellow':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg';
                            break;
                        case 'body-green':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_gruen.jpg';
                            break;
                        case 'body-black':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_schwarz.jpg';
                            break;
                        case 'body-white':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_wei%C3%9F.jpg';
                            break;
                        default:
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png';
                    }
                        document.getElementById('selectedImage').src = imagePath;
                }
                //  ################ funktion Auswahl Motorhaubefarbe mit Bild verlinken ################
                function loadHoodImage() {
                    var hoodColor = document.getElementById('hoodColor').value;
                    var imagePath;
                    switch (hoodColor) {
                        case 'white-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_wei%C3%9F.jpg';
                            break;
                        case 'blue-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_blau.jpg';
                            break;
                        case 'green-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_gruen.jpg';
                            break;
                        case 'red-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_rot.jpg';
                            break;
                        case 'yellow-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg';
                            break;
                        case 'black-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_schwarz.jpg';
                            break;
                        default:
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                //  ################ funktion Auswahl Dachfarbe mit bild verlinken ################

                function loadRoofColorImage() {
                    var roofColor = document.getElementById('roofColor').value;
                    var imagePath;
                    switch (roofColor) {
                        case 'standard-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dach.jpg';
                            break;
                        case 'blue-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_blau.jpg';
                            break;
                        case 'green-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gruen.jpg';
                            break;
                        case 'red-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_rot.jpg';
                            break;
                        case 'yellow-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gelb.jpg';
                            break;
                        case 'black-roof':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_schwarz.jpg';
                            break;
                        default:
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                //  ################ funktion Auswahl Dachträger mit Bild verlinken ################

                function loadroofrackImage() {
                    var roofrack = document.getElementById('roofrack').value;
                    var imagePath;
                    switch (roofrack) {
                        case 'roof-rack0':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg';
                            break;
                        case 'roof-rack1':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dachtraeger.jpg';
                            break;
                        default:
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                //  ################ funktion Auswahl getönte Scheiben mit Bilder ##########

                function loadwindowcolorImage() {
                    var windowcolor = document.getElementById('windowcolor').value;
                    var imagePath;
                    switch (windowcolor) {
                        case 'window0':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/scheibe.jpg';
                            break;
                        case 'window20':
                            imagePath = './testbilder/scheiben20getoent.png';
                            break;
                        case 'window40':
                            imagePath = './testbilder/scheiben40getoent.png';
                            break;
                        case 'window80':
                            imagePath = './testbilder/scheiben80getoent.png';
                            break;
                        default:
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }
                //  ################ funktion Auswahl zusatz mit Bilder ##########

                function loadzusatzImage() {
                    var checkboxes = document.querySelectorAll('.zusatz-option');
                    var imageElement = document.getElementById('selectedImage');
                    var neuesBild;
                
                    checkboxes.forEach(function(checkbox) {
                        if (checkbox.checked) {
                            switch (checkbox.value) {
                                case 'hitch':
                                    // Logik für 'Anhängevorrichtung'
                                    break;
                                case 'underbody-protection':
                                    // Logik für 'Unterbodenschutz'
                                    break;
                                case 'mudguard':
                                    neuesBild = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/spritzschutz.jpg';
                                    break;
                                default:
                                    neuesBild = 'standardbild.jpg'; // Ein Standardbild, falls kein Fall zutrifft
                            }
                        }
                    });
                
                    // Setze das neue Bild nur, wenn neuesBild definiert wurde
                    if (neuesBild) {
                        imageElement.src = neuesBild;
                    }
                }
                
                document.querySelectorAll('.zusatz-option').forEach(function(checkbox) {
                    checkbox.addEventListener('change', loadzusatzImage);
                });

                // ############ Reifen ############
                $(document).ready(function () {
                    var ganzjahresCheckbox = $('input[type="checkbox"][value="all-season-tire"]');
                    var sommerCheckbox = $('input[type="checkbox"][value="sommer"]');
                    var winterCheckbox = $('input[type="checkbox"][value="winter"]');

                    // Setze Sommerreifen als Standard ausgewählt
                    sommerCheckbox.prop('checked', true);

                    // Hinzufügen des Event Listeners für die Änderung der Checkboxen
                    $('#reifen input[type="checkbox"]').change(function () {
                        updateOptions($(this));
                        updateReifenImage(true); // true signalisiert, dass die Funktion aufgrund einer Benutzeraktion aufgerufen wurde
                    });

                    // Hinzufügen des Event Listeners für die Änderung der Ganzjahresreifen-Checkbox
                    ganzjahresCheckbox.change(function () {
                        updateGanzjahresCheckbox();
                    });

                    // Funktion zum Aktualisieren der Checkboxen
                    function updateOptions(clickedCheckbox) {
                        var selectedValue = clickedCheckbox.val();

                        if (selectedValue === 'all-season-tire') {
                            sommerCheckbox.prop('checked', false).prop('disabled', true);
                            winterCheckbox.prop('checked', false).prop('disabled', true);
                        } else {
                            if ((sommerCheckbox.is(':checked') || winterCheckbox.is(':checked')) && ganzjahresCheckbox.is(':checked')) {
                                ganzjahresCheckbox.prop('checked', false);
                                updateGanzjahresCheckbox();
                            }
                        }
                    }

                    // Funktion zum Aktualisieren der Ganzjahresreifen-Checkbox
                    function updateGanzjahresCheckbox() {
                        if (!ganzjahresCheckbox.is(':checked')) {
                            sommerCheckbox.prop('disabled', false);
                            winterCheckbox.prop('disabled', false);
                        }
                    }

                    // Funktion zur Aktualisierung des Reifenbildes
                    function updateReifenImage(userAction = false) {
                        if (!userAction) return; // Beendet die Funktion, wenn sie nicht durch Benutzeraktion aufgerufen wurde

                        var imagePath;
                    if (ganzjahresCheckbox.is(':checked')) {
                        imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
                    } else if (sommerCheckbox.is(':checked') && winterCheckbox.is(':checked')) {
                        imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
                    } else if (sommerCheckbox.is(':checked')) {
                        imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
                    } else if (winterCheckbox.is(':checked')) {
                        imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
                    } else {
                        imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg'; // Standardbild
                    }

                    var imageElement = document.getElementById('selectedImage');
                    imageElement.src = imagePath;
                    imageElement.onerror = function() {
                        this.src = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png'; // Fallback-Bild
                    };
                    }
});
            // ########## Javascript Reifen Ende ##########
            // ########## Javascript Preis abrufen ##########
            // In Ihrer script.js oder innerhalb des <script>-Tags
                    function loadPrices() {
        fetch('http://localhost:3000/getPrices')
            .then(response => response.json())
            .then(data => {
                // Aktualisieren Sie jedes Preisfeld
                document.getElementById('paketePrice').textContent = `Pakete Preis: ${data.paketePrice} €`;
                document.getElementById('abholortPrice').textContent = `Abholort Preis: ${data.abholortPrice} €`;
                document.getElementById('carColorPrice').textContent = `Außenfarbe Preis: ${data.carColorPrice} €`;
                // Fügen Sie hier weitere Zeilen für andere Preisfelder hinzu
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Preise:', error);
            });
    }


            // ########## Javascript Preis abrufen ENDE ##########

// Event Listener für zusätzliche Optionen
$('.zusatz-option').change(function () {
    // Ihre Logik für zusätzliche Optionen
});

// Event Listener für zusätzliche Optionen
$('.service-option').change(function () {
    // Ihre Logik für zusätzliche Optionen
});

// Event Listener für Service-Checkboxen
$('#service input[type="checkbox"]').change(function () {
    // Ihre Logik für Service-Optionen
    // Zum Beispiel: Aktualisieren eines Preisanzeigefelds oder anderer Elemente basierend auf der Auswahl
});
</script>
</body>

</html>` } />
        </>
    );
};

export default Konfigurator;