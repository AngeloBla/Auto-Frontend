
import React from 'react';
import './style.css'; // Assuming the same CSS file is used

const Konfigurator = () => {
    return (
        <>
            <!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>
        Konfigurator
    </title>
    
    <link href="style.css" rel="stylesheet" />
</head>

<body>
    <div class="container2">
        
        <div class="fixed-image-panel">
            <img alt="Auto Bild" id="selectedImage" src="./testbilder/scheiben40getoent.png" onerror="this.onerror=null;this.src='error.jpg';">
        </div>
        
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
                    
                    <div class="single-model-search" id="laufzeit-container">
                        <h4>
                            Laufzeit (Monate)
                        </h4>
                        <div class="model-select-icon">
                            <input class="form-control" id="laufzeit" max="60" min="12" required="" type="number" />
                        </div>
                    </div>
                    
                    <div class="single-model-search" id="laufleistung-container">
                        <h4>
                            Laufleistung in km/Jahr
                        </h4>
                        <div class="model-select-icon">
                            <input class="form-control" id="laufleistung" max="30000" min="10000" required="" step="1000"
                                type="number" />
                        </div>
                    </div>
                    
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
            
            <div class="price-display" id="motorPrice">
                Motor Preis: 0 €
            </div>

        </div>

        <hr>

        
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
            
            <div class="price-display" id="getriebePrice">
                Getriebe Preis: 0 €
            </div>
        </div>

        <hr>

        
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
        
        <div class="price-display" id="bodyColorPrice">
            Außenfarbe Preis: 0 €
        </div>

        <hr>

        
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
            
            <div class="price-display" id="hoodColorPrice">
                Motorhaube Farbe Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="roofColorPrice">
                Dachfarbe Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="roofrackPrice">
                Dachträger Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="windowcolorPrice">
                Getönte Scheiben Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="innenausstattung1Price">
                Innenausstattung 1 Preis: 0 €
            </div>

        </div>

        <hr>

        
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
            
            <div class="price-display" id="innenausstattung2Price">
                Innenausstattung 2 Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="servicePrice">
                Serviceprodukte Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="karosseriePrice">
                Karosserie Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>

        <hr>

        
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
            
            <div class="price-display" id="abholortPrice">
                Abholort Preis: 0 €
            </div>

        </div>

        
        <div class="fixed-bar" id="fixed-bar">
            <div class="price-panel">
                <div id="totalPrice">
                    <h2>
                        Gesamtpreis: 0 €
                    </h2>
                </div>
                
                <div id="monthly-rate-display">
                    <h3>
                        Monatliche Rate: 0 €
                    </h3>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script src="script.js"></script>
</body>

</html>
        </>
    );
};

export default Konfigurator;