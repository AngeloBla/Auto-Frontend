import React, { useState, useEffect } from 'react';
import Navabr from "./navbar";
import './style.css';
import styles from "./style.module1.css";
// import ReactDOM from "react-dom";

class Konfig extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.bodyColorRef = React.createRef();
        this.roofrackRef = React.createRef();
        this.hoodColorRef = React.createRef();
        this.roofColorRef = React.createRef();
        this.state = {
            selectedImage: "",
            lastFunctionCalled: null,
            zahlungsart: "leasing",
        };
    }
    // stellt sicher, dass beim Laden der Komponenten ein Bild geladen wird.
    componentDidMount() {
        this.loadCarImage();
    }
    handleZahlungsartChange = (event) => {
        this.setState({ zahlungsart: event.target.value });
    };
    // ########### Funktion AuswahlKarroseriefarbe verlinkung Bilder ###########
    loadCarImage = () => {
        var bodyColor = this.bodyColorRef.current.value;
        var imagePath;
        switch (bodyColor) {
            case "body-red":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg";
                break;
            case "body-blue":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_blau.jpg";
                break;
            case "body-yellow":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg";
                break;
            case "body-green":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_gruen.jpg";
                break;
            case "body-black":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_schwarz.jpg";
                break;
            case "body-white":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_wei%C3%9F.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        this.setState({
            selectedImage: imagePath,
            lastFunctionCalled: "loadCarImage",
        });
    };
    // ########### funktion Auswahl Motorhaubefarbe mit Bild verlinken ###########
    loadHoodImage = () => {
        var hoodColor = this.hoodColorRef.current.value;
        var imagePath;
        switch (hoodColor) {
            case "white-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_wei%C3%9F.jpg";
                break;
            case "blue-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_blau.jpg";
                break;
            case "green-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_gruen.jpg";
                break;
            case "red-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_rot.jpg";
                break;
            case "yellow-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg";
                break;
            case "black-hood":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_schwarz.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        this.setState({
            selectedImage: imagePath,
            lastFunctionCalled: "loadHoodImage",
        });
    };
    // ########## funktion Auswahl Dachfarbe mit Bild verlinken #########
    loadRoofColorImage = () => {
        var roofColor = this.roofColorRef.current.value;
        var imagePath;
        switch (roofColor) {
            case "standard-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dach.jpg";
                break;
            case "blue-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_blau.jpg";
                break;
            case "green-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gruen.jpg";
                break;
            case "red-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_rot.jpg";
                break;
            case "yellow-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gelb.jpg";
                break;
            case "black-roof":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_schwarz.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        this.setState({
            selectedImage: imagePath,
            lastFunctionCalled: "loadRoofColorImage",
        });
    };
    // ########## funktion Auswahl Dachträger mit Bild verlinken ##########
    loadroofrackImage = () => {
        // var roofrack = document.getElementById("roofrack").value;
        var roofrack = this.roofrackRef.current.value;
        var imagePath;
        switch (roofrack) {
            case "roof-rack0":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg";
                break;
            case "roof-rack1":
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dachtraeger.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        this.setState({
            selectedImage: imagePath,
            lastFunctionCalled: "loadroofrackImage",
        });
    };


    render() {
        return (
            <body>
                    <Navabr />
                    <div className={styles.container2}>
                        {/* <!-- ########### Bild aus auswahl ########## --> */}
                        <div className="fixed-image-panel">
                            <img
                                alt="Auto Bild"
                                id="selectedImage"
                                src={this.state.selectedImage}
                            />
                        </div>
                        {/* <!-- ########### Bild ENDE ########## --> */}
                    </div>
                    <div className={styles.container}>
                        <p align="center">!-!-! Work in Progress !-!-!</p>

                        <div className={styles.zahlungsmethode}>
                            <div className="left-panel">
                                <h2>
                                    Stelle dir dein Traum LandRover zusammen:
                                </h2>
                                <p>Bitte triff eine Auswahl</p>
                            </div>
                            {/* <!-- ########## Auswahl Zahlungart ########## --> */}
                            <div className="single-model-search">
                                <div
                                    className={styles.togglebutton}
                                    onclick="toggleElements()"
                                >
                                    ▼ Zahlungsoptionen
                                </div>
                                <div className={styles.collapsiblecontent}>
                                    <h3>Zahlungsart</h3>
                                    <div className="model-select-icon">
                                        <select
                                            className="form-control zahlungsart"
                                            onChange={
                                                this.handleZahlungsartChange
                                            }
                                        >
                                            <option value="leasing">
                                                Leasing
                                            </option>
                                            <option value="1xZahlung">
                                                1x Zahlung
                                            </option>
                                        </select>
                                    </div>
                                    {this.state.zahlungsart === "leasing" && (
                                        <div>
                                            {/* <!-- Laufzeit --> */}
                                            <div
                                                className="single-model-search"
                                                id="laufzeit-container"
                                            >
                                                <h4>Laufzeit (Monate)</h4>
                                                <div className="model-select-icon">
                                                    <input
                                                        className="form-control"
                                                        id="laufzeit"
                                                        max="60"
                                                        min="12"
                                                        required=""
                                                        type="number"
                                                    />
                                                </div>
                                            </div>
                                            {/* <!-- Laufleistung in km/Jahr --> */}
                                            <div
                                                className="single-model-search"
                                                id="laufleistung-container"
                                            >
                                                <h4>Laufleistung in km/Jahr</h4>
                                                <div className="model-select-icon">
                                                    <input
                                                        className="form-control"
                                                        id="laufleistung"
                                                        max="30000"
                                                        min="10000"
                                                        required=""
                                                        step="1000"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>
                                            {/* <!-- Anzahlung --> */}
                                            <div className="single-model-search">
                                                <h4>Anzahlung (Euro)</h4>
                                                <div
                                                    className="model-select-icon"
                                                    id="model-select-icon"
                                                >
                                                    <input
                                                        className="form-control"
                                                        id="anzahlung"
                                                        min="0"
                                                        step="1000"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <hr />
                                </div>
                            </div>
                        </div>
                        {/* <!-- ########## Zahlungsart ENDE ########## --> */}
                        {/* <!-- ################################################## --> */}
                        {/* <!-- ########## Auswahl Motor ########## --> */}
                        <div className="single-model-search">
                            <h3>Motor</h3>
                            <div className="model-select-icon">
                                <select className="form-control" id="motor">
                                    <option value="2.0-EcoBlue-XL">
                                        2.0 EcoBlue (Diesel Euro6) 125kW
                                        Extrakab. 4x4 XL 170 PS, 4x4-Antrieb 8,4
                                        l/100km | CO² komb.: 221 g/km
                                    </option>
                                    <option value="4.0-MagaTurbo-XL">
                                        4.0 S/C Spezial (Benzin) 257kW 4x4 XL
                                        350 PS, 4x4-Antrieb 16,5 l/100km | CO²
                                        komb.: xxl g/km
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="motorPrice">
                                Motor Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########## Auswahl Getriebe ########## --> */}
                        <div className="single-model-search">
                            <h3>Getriebe</h3>
                            <div className="model-select-icon">
                                <select className="form-control" id="getriebe">
                                    <option value="automatic">
                                        Automatikschaltung 6 Gang
                                    </option>
                                    <option value="manual">
                                        manuelle Schaltung 6 Gang
                                    </option>
                                    <option value="automatic-diff">
                                        Automatikschaltung 6 Gang mit
                                        Differentialgetriebe und Sperre
                                    </option>
                                    <option value="manual-diff">
                                        manuelle Schaltung 6 Gang mit
                                        Differentialgetriebe und Sperre
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="getriebePrice">
                                Getriebe Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ####### Auswahl Karosseriefarbe ######### --> */}
                        <div className="single-model-search">
                            <h3>Wähle die Karosseriefarbe</h3>
                            <select
                                className="form-select"
                                id="bodyColor"
                                ref={this.bodyColorRef}
                                onChange={this.loadCarImage}
                            >
                                <option value="body-red">Rot</option>
                                <option value="body-blue">Blau</option>
                                <option value="body-yellow">Gelb</option>
                                <option value="body-red">Rot</option>
                                <option value="body-green">olivegrün</option>
                                <option value="body-black">Schwarz</option>
                                <option value="body-white">Weiß</option>
                            </select>
                        </div>
                        {/* <!-- Anzeigefenster für den Preis --> */}
                        <div className="price-display" id="bodyColorPrice">
                            Außenfarbe Preis: 0 €
                        </div>

                        <hr />

                        {/* <!-- ####### Auswahl Motorhaubenfarbe ######## --> */}
                        <div className="single-model-search">
                            <h3>Motorhaube Farbe</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-select"
                                    id="hoodColor"
                                    ref={this.hoodColorRef}
                                    onChange={this.loadHoodImage}
                                >
                                    <option value="white-hood">Weiß</option>
                                    <option value="blue-hood">Blau</option>
                                    <option value="green-hood">
                                        olivegrün
                                    </option>
                                    <option value="red-hood">Rot</option>
                                    <option value="yellow-hood">Gelb</option>
                                    <option value="black-hood">Schwarz</option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="hoodColorPrice">
                                Motorhaube Farbe Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ####### Auswahl Dachfarbe ######### --> */}
                        <div className="single-model-search">
                            <h3>Dachfarbe</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-select"
                                    id="roofColor"
                                    ref={this.roofColorRef}
                                    onChange={this.loadRoofColorImage}
                                >
                                    <option value="standard-roof">
                                        standard Weiß
                                    </option>
                                    <option value="blue-roof">Blau</option>
                                    <option value="green-roof">
                                        olivegrün
                                    </option>
                                    <option value="red-roof">Rot</option>
                                    <option value="yellow-roof">Gelb</option>
                                    <option value="black-roof">Schwarz</option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="roofColorPrice">
                                Dachfarbe Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ####### Auswahl Dachträger ######### --> */}
                        <div className="single-model-search">
                            <h3>Dachträger</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-select"
                                    id="roofrack"
                                    ref={this.roofrackRef}
                                    onChange={this.loadroofrackImage}
                                >
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

                        <hr />

                        {/* <!-- ######## Auswahl getönte Scheiben ######### --> */}
                        <div className="single-model-search">
                            <h3>Getönte Scheiben</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-select"
                                    id="windowcolor"
                                    onChange="loadwindowcolorImage()"
                                >
                                    <option value="window0">keine</option>
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

                        <hr />

                        {/* <!-- ########## Auswahl Innenausstattung1 ########## --> */}
                        <div className="single-model-search">
                            <h3>Innenausstattung wählen</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-control"
                                    id="innenausstattung1"
                                >
                                    <option value="stoff-ebony">
                                        Stoff Ebony Sitzbezüge: Stoff Farbe
                                        Schwarz
                                    </option>
                                    <option value="leather">
                                        Leder Sitzbezüge: Leder Farbe Schwarz
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div
                                className="price-display"
                                id="innenausstattung1Price"
                            >
                                Innenausstattung 1 Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########### Auswahl Innenausstattung2 ########## --> */}
                        <div className="single-model-search">
                            <h3>Innenausstattung</h3>
                            <div className="model-select-icon">
                                <select
                                    className="form-control"
                                    id="innenausstattung2"
                                >
                                    <option value="rubber-floor-mat">
                                        Gummifussmatte
                                    </option>
                                    <option value="fabric-floor-mat">
                                        Stofffussmatte
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div
                                className="price-display"
                                id="innenausstattung2Price"
                            >
                                Innenausstattung 2 Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ######## Auswahl Service Produkte ######### --> */}
                        <div className="single-model-search">
                            <h3>ServiceProdukte</h3>
                            <div className="model-select-icon">
                                <div id="service">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="from-control"
                                            id="wartung_verschleiss"
                                            value="wartung_verschleiss"
                                        />
                                        Wartungsservice
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="from-control"
                                            id="ueberfuehrung"
                                            value="ueberfuehrung"
                                        />
                                        Überführungsdienst
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="from-control"
                                            id="kfz_versicherung"
                                            value="kfz_versicherung"
                                        />
                                        KFZ-Versicherung
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="from-control"
                                            id="zulassungsservice"
                                            value="zulassungsservice"
                                        />
                                        Zulassungsservice
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="from-control"
                                            id="mobilitaetsgarantie"
                                            value="mobilitaetsgarantie"
                                        />
                                        Mobilitätsgarantie
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="servicePrice">
                                Serviceprodukte Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########### Zusatzoptionen ########### --> */}
                        <div className="single-model-search">
                            <h3>Zusatzoptionen</h3>
                            <div className="model-select-icon">
                                <div  className={styles.zusatz} onChange="loadzusatzImage()">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="hitch"
                                            value="hitch"
                                        />
                                        Anhängevorrichtung, 13 polig
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="underbody-protection"
                                            value="underbody-protection"
                                        />
                                        Unterbodenschutz auf Wachsbasis
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="mudguard"
                                            value="mudguard"
                                        />
                                        Spritzschutz
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="zusatzPrice">
                                Zusatzoption Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########### Auswahl Reifen ########### --> */}
                        <div className="single-model-search">
                            <h3>Reifen</h3>
                            <div className={styles.reifen}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="all-season-tire"
                                        // checked={ganzjahresChecked}
                                        // onChange={handleCheckboxChange}
                                        // disabled={sommerChecked || winterChecked}
                                    />
                                    Ganzjahresreifenset
                                </label>
                                <br/>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="sommer"
                                        // checked={sommerChecked}
                                        // onChange={handleCheckboxChange}
                                        // disabled={ganzjahresChecked}
                                    />
                                    Sommerreifenset
                                </label>
                                <br/>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="winter"
                                        // checked={winterChecked}
                                        // onChange={handleCheckboxChange}
                                        // disabled={ganzjahresChecked}
                                    />
                                    Winterreifenset
                                </label>
                                {/*<img id="selectedImage" src={imagePath} alt="Reifen" onError={() => setImagePath('https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png')} /> */}
                            </div>

                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="paketePrice">
                                Pakete Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########### Pakete ########### --> */}
                        <div className="single-model-search">
                            <h3>Pakete</h3>
                            <div className="model-select-icon">
                                <select className="form-control" id="pakete">
                                    <option value="flotten-paket-1">
                                        Flotten-Paket 1 mit: Bodenbelag
                                        Plastik/Gummi, Verstärktes Fahrwerk
                                    </option>
                                    <option value="komfort-paket-2">
                                        Komfort-Paket 2 mit: Spannungskonverter
                                        400 Watt, Schaltersatz - 6 Schalter
                                    </option>
                                    <option value="outdoor-paket-2">
                                        Outdoor-Paket 3 mit:
                                        Unterbodenschutzvorrichtung an
                                        Kraftstofftank und Motor
                                    </option>
                                    <option value="winter-paket-1">
                                        Winter-Paket 1 mit: Lenkrad beheizt,
                                        Fahrersitz und Beifahrersitz Vordersitze
                                        mit Sitzheizung, Beheizbare
                                        Windschutzscheibe, Klimaanlage, manuell
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="paketePrice">
                                Pakete Preis: 0 €
                            </div>
                        </div>

                        <hr />

                        {/* <!-- ########### Abhohlort ########### --> */}
                        <div className="single-model-search">
                            <h3>Abhohlort auswählen</h3>
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
                                    <option value="duesseldorf">
                                        Düsseldorf
                                    </option>
                                    <option value="mainz">Mainz</option>
                                    <option value="saarbruecken">
                                        Saarbrücken
                                    </option>
                                    <option value="dresden">Dresden</option>
                                    <option value="dresden">
                                        Lieferung bis zur Haustür
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="abholortPrice">
                                Abholort Preis: 0 €
                            </div>
                        </div>

                        {/* <!-- ########## Gesamtpreis Box ########## --> */}
                        <div className={styles.fixedbar} id="fixed-bar">
                            <div className={styles.pricepanel}>
                                <div id="totalPrice">
                                    <h2>Gesamtpreis: 0 €</h2>
                                </div>
                                {/* <!-- Hinzufügen der monatlichen Gesamtrate --> */}
                                <div id="monthly-rate-display">
                                    <h3>Monatliche Rate: 0 €</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ########## Gesmatpreis Box ENDE ########## --> */}
                    </div>
            </body>
        );
    }
}

export default Konfig;