import React, { Component } from 'react';

class Konfig extends Component {
  state = {};

  toggleElements = () => {
    // Logik für das Umschalten der Elemente hier
    console.log('Toggle Elements');
  };

  render() {
    return (
      <div className="container">
        {/* ########### Bild aus Auswahl ########## */}
        <div className="fixed-image-panel">
          <img alt="Auto Bild" id="selectedImage" src="./testbilder/scheiben40getoent.png" onError={(e) => { e.target.onerror = null; e.target.src = 'error.jpg'; }} />
        </div>
        {/* ########### Bild ENDE ########## */}
        <div className="zahlungsmethode">
          <div className="left-panel">
            <h2>
              Stelle dir dein Traum LandRover zusammen:
            </h2>
            <p>
              Bitte triff eine Auswahl
            </p>
          </div>
          {/* ########## Auswahl Zahlungsart ########## */}
          <div className="single-model-search">
            <div className="toggle-button" onClick={this.toggleElements}>
              ▼ Zahlungsoptionen
            </div>
            <div className="collapsible-content">
            <h3>
                        Zahlungsart
                    </h3>
                    <div className="model-select-icon">
                        <select className="form-control" id="zahlungsart">
                            <option value="leasing">
                                Leasing
                            </option>
                            <option value="1xZahlung">
                                1x Zahlung
                            </option>
                        </select>
                    </div>
                    {/* <!-- Laufzeit --> */}
                    <div className="single-model-search" id="laufzeit-container">
                        <h4>
                            Laufzeit (Monate)
                        </h4>
                        <div className="model-select-icon">
                            <input className="form-control" id="laufzeit" max="60" min="12" required="" type="number" />
                        </div>
                    </div>
                    {/* <!-- Laufleistung in km/Jahr --> */}
                    <div className="single-model-search" id="laufleistung-container">
                        <h4>
                            Laufleistung in km/Jahr
                        </h4>
                        <div className="model-select-icon">
                            <input className="form-control" id="laufleistung" max="30000" min="10000" required="" step="1000"
                                type="number" />
                        </div>
                    </div>
                    {/* <!-- Anzahlung --> */}
                    <div className="single-model-search">
                        <h4>
                            Anzahlung (Euro)
                        </h4>
                        <div className="model-select-icon" id="model-select-icon">
                            <input className="form-control" id="anzahlung" min="0" step="1000" type="number" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ########## Zahlungsart ENDE ########## --> */}
        {/* <!-- ################################################## --> */}
        {/* <!-- ########## Auswahl Motor ########## --> */}
        <div className="single-model-search">
            <h3>
                Motor
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="motor">
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="motorPrice">
                Motor Preis: 0 €
            </div>

        </div>
        {/* <!-- ########## Auswahl Getriebe ########## --> */}
        <div className="single-model-search">
            <h3>
                Getriebe
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="getriebe">
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="getriebePrice">
                Getriebe Preis: 0 €
            </div>
        </div>
        {/* <!-- ####### Auswahl Autofarbe ######### --> */}
        <div className="single-model-search">
            <h3>
                Wähle die Aussenfarbe des Autos
            </h3>
            <select className="form-select" id="carColor" onChange={loadCarImage}>
                <option value="red">Rot</option>
                <option value="blue">
                    Blau
                </option>
                <option value="yellow">
                    Gelb
                </option>
                <option value="red">
                    Rot
                </option>
                <option value="green">
                    olivegrün
                </option>
                <option value="black">
                    Schwarz
                </option>
                <option value="white">
                    Weiß
                </option>
            </select>
        </div>
        {/* <!-- Anzeigefenster für den Preis --> */}
        <div className="price-display" id="carColorPrice">
            Außenfarbe Preis: 0 €
        </div>
{/* <!-- ####### Auswahl Karosseriefarbe ######### --> */}
<div className="single-model-search">
    <h3>
        Wähle die Karosseriefarbe
    </h3>
    <select className="form-select" id="bodyColor" onChange={loadCarImage}>
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
{/* <!-- Anzeigefenster für den Preis --> */}
<div className="price-display" id="carColorPrice">
    Außenfarbe Preis: 0 €
</div>
        {/* <!-- ####### Auswahl Motorhaubenfarbe ######## --> */}
        <div className="single-model-search">
            <h3>
                Motorhaube Farbe
            </h3>
            <div className="model-select-icon">
                <select className="form-select" id="hoodColor" onChange={loadCarImage}>
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="hoodColorPrice">
                Motorhaube Farbe Preis: 0 €
            </div>
        </div>
        {/* <!-- ####### Auswahl Dachfarbe ######### --> */}
        <div className="single-model-search">
            <h3>
                Dachfarbe
            </h3>
            <div className="model-select-icon">
                <select className="form-select" id="roofColor" onChange={loadCarImage}>
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="roofColorPrice">
                Dachfarbe Preis: 0 €
            </div>
        </div>
        {/* <!-- ####### Auswahl Dachträger ######### --> */}
        <div className="single-model-search">
            <h3>
                Dachträger
            </h3>
            <div className="model-select-icon">
                <select className="form-select" id="roofrack" onChange={loadCarImage}>
                    <option value="roof-rack0">
                        kein Dachträger
                    </option>
                    <option value="roof-rack1">
                        standard Schwarz
                    </option>
                </select>
            </div>
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="roofrackPrice">
                Dachträger Preis: 0 €
            </div>
        </div>
        {/* <!-- ######## Auswahl getönte Scheiben ######### --> */}
        <div className="single-model-search">
            <h3>
                Getönte Scheiben
            </h3>
            <div className="model-select-icon">
                <select className="form-select" id="windowcolor" onChange={loadCarImage}>
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="windowcolorPrice">
                Getönte Scheiben Preis: 0 €
            </div>
        </div>
        {/* <!-- ########## Auswahl Innenausstattung1 ########## --> */}
        <div className="single-model-search">
            <h3>
                Innenausstattung wählen
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="innenausstattung1">
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="innenausstattung1Price">
                Innenausstattung 1 Preis: 0 €
            </div>

        </div>
        {/* <!-- ########### Auswahl Innenausstattung2 ########## --> */}
        <div className="single-model-search">
            <h3>
                Innenausstattung
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="innenausstattung2">
                    <option value="rubber-floor-mat">
                        Gummifussmatte
                    </option>
                    <option value="fabric-floor-mat">
                        Stofffussmatte
                    </option>
                </select>
            </div>
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="innenausstattung2Price">
                Innenausstattung 2 Preis: 0 €
            </div>
        </div>
        {/* <!-- ######## Auswahl Service Produkte ######### --> */}
        <div className="single-model-search">
            <h3>
                ServiceProdukte
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="service">
                    <option value="wartung_verschleiss">
                        Wartung & Verschleiß
                    </option>
                    <option value="ueberfuehrung">
                        Überführungskosten
                    </option>
                    <option value="kfz_versicherung">
                        KFZ-Versicherung
                    </option>
                    <option value="zulassungsservice">
                        Zulassungsservice
                    </option>
                    <option value="mobilitaetsgarantie">
                        Mobilitätsgarantie Plus
                    </option>
                </select>
            </div>
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="servicePrice">
                Serviceprodukte Preis: 0 €
            </div>
        </div>
        {/* <!-- ########### Zusatzoptionen ########### --> */}
        <div className="single-model-search">
            <h3>
                Zusatzoptionen
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="zusatz">
                    <option value="hitch">
                        Anhängevorrichtung, 13 polig
                    </option>
                    <option value="underbody-protection">
                        Unterbodenschutz auf Wachsbasis
                    </option>
                    <option value="mudguard">
                        Spritzschutz
                    </option>
                </select>
            </div>
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="karosseriePrice">
                Karosserie Preis: 0 €
            </div>

        </div>
        {/* <!-- ########### Auswahl Reifen ########### --> */}
        <div className="single-model-search">
            <h3>Reifen</h3>
            <div className="model-select-icon">
                <div id="reifen" className="form-control">
                    <label>
                        <input type="checkbox" className="form-control" value="sommer"checked/> Sommerreifenset
                    </label>
                    <label>
                        <input type="checkbox" className="form-control" value="winter"/> Winterreifenset
                    </label>
                    <label>
                        <input type="checkbox" className="form-control" value="all-season-tire"/> Ganzjahresreifenset
                    </label>
                </div>
            </div>
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>
        {/* <!-- ########### Pakete ########### --> */}
        <div className="single-model-search">
            <h3>
                Pakete
            </h3>
            <div className="model-select-icon">
                <select className="form-control" id="pakete">
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="paketePrice">
                Pakete Preis: 0 €
            </div>
        </div>
        {/* <!-- ########### Abhohlort ########### --> */}
        <div className="single-model-search">
            <h3>
                Abhohlort auswählen
            </h3>
            <div className="model-select-icon">
                <select className="form-control">
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
            {/* <!-- Anzeigefenster für den Preis --> */}
            <div className="price-display" id="abholortPrice">
                Abholort Preis: 0 €
            </div>
        </div>
        {/* ... Weitere Komponenten ... */}
        {/* ########## Gesamtpreis Box ########## */}
        <div className="fixed-bar" id="fixed-bar">
          <div className="price-panel">
            <div id="totalPrice">
              <h2>
                Gesamtpreis: 0 €
              </h2>
            </div>
            {/* Hinzufügen der monatlichen Gesamtrate */}
            <div id="monthly-rate-display">
              <h3>
                Monatliche Rate: 0 €
              </h3>
            </div>
          </div>
        </div>
        {/* ########## Gesamtpreis Box ENDE ########## */}
      </div>
    );
  }
}

export default Konfig;
