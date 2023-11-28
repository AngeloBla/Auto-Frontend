import React from "react";
import Navbar from "./navbar";
import "./style.css";
import styles from "./style.module.css"; // import ReactDOM from "react-dom";
import Footer from "./footer";

class Konfig extends React.Component {
        state = {
            ...this.state,
            showSelectedOptions: false, // State to control the visibility of the container
        };

        // Toggle function for showing/hiding the selected options
        toggleSelectedOptions = () => {
            this.setState({ showSelectedOptions: !this.state.showSelectedOptions });
        };

        // Function to render the selected options
        renderSelectedOptions = () => {
            if (!this.state.showSelectedOptions) {
                return null;
            }
            return (
                <div>
                    {/* Loop through selected options and render them with images */}
                    {/* Replace this with your actual logic for rendering selected options */}
                </div>
            );
        };

        render() {
            return (
                <div>
                    {/* Existing component render logic */}
                    <button onClick={this.toggleSelectedOptions}>Zeige ausgewählte Optionen</button>
                    {this.renderSelectedOptions()}
                    {/* Rest of the render logic */}
                </div>
            );
        }
    state = {};
    constructor(props) {
        super(props);
        this.bodyColorRef = React.createRef();
        this.roofrackRef = React.createRef();
        this.hoodColorRef = React.createRef();
        this.roofColorRef = React.createRef();
        this.windowcolorRef = React.createRef();
        this.state = {
            selectedImage:
                "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg",
            lastFunctionCalled: null,
            zahlungsart: "leasing",
            motorPreis: 10000,
            getriebePreis: 6000,
            karosserieFarbePreis: 20000,
            motorhaubeFarbePreis: 0,
            dachFarbePreis: 0,
            dachtraegerPreis: 0,
            getoenteScheibenPreis: 0,
            innenausstattung1Preis: 500,
            innenausstattung2Preis: 0,
            serviceProduktePreis: 0,
            zusatzoptionenPreis: 0,
            reifenPreis: 0,
            paketePreis: 0,
            abholortPreis: 1050,
            totalPreis: 0,
            toggleZahlungsart: false,
            ganzjahresChecked: false,
            sommerChecked: false,
            winterChecked: false,
        };
        this.handleMotorChange = this.handleMotorChange.bind(this);
        this.handleGetriebeChange = this.handleGetriebeChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }
    // stellt sicher, dass beim Laden der Komponenten ein Bild geladen wird.
    componentDidMount() {
        // this.loadCarImage();
    }
    toggleZahlungsart = () => {
        // Funktion fuer den Zahlungsoptionen Button
        !this.state.toggleZahlungsart
            ? this.setState({ toggleZahlungsart: true })
            : this.setState({ toggleZahlungsart: false });
    };
    handleZahlungsartChange = (event) => {
        const zahlungsart = event.target.value;
        if (zahlungsart === 'leasing' && !this.state.laufzeit) {
            // Warnung anzeigen oder die Eingabe des Feldes "Laufzeit" erzwingen
            alert('Bei Zahlungsart Leasing ist die Laufzeit ein Pflichtfeld, mind 12 Monate, max 60 Monate.');
        }
        // Funktion fuer die Auswahl der Zahlungsart und damit einblenden der Optionen
        this.setState({ zahlungsart: event.target.value });
    };
    handleMotorChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ motorPreis: preis }, this.calculateTotal);
    }
    handleGetriebeChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ getriebePreis: preis }, this.calculateTotal);
    }

    // ########### Funktion AuswahlKarroseriefarbe verlinkung Bilder ###########
    loadCarImage = (event) => {
        var bodyColor = this.bodyColorRef.current.value;
        var imagePath;
        switch (bodyColor) {
            case "body-red":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg";
                break;
            case "body-blue":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_blau.jpg";
                break;
            case "body-yellow":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg";
                break;
            case "body-green":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_gruen.jpg";
                break;
            case "body-black":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_schwarz.jpg";
                break;
            case "body-white":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_wei%C3%9F.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                karosserieFarbePreis: preis,
                selectedImage: imagePath,
                lastFunctionCalled: "loadCarImage",
            },
            this.calculateTotal
        );
    }
    // ########### funktion Auswahl Motorhaubefarbe mit Bild verlinken ###########
    loadHoodImage = (event) => {
        var hoodColor = this.hoodColorRef.current.value;
        var imagePath;
        switch (hoodColor) {
            case "standard-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg";
                break;
            case "white-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_wei%C3%9F.jpg";
                break;
            case "blue-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_blau.jpg";
                break;
            case "green-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_gruen.jpg";
                break;
            case "red-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_rot.jpg";
                break;
            case "yellow-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg";
                break;
            case "black-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/motorhaube_schwarz.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                selectedImage: imagePath,
                lastFunctionCalled: "loadHoodImage",
                motorhaubeFarbePreis: preis,
            },
            this.calculateTotal
        );
    }
    // ########## funktion Auswahl Dachfarbe mit Bild verlinken #########
    loadRoofColorImage = (event) => {
        var roofColor = this.roofColorRef.current.value;
        var imagePath;
        switch (roofColor) {
            case "standard-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dach.jpg";
                break;
            case "blue-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_blau.jpg";
                break;
            case "green-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gruen.jpg";
                break;
            case "red-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_rot.jpg";
                break;
            case "yellow-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_gelb.jpg";
                break;
            case "black-roof":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/dach_schwarz.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                selectedImage: imagePath,
                lastFunctionCalled: "loadRoofColorImage",
                dachFarbePreis: preis,
            },
            this.calculateTotal
        );
    }
    // ########## funktion Auswahl Dachträger mit Bild verlinken ##########
    loadroofrackImage = (event) => {
        var roofrack = this.roofrackRef.current.value;
        var imagePath;
        switch (roofrack) {
            case "roof-rack0":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg";
                break;
            case "roof-rack1":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dachtraeger.jpg";
                break;
            default:
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png";
        }
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                selectedImage: imagePath,
                lastFunctionCalled: "loadroofrackImage",
                dachtraegerPreis: preis,
            },
            this.calculateTotal
        );
    }
    // ########## funktion getönte Scheiben mit Bild verlinken ##########
    loadwindowcolorImage = (event) => {
        var windowcolor = event.target.value;
        var imagePath;
        switch (windowcolor) {
            case "window0":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/scheibe.jpg";
                break;
            case "window20":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/scheibe_20.jpg";
                break;
            case "window40":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/scheibe_40.jpg";
                break;
            case "window80":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/scheibe_80.jpg";
                break;
            }
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                selectedImage: imagePath,
                lastFunctionCalled: "loadwindowcolorImage",
                getoenteScheibenPreis: preis,
            },
            this.calculateTotal
        );
    }
    handleInnenausstattung1Change = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ innenausstattung1Preis: preis }, this.calculateTotal);
    };
    handleInnenausstattung2Change = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ innenausstattung2Preis: preis }, this.calculateTotal);
    };
    handlePaketChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ paketePreis: preis }, this.calculateTotal);
    };
    handleAbholortChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ abholortPreis: preis }, this.calculateTotal);
    };
    handleCheckboxChange = (event) => {
        //Funktion für die Reifencheckboxen
        const { name, checked } = event.target;

        this.setState({
            [`${name}Checked`]: checked,
        });
    };
    handleButtonClick = () => {
        // Logik, die ausgeführt wird, wenn der Button geklickt wird
        console.log("Button wurde geklickt!");
    };
    calculateTotal() {
        const totalPreis =
            Number(this.state.motorPreis) +
            Number(this.state.getriebePreis) +
            Number(this.state.karosserieFarbePreis) +
            Number(this.state.motorhaubeFarbePreis) +
            Number(this.state.dachFarbePreis) +
            Number(this.state.dachtraegerPreis) +
            Number(this.state.getoenteScheibenPreis) +
            Number(this.state.innenausstattung1Preis) +
            Number(this.state.innenausstattung2Preis) +
            Number(this.state.serviceProduktePreis) +
            Number(this.state.zusatzoptionenPreis) +
            Number(this.state.reifenPreis) +
            Number(this.state.paketePreis) +
            Number(this.state.abholortPreis);
        this.setState({ totalPreis });
    }
    render() {
        // const { ganzjahresChecked, sommerChecked, winterChecked } = this.state;
        return (
            <main>
                <div>
                    <Navbar />
                    <div className={styles.parentContainer}>
                        <div className={styles.container}>
                            <div className={styles.zahlungsmethode}>
                                <div className="left-panel">
                                    <h2>
                                        Stelle dir deinen TraumAstley zusammen:
                                    </h2>
                                    <p>Bitte triff eine Auswahl</p>
                                </div>
                                {/* <!-- ########## Auswahl Zahlungart ########## --> */}
                                <div className="single-model-search">
                                    <div
                                        className={styles.togglebutton}
                                        onClick={this.toggleZahlungsart}
                                    >
                                        ▼ Zahlungsoptionen
                                    </div>
                                    {this.state.toggleZahlungsart && (
                                        <div
                                            className={
                                                styles.collapsiblecontent
                                            }
                                        >
                                            <h3>Zahlungsart</h3>
                                            <div className="model-select-icon">
                                                <select
                                                    className="form-control zahlungsart"
                                                    onChange={
                                                        this
                                                            .handleZahlungsartChange
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
                                            {this.state.zahlungsart ===
                                                "leasing" && (
                                                <div>
                                                    {/* <!-- Laufzeit --> */}
                                                    <div
                                                        className="single-model-search"
                                                        id="laufzeit-container"
                                                    >
                                                        <h4>
                                                            Laufzeit (Monate)
                                                        </h4>
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
                                                        <h4>
                                                            Laufleistung in
                                                            km/Jahr
                                                        </h4>
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
                                                        <h4>
                                                            Anzahlung (Euro)
                                                        </h4>
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
                                    )}
                                </div>
                            </div>
                            {/* <!-- ########## Zahlungsart ENDE ########## --> */}
                            {/* <!-- ################################################## --> */}
                            {/* <!-- ########## Auswahl Motor ########## --> */}
                            <div className="single-model-search">
                                <h3>Motor</h3>
                                <div className="model-select-icon">
                                    <select
                                        className="form-control"
                                        id="motor"
                                        onChange={this.handleMotorChange}
                                    >
                                        <option
                                            value="2.0-EcoBlue-XL"
                                            data-preis="10000"
                                        >
                                            2.0 EcoBlue (Diesel Euro6) 125kW
                                            Extrakab. 4x4 XL 170 PS
                                        </option>
                                        <option
                                            value="4.0-MagaTurbo-XL"
                                            data-preis="20000"
                                        >
                                            4.0 S/C Spezial (Benzin) 257kW 4x4
                                            XL 350 PS
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="motorPrice">
                                    Motor Preis: {this.state.motorPreis} €
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########## Auswahl Getriebe ########## --> */}
                            <div className="single-model-search">
                                <h3>Getriebe</h3>
                                <div className="model-select-icon">
                                    <select
                                        className="form-control"
                                        id="getriebe"
                                        onChange={this.handleGetriebeChange}
                                    >
                                        <option
                                            value="automatic"
                                            data-preis="6000"
                                        >
                                            Automatikschaltung 6 Gang
                                        </option>
                                        <option
                                            value="manual"
                                            data-preis="4500"
                                        >
                                            manuelle Schaltung 5 Gang
                                        </option>
                                        <option
                                            value="automatic-diff"
                                            data-preis="7000"
                                        >
                                            Automatikschaltung 6 Gang mit
                                            Differentialgetriebe und Sperre
                                        </option>
                                        <option
                                            value="manual-diff"
                                            data-preis="5500"
                                        >
                                            manuelle Schaltung 6 Gang mit
                                            Differentialgetriebe und Sperre
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="getriebePrice"
                                >
                                    Getriebe Preis: {this.state.getriebePreis} €
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
                                    <option value="body-red" data-preis="20000">
                                        Rot
                                    </option>
                                    <option
                                        value="body-blue"
                                        data-preis="20000"
                                    >
                                        Blau
                                    </option>
                                    <option
                                        value="body-yellow"
                                        data-preis="20000"
                                    >
                                        Gelb
                                    </option>
                                    <option
                                        value="body-green"
                                        data-preis="20000"
                                    >
                                        Olivegrün
                                    </option>
                                    <option
                                        value="body-black"
                                        data-preis="20000"
                                    >
                                        Schwarz
                                    </option>
                                    <option
                                        value="body-white"
                                        data-preis="20000"
                                    >
                                        Weiß
                                    </option>
                                </select>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="bodyColorPrice">
                                Außenfarbe Preis:
                                {this.state.karosserieFarbePreis} €
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
                                        <option
                                            value="standard-hood"
                                            data-preis="0"
                                        >
                                            Standard
                                        </option>
                                        <option
                                            value="white-hood"
                                            data-preis="800"
                                        >
                                            Weiß
                                        </option>
                                        <option
                                            value="blue-hood"
                                            data-preis="800"
                                        >
                                            Blau
                                        </option>
                                        <option
                                            value="green-hood"
                                            data-preis="800"
                                        >
                                            olivegrün
                                        </option>
                                        <option
                                            value="red-hood"
                                            data-preis="800"
                                        >
                                            Rot
                                        </option>
                                        <option
                                            value="yellow-hood"
                                            data-preis="800"
                                        >
                                            Gelb
                                        </option>
                                        <option
                                            value="black-hood"
                                            data-preis="800"
                                        >
                                            Schwarz
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="hoodColorPrice"
                                >
                                    Motorhaube Farbe Preis:
                                    {this.state.motorhaubeFarbePreis} €
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
                                        <option
                                            value="standard-roof"
                                            data-preis="0"
                                        >
                                            standard Weiß
                                        </option>
                                        <option
                                            value="blue-roof"
                                            data-preis="800"
                                        >
                                            Blau
                                        </option>
                                        <option
                                            value="green-roof"
                                            data-preis="800"
                                        >
                                            olivegrün
                                        </option>
                                        <option
                                            value="red-roof"
                                            data-preis="800"
                                        >
                                            Rot
                                        </option>
                                        <option
                                            value="yellow-roof"
                                            data-preis="800"
                                        >
                                            Gelb
                                        </option>
                                        <option
                                            value="black-roof"
                                            data-preis="800"
                                        >
                                            Schwarz
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="roofColorPrice"
                                >
                                    Dachfarbe Preis: {this.state.dachFarbePreis}
                                    €
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
                                        <option
                                            value="roof-rack0"
                                            data-preis="0"
                                        >
                                            kein Dachträger
                                        </option>
                                        <option
                                            value="roof-rack1"
                                            data-preis="1000"
                                        >
                                            standard Schwarz
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="roofrackPrice"
                                >
                                    Dachträger Preis:
                                    {this.state.dachtraegerPreis} €
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
                                        ref={this.windowRef}
                                        onChange={this.loadwindowcolorImage}
                                    >
                                        <option value="window0" data-preis="0">
                                            keine
                                        </option>
                                        <option
                                            value="window20"
                                            data-preis="400"
                                        >
                                            20 % getönte Scheiben
                                        </option>
                                        <option
                                            value="window40"
                                            data-preis="600"
                                        >
                                            40 % getönte Scheiben
                                        </option>
                                        <option
                                            value="window80"
                                            data-preis="1100"
                                        >
                                            80 % getönte Scheiben
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="windowcolorPrice"
                                >
                                    Getönte Scheiben Preis:
                                    {this.state.getoenteScheibenPreis} €
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
                                        onChange={
                                            this.handleInnenausstattung1Change
                                        }
                                    >
                                        <option
                                            value="stoff-ebony"
                                            data-preis="500"
                                        >
                                            Stoff Ebony Sitzbezüge: Stoff Farbe
                                            Schwarz
                                        </option>
                                        <option
                                            value="leather"
                                            data-preis="2000"
                                        >
                                            Leder Sitzbezüge: Leder Farbe
                                            Schwarz
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="innenausstattung1Price"
                                >
                                    Innenausstattung1 Preis:
                                    {this.state.innenausstattung1Preis} €
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
                                        onChange={
                                            this.handleInnenausstattung2Change
                                        }
                                    >
                                        <option
                                            value="rubber-floor-mat"
                                            data-preis="0"
                                        >
                                            Gummifussmatte
                                        </option>
                                        <option
                                            value="fabric-floor-mat"
                                            data-preis="100"
                                        >
                                            Stofffussmatte
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="innenausstattung2Price"
                                >
                                    Innenausstattung 2 Preis:
                                    {this.state.innenausstattung2Preis} €
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
                                            Wartungsservice  &nbsp;<span className="small-text">  (3 Jahre) 165,00 €</span>
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="kfz_versicherung"
                                                value="kfz_versicherung"
                                            />
                                            KFZ-Versicherung &nbsp;<span className="small-text"> (2 Jahre) 120,00 €</span>
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="zulassungsservice"
                                                value="zulassungsservice"
                                            />
                                            Zulassungsservice &nbsp; <span className="small-text"> 25,00 €</span>
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="mobilitaetsgarantie"
                                                value="mobilitaetsgarantie"
                                            />
                                            Mobilitätsgarantie &nbsp;<span className="small-text"> (2 Jahre) 160,00 €</span>
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="servicePrice"
                                >
                                    Serviceprodukte Preis: 0 €
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Zusatzoptionen ########### --> */}
                            <div className="single-model-search">
                                <h3>Zusatzoptionen</h3>
                                <div className="model-select-icon">
                                    {/* <div  className={styles.zusatz} onChange={loadzusatzImage}> */}
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="hitch"
                                            value="hitch"
                                        />
                                        Anhängevorrichtung, 13 polig &nbsp;<span className="small-text"> 450,00 €</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="underbody-protection"
                                            value="underbody-protection"
                                        />
                                        Unterbodenschutz auf Wachsbasis &nbsp;<span className="small-text"> 470,00 €</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="mudguard"
                                            value="mudguard"
                                        />
                                        Spritzschutz &nbsp;<span className="small-text"> 370,00 €</span>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="zusatzPrice">
                                Zusatzoption Preis: 0 €
                            </div>
                            <hr />

                            {/* <!-- ########### Auswahl Reifen ########### --> */}
                            <div className="single-model-search">
                                <h3>Reifen</h3>
                                <div className={styles.reifen}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="ganzjahres"
                                            checked={
                                                this.state.ganzjahresChecked
                                            }
                                            onChange={this.handleCheckboxChange}
                                            disabled={
                                                this.state.sommerChecked ||
                                                this.state.winterChecked
                                            }
                                        />
                                        Ganzjahresreifenset&nbsp;<span className="small-text"> 1100,00 €</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="sommer"
                                            checked={this.state.sommerChecked}
                                            onChange={this.handleCheckboxChange}
                                            disabled={
                                                this.state.ganzjahresChecked
                                            }
                                        />
                                        Sommerreifenset&nbsp;<span className="small-text"> 650,00 €</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="winter"
                                            checked={this.state.winterChecked}
                                            onChange={this.handleCheckboxChange}
                                            disabled={
                                                this.state.ganzjahresChecked
                                            }
                                        />
                                        Winterreifenset&nbsp;<span className="small-text"> 700,00 €</span>
                                    </label>
                                    {/*<img id="selectedImage" src={imagePath} alt="Reifen" onError={() => setImagePath('https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png')} /> */}
                                </div>

                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="reifenPrice">
                                    Reifen Preis: 0 €
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Pakete ########### --> */}
                            <div className="single-model-search">
                                <h3>Pakete</h3>
                                <div className="model-select-icon">
                                    <select
                                        className="form-control"
                                        id="pakete"
                                        onChange={this.handlePaketChange}
                                    >
                                        <option
                                            value="kein-paket"
                                            data-preis="0"
                                        >
                                            Kein Paket ausgewählt
                                        </option>
                                        <option
                                            value="flotten-paket-1"
                                            data-preis="1000"
                                        >
                                            Flotten-Paket 1 mit: Bodenbelag
                                            Plastik/Gummi, Verstärktes Fahrwerk
                                        </option>
                                        <option
                                            value="komfort-paket-2"
                                            data-preis="4000"
                                        >
                                            Komfort-Paket 2 mit:
                                            Spannungskonverter 400 Watt,
                                            Schaltersatz - 6 Schalter
                                        </option>
                                        <option
                                            value="outdoor-paket-2"
                                            data-preis="5000"
                                        >
                                            Outdoor-Paket 3 mit:
                                            Unterbodenschutzvorrichtung an
                                            Kraftstofftank und Motor
                                        </option>
                                        <option
                                            value="winter-paket-1"
                                            data-preis="8000"
                                        >
                                            Winter-Paket 1 mit: Lenkrad beheizt,
                                            Fahrersitz und Beifahrersitz
                                            Vordersitze mit Sitzheizung,
                                            Beheizbare Windschutzscheibe,
                                            Klimaanlage, manuell
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="paketePrice">
                                    Pakete Preis: {this.state.paketePreis} €
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Abhohlort ########### --> */}
                            <div className="single-model-search">
                                <h3>Abhohlort auswählen</h3>
                                <div className="model-select-icon">
                                    <select 
                                        className="form-control"
                                        id="abhohlort"
                                        onChange={this.handleAbholortChange}
                                    >
                                        <option value="muenchen" data-preis="1050">
                                            München
                                        </option>
                                        <option value="stuttgart" data-preis="1100">
                                            Stuttgart
                                        </option>
                                        <option value="berlin" data-preis="1500">
                                            Berlin
                                        </option>
                                        <option value="potsdam" data-preis="1500">
                                            Potsdam
                                        </option>
                                        <option value="bremen" data-preis="1500">
                                            Bremen
                                        </option>
                                        <option value="hamburg" data-preis="1600">
                                            Hamburg
                                        </option>
                                        <option value="wiesbaden" data-preis="1100">
                                            Wiesbaden
                                        </option>
                                        <option value="schwerin" data-preis="1500">
                                            Schwerin
                                        </option>
                                        <option value="hannover" data-preis="1400">
                                            Hannover
                                        </option>
                                        <option value="duesseldorf" data-preis="1400">
                                            Düsseldorf
                                        </option>
                                        <option value="mainz" data-preis="1100">
                                            Mainz
                                        </option>
                                        <option value="saarbruecken" data-preis="1100">
                                            Saarbrücken
                                        </option>
                                        <option value="dresden" data-preis="1100">
                                            Dresden
                                        </option>
                                        <option value="freihaus" data-preis="1600">
                                            Lieferung bis zur Haustür
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="abholortPrice"
                                >
                                    Überführungskosten inkl MwSt: {this.state.abholortPreis} €
                                </div>
                            </div>
                        {/* </div> */}


                            {/* <!-- ########## Gesamtpreis Box ########## --> */}
                            <div className={styles.fixedbar} id="fixed-bar">
                                <div className={styles.pricepanel}>
                                    <div>
                                        <button className="meinButton" onClick={this.handleButtonClick}>Zum Angebot</button>
                                    </div>
                                    <div id="totalPrice">
                                        <h2>
                                            Gesamtpreis: {this.state.totalPreis}
                                            €
                                        </h2>
                                    </div>
                                    {/* <!-- Hinzufügen der monatlichen Gesamtrate --> */}
                                    <div id="monthly-rate-display">
                                        <h3>Monatliche Rate: 0 €</h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ########## Gesmatpreis Box ENDE ########## --> */}
                        </div>
                        <div className={styles.container2}>
                            {/* <!-- ########### Bild aus auswahl ########## --> */}
                            <div className="fixed-image-panel">
                                <img
                                    alt="Auto Bild"
                                    id="selectedImage"
                                    src={this.state.selectedImage}
                                    // onLoad={(e) => {
                                    //     e.target.style.height = "auto";
                                    //     e.target.style.width = "100%";
                                    // }}
                                />
                            </div>
                            {/* <!-- ########### Bild ENDE ########## --> */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default Konfig;