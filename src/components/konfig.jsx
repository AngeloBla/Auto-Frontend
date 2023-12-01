import React from "react";
<<<<<<< HEAD
import Navbar from "./navbar";
import "./style.css";
import styles from "./style.module.css"; // import ReactDOM from "react-dom";
import Footer from "./footer";
import AWS from 'aws-sdk';

AWS.config.update({
    region: 'Ihre-Region',
    // Weitere Konfiguration falls nötig
  });

class Konfig extends React.Component {

    formatPrice(value) {
        return new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }

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
=======
import Navabr from "./navbar";
import "./style.css";
import styles from "./style.module.css";
import Footer from "./footer";

class Konfig extends React.Component {
>>>>>>> main
    state = {};
    constructor(props) {
        super(props);
        this.bodyColorRef = React.createRef();
        this.roofrackRef = React.createRef();
        this.hoodColorRef = React.createRef();
        this.roofColorRef = React.createRef();
<<<<<<< HEAD
        this.windowcolorRef = React.createRef();

        this.state = {
            selectedImage: "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg",
=======
        this.state = {
            selectedImage:
                "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/farben/karosserie_rot.jpg",
>>>>>>> main
            lastFunctionCalled: null,
            zahlungsart: "leasing",
            motorPreis: 10000,
            getriebePreis: 6000,
            karosserieFarbePreis: 20000,
            motorhaubeFarbePreis: 0,
            dachFarbePreis: 0,
            dachtraegerPreis: 0,
            getoenteScheibenPreis: 0,
<<<<<<< HEAD
            innenausstattung1Preis: 500,
=======
            innenausstattung1Preis: 0,
>>>>>>> main
            innenausstattung2Preis: 0,
            serviceProduktePreis: 0,
            zusatzoptionenPreis: 0,
            reifenPreis: 0,
            paketePreis: 0,
<<<<<<< HEAD
            abholortPreis: 1050,
=======
            abholortPreis: 0,
>>>>>>> main
            totalPreis: 0,
            toggleZahlungsart: false,
            ganzjahresChecked: false,
            sommerChecked: false,
            winterChecked: false,
<<<<<<< HEAD
            selectedOptions: {} // Initialisiere selectedOptions als leeres Objekt
        };

        this.handleMotorChange = this.handleMotorChange.bind(this);
        this.handleGetriebeChange = this.handleGetriebeChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        // ... (andere Methoden, die gebunden werden müssen)
    }

=======
        };
        this.handleMotorChange = this.handleMotorChange.bind(this);
        this.handleGetriebeChange = this.handleGetriebeChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }
>>>>>>> main
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
<<<<<<< HEAD
        const zahlungsart = event.target.value;
        if (zahlungsart === 'leasing' && !this.state.laufzeit) {
            // Warnung anzeigen oder die Eingabe des Feldes "Laufzeit" erzwingen
            alert('Bei Zahlungsart Leasing ist die Laufzeit ein Pflichtfeld, mind 12 Monate, max 60 Monate.');
        }
=======
>>>>>>> main
        // Funktion fuer die Auswahl der Zahlungsart und damit einblenden der Optionen
        this.setState({ zahlungsart: event.target.value });
    };
    handleMotorChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
<<<<<<< HEAD
        const preis = parseInt(selectedOption.getAttribute("data-preis"), 10);
=======
        const preis = selectedOption.getAttribute("data-preis");
>>>>>>> main
        this.setState({ motorPreis: preis }, this.calculateTotal);
    }
    handleGetriebeChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
<<<<<<< HEAD
        const preis = parseInt(selectedOption.getAttribute("data-preis"), 10);
=======
        const preis = selectedOption.getAttribute("data-preis");
>>>>>>> main
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
<<<<<<< HEAD
        const preis = parseInt(selectedOption.getAttribute("data-preis"), 10);

        this.setState({
            karosserieFarbePreis: preis,
            selectedImage: imagePath,
            lastFunctionCalled: "loadCarImage",
            }, this.calculateTotal);
        }
=======
        const preis = selectedOption.getAttribute("data-preis");
        this.setState(
            {
                karosserieFarbePreis: preis,
                selectedImage: imagePath,
                lastFunctionCalled: "loadCarImage",
            },
            this.calculateTotal
        );
    };
>>>>>>> main
    // ########### funktion Auswahl Motorhaubefarbe mit Bild verlinken ###########
    loadHoodImage = (event) => {
        var hoodColor = this.hoodColorRef.current.value;
        var imagePath;
        switch (hoodColor) {
<<<<<<< HEAD
            case "standard-hood":
                imagePath =
                    "https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg";
                break;
=======
>>>>>>> main
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> main
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> main
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
<<<<<<< HEAD
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
=======
    };
    // ########## funktion Auswahl getönte Scheiben mit Bild verlinken ##########
    handleWindowcolorChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ getoenteScheibenPreis: preis }, this.calculateTotal);
    };
>>>>>>> main
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
<<<<<<< HEAD
    handleAbholortChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const preis = selectedOption.getAttribute("data-preis");
        this.setState({ abholortPreis: preis }, this.calculateTotal);
    };
    handleCheckboxChange = (event, optionName, price) => {
        const checked = event.target.checked;
        const id = event.target.id;
        const dataset = event.target.dataset;
    
        this.setState(prevState => {
            const selectedOptions = { ...prevState.selectedOptions };
            let reifenPreis = prevState.reifenPreis;
            let preis = parseInt(dataset.preis, 10);
    
            // Update für Reifenoptionen
            if (optionName === 'ganzjahres' || optionName === 'sommer' || optionName === 'winter') {
                if (checked) {
                    selectedOptions[id] = preis;
                    reifenPreis += parseInt(preis, 10);
                } else {
                    reifenPreis -= parseInt(selectedOptions[id] || 0, 10);
                    delete selectedOptions[id];
                }
        
                if (id === 'ganzjahres' && checked) {
                    ['sommer', 'winter'].forEach(reifen => {
                        if (selectedOptions[reifen]) {
                            reifenPreis -= parseInt(selectedOptions[reifen] || 0, 10);
                            delete selectedOptions[reifen];
                        }
                    });
                } else if ((id === 'sommer' || id === 'winter') && checked && selectedOptions['ganzjahres']) {
                    reifenPreis -= parseInt(selectedOptions['ganzjahres'] || 0, 10);
                    delete selectedOptions['ganzjahres'];
                }
            }
            // Update für Service- und Zusatzoptionen
            else {
                if (checked) {
                    selectedOptions[id] = preis;
    
                    if (optionName === 'service') {
                        prevState.serviceProduktePreis += preis;
                    } else {
                        prevState.zusatzoptionenPreis += preis;
                    }
                } else {
                    if (optionName === 'service') {
                        prevState.serviceProduktePreis -= selectedOptions[id] || 0;
                    } else {
                        prevState.zusatzoptionenPreis -= selectedOptions[id] || 0;
                    }
                    delete selectedOptions[id];
                }
            }
    
            return {
                ...prevState,
                selectedOptions,
                reifenPreis,
                serviceProduktePreis: prevState.serviceProduktePreis,
                zusatzoptionenPreis: prevState.zusatzoptionenPreis,
                [`${optionName}Checked`]: checked // Zustand der Checkbox aktualisieren
            };
        }, this.calculateTotal);
    };
    
    
    
    

    
    
    




    calculateTotal() {
        const totalPreis = [
            this.state.motorPreis,
            this.state.getriebePreis,
            this.state.karosserieFarbePreis,
            this.state.motorhaubeFarbePreis,
            this.state.dachFarbePreis,
            this.state.dachtraegerPreis,
            this.state.getoenteScheibenPreis,
            this.state.innenausstattung1Preis,
            this.state.innenausstattung2Preis,
            this.state.serviceProduktePreis,
            this.state.zusatzoptionenPreis,
            this.state.paketePreis,
            this.state.abholortPreis,
            this.state.reifenPreis
        ].reduce((sum, value) => sum + (isNaN(value) ? 0 : Number(value)), 0);
    
        this.setState({ totalPreis });
    }
    // handlebutton mit aws update dynamo
    // const docClient = new AWS.DynamoDB.DocumentClient();

// handleButtonClick = () => {
//   const item = {
//     TableName: 'Ihr-Tabellenname',
//     Item: {
//       // Hier fügen Sie alle Daten hinzu, die Sie speichern möchten
//       id: 'Einzigartige-ID', // Eine einzigartige ID für den Eintrag
//       motorPreis: this.state.motorPreis,
//       getriebePreis: this.state.getriebePreis,
//       // ... alle weiteren relevanten Zustände
//     },
//   };

//   docClient.put(item, function(err, data) {
//     if (err) {
//       console.error('Fehler beim Speichern der Daten:', JSON.stringify(err, null, 2));
//     } else {
//       console.log('Daten erfolgreich gespeichert:', JSON.stringify(data, null, 2));
//     }
//   });
// };



=======

    handleCheckboxChange = (event) => {
        //Funktion für die Reifencheckboxen
        const { name, checked } = event.target;

        this.setState({
            [`${name}Checked`]: checked,
        });
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
>>>>>>> main
    render() {
        // const { ganzjahresChecked, sommerChecked, winterChecked } = this.state;
        return (
            <main>
                <div>
<<<<<<< HEAD
                    <Navbar />
                    <div className={styles.parentContainer}>
                        <div className={styles.container}>
                            <div className={styles.zahlungsmethode}>
                                <div className="left-panel">
                                    <h2>
                                        Stelle dir deinen Traum Astley zusammen:
=======
                <Navabr />
                    <div className={styles.parentContainer}>
                        <div className={styles.container}>
                            {/* <p align="center">!-!-! Work in Progress !-!-!</p> */}
                            <div className={styles.zahlungsmethode}>
                                <div className="left-panel">
                                    <h2>
                                        Stelle dir deinen TraumAstley zusammen:
>>>>>>> main
                                    </h2>
                                    <p>Bitte triff eine Auswahl</p>
                                </div>
                                {/* <!-- ########## Auswahl Zahlungart ########## --> */}
<<<<<<< HEAD
                                <div className="single-model-search">
=======
                                <div className="single-model-search" >
>>>>>>> main
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
<<<<<<< HEAD
                                <h3>Motor</h3>
=======
                                <h3 className="titel">Motor</h3>
>>>>>>> main
                                <div className="model-select-icon">
                                    <select
                                        className="form-control"
                                        id="motor"
                                        onChange={this.handleMotorChange}
                                    >
                                        <option
                                            value="2.0-EcoBlue-XL"
                                            data-preis="10000"
<<<<<<< HEAD
                                            ID_Produkt="6"
                                        >
                                            2.0 EcoBlue (Diesel Euro6) 125kW
                                            Extrakab. 4x4 XL 170 PS
=======
                                        >
                                            2.0 EcoBlue (Diesel Euro6) 125kW
                                            Extrakab. 4x4 XL 170 PS, 4x4-Antrieb
                                            8,4 l/100km | CO² komb.: 221 g/km
>>>>>>> main
                                        </option>
                                        <option
                                            value="4.0-MagaTurbo-XL"
                                            data-preis="20000"
                                        >
                                            4.0 S/C Spezial (Benzin) 257kW 4x4
<<<<<<< HEAD
                                            XL 350 PS
=======
                                            XL 350 PS, 4x4-Antrieb 16,5 l/100km
                                            | CO² komb.: xxl g/km
>>>>>>> main
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="motorPrice">
<<<<<<< HEAD
                                    Motor Preis: {this.formatPrice(this.state.motorPreis)} €
=======
                                    Motor Preis: {this.state.motorPreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########## Auswahl Getriebe ########## --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Getriebe</h3>
=======
                                <h3 className="titel">Getriebe</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Getriebe Preis: {this.formatPrice(this.state.getriebePreis)} €
=======
                                    Getriebe Preis: {this.state.getriebePreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ####### Auswahl Karosseriefarbe ######### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Wähle die Karosseriefarbe</h3>
=======
                                <h3 className="titel">Wähle die Karosseriefarbe</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                Außenfarbe Preis: {this.formatPrice(this.state.karosserieFarbePreis)} €
=======
                                Außenfarbe Preis:
                                {this.state.karosserieFarbePreis} €
>>>>>>> main
                            </div>

                            <hr />

                            {/* <!-- ####### Auswahl Motorhaubenfarbe ######## --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Motorhaube Farbe</h3>
=======
                                <h3 className="titel">Motorhaube Farbe</h3>
>>>>>>> main
                                <div className="model-select-icon">
                                    <select
                                        className="form-select"
                                        id="hoodColor"
                                        ref={this.hoodColorRef}
                                        onChange={this.loadHoodImage}
                                    >
                                        <option
<<<<<<< HEAD
                                            value="standard-hood"
                                            data-preis="0"
                                        >
                                            Standard
                                        </option>
                                        <option
=======
>>>>>>> main
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
<<<<<<< HEAD
                                    Motorhaube Farbe Preis: {this.formatPrice(this.state.motorhaubeFarbePreis)} €
=======
                                    Motorhaube Farbe Preis:
                                    {this.state.motorhaubeFarbePreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ####### Auswahl Dachfarbe ######### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Dachfarbe</h3>
=======
                                <h3 className="titel">Dachfarbe</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Dachfarbe Preis: {this.formatPrice(this.state.dachFarbePreis)}
=======
                                    Dachfarbe Preis: {this.state.dachFarbePreis}
>>>>>>> main
                                    €
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ####### Auswahl Dachträger ######### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Dachträger</h3>
=======
                                <h3 className="titel">Dachträger</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Dachträger Preis: {this.formatPrice(this.state.dachtraegerPreis)} €
=======
                                    Dachträger Preis:
                                    {this.state.dachtraegerPreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ######## Auswahl getönte Scheiben ######### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Getönte Scheiben</h3>
=======
                                <h3 className="titel">Getönte Scheiben</h3>
>>>>>>> main
                                <div className="model-select-icon">
                                    <select
                                        className="form-select"
                                        id="windowcolor"
<<<<<<< HEAD
                                        ref={this.windowRef}
                                        onChange={this.loadwindowcolorImage}
=======
                                        onChange={this.handleWindowcolorChange}
>>>>>>> main
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
<<<<<<< HEAD
                                    Getönte Scheiben Preis: {this.formatPrice(this.state.getoenteScheibenPreis)} €
=======
                                    Getönte Scheiben Preis:
                                    {this.state.getoenteScheibenPreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########## Auswahl Innenausstattung1 ########## --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Innenausstattung wählen</h3>
=======
                                <h3 className="titel">Innenausstattung wählen</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Innenausstattung 1 Preis:  {this.formatPrice(this.state.innenausstattung1Preis)} €
=======
                                    Innenausstattung1 Preis:
                                    {this.state.innenausstattung1Preis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Auswahl Innenausstattung2 ########## --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Innenausstattung</h3>
=======
                                <h3 className="titel">Innenausstattung</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Innenausstattung 2 Preis: {this.formatPrice(this.state.innenausstattung2Preis)} €
=======
                                    Innenausstattung 2 Preis:
                                    {this.state.innenausstattung2Preis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />
<<<<<<< HEAD

                            {/* <!-- ######## Auswahl Service Produkte ######### --> */}
                            <div className="single-model-search">
                                <h3>Service Produkte</h3>
                                <div className="model-select-icon">
                                    <div id="service">
=======
                            {/* <!-- ######## Auswahl Service Produkte ######### --> */}
                            <div className="single-model-search">
                                <h3 className="titel">Service Produkte</h3>
                                <div className="model-select-icon">
                                    <div id="service">
                                    <div class="checkbox-container">
>>>>>>> main
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="wartung_verschleiss"
                                                value="wartung_verschleiss"
<<<<<<< HEAD
                                                data-preis="165"
                                                checked={this.state.selectedOptions["wartung_verschleiss"]}
                                                onChange={(e) => this.handleCheckboxChange(e, 'service', 165)}
/>
                                            Wartungsservice  &nbsp;<span className="small-text">  (3 Jahre) 165,00 €</span>
=======
                                            />
                                            Wartungsservice
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="ueberfuehrung"
                                                value="ueberfuehrung"
                                            />
                                            Überführungsdienst
>>>>>>> main
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="kfz_versicherung"
                                                value="kfz_versicherung"
<<<<<<< HEAD
                                                data-preis="120"
                                                checked={this.state.selectedOptions["kfz_versicherung"]}
                                                onChange={(e) => this.handleCheckboxChange(e, 'service', 120)}
                                            />
                                            KFZ-Versicherung &nbsp;<span className="small-text"> (2 Jahre) 120,00 €</span>
=======
                                            />
                                            KFZ-Versicherung
>>>>>>> main
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="zulassungsservice"
                                                value="zulassungsservice"
<<<<<<< HEAD
                                                data-preis="25"
                                                checked={this.state.selectedOptions["zulassungsservice"]}
                                                onChange={(e) => this.handleCheckboxChange(e, 'service', 25)}
                                            />
                                            Zulassungsservice &nbsp; <span className="small-text"> 25,00 €</span>
=======
                                            />
                                            Zulassungsservice
>>>>>>> main
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="from-control"
                                                id="mobilitaetsgarantie"
                                                value="mobilitaetsgarantie"
<<<<<<< HEAD
                                                data-preis="160"
                                                checked={this.state.selectedOptions["mobilitaetsgarantie"]}
                                                onChange={(e) => this.handleCheckboxChange(e, 'service', 160)}
                                            />
                                            Mobilitätsgarantie &nbsp;<span className="small-text"> (2 Jahre) 160,00 €</span>
                                        </label>
                                    </div>
=======
                                            />
                                            Mobilitätsgarantie
                                        </label>
                                    </div>
                                    </div>
>>>>>>> main
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="servicePrice"
                                >
<<<<<<< HEAD
                                    Serviceprodukte Preis: {this.formatPrice(this.state.serviceProduktePreis)} €
=======
                                    Serviceprodukte Preis: 0 €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Zusatzoptionen ########### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Zusatzoptionen</h3>
                                <div className="model-select-icon">
                                    {/* <div  className={styles.zusatz} onChange={loadzusatzImage}> */}
=======
                                <h3 className="titel">Zusatzoptionen</h3>
                                <div className="model-select-icon">
                                <div class="checkbox-container-zusatz">
>>>>>>> main
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="hitch"
                                            value="hitch"
<<<<<<< HEAD
                                            data-preis="450"
                                            checked={this.state.selectedOptions["hitch"]}
                                            onChange={(e) => this.handleCheckboxChange(e, 'zusatz', 450)}
                                        />
                                        Anhängevorrichtung, 13 polig &nbsp;<span className="small-text"> 450,00 €</span>
=======
                                        />
                                        Anhängevorrichtung
>>>>>>> main
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="underbody-protection"
                                            value="underbody-protection"
<<<<<<< HEAD
                                            data-preis="470"
                                            checked={this.state.selectedOptions["underbody-protection"]}
                                            onChange={(e) => this.handleCheckboxChange(e, 'zusatz', 470)}
                                        />
                                        Unterbodenschutz auf Wachsbasis &nbsp;<span className="small-text"> 470,00 €</span>
=======
                                        />
                                        Unterbodenschutz
>>>>>>> main
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="mudguard"
                                            value="mudguard"
<<<<<<< HEAD
                                            data-preis="370"
                                            checked={this.state.selectedOptions["mudguard"]}
                                            onChange={(e) => this.handleCheckboxChange(e, 'zusatz', 370)}
                                        />
                                        Spritzschutz &nbsp;<span className="small-text"> 370,00 €</span>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="zusatzPrice">
                                Zusatzoption Preis: {this.formatPrice(this.state.zusatzoptionenPreis)} €
=======
                                        />
                                        Spritzschutz
                                    </label>
                                </div>
                                </div>
                            </div>
                            {/* <!-- Anzeigefenster für den Preis --> */}
                            <div className="price-display" id="zusatzPrice">
                                Zusatzoption Preis: 0 €
>>>>>>> main
                            </div>
                            <hr />

                            {/* <!-- ########### Auswahl Reifen ########### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Reifen</h3>
                                <div className={styles.reifen}>
=======
                                <h3 className="titel">Reifen</h3>
                                <div className={styles.reifen}>
                                <div class="checkbox-container-zusatz">
>>>>>>> main
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="ganzjahres"
<<<<<<< HEAD
                                            data-preis="1100"
                                            checked={
                                                this.state.ganzjahresChecked
                                            }
                                            onChange={(e) => this.handleCheckboxChange(e, 'ganzjahres', 1100)}
=======
                                            checked={
                                                this.state.ganzjahresChecked
                                            }
                                            onChange={this.handleCheckboxChange}
>>>>>>> main
                                            disabled={
                                                this.state.sommerChecked ||
                                                this.state.winterChecked
                                            }
                                        />
<<<<<<< HEAD
                                        Ganzjahresreifenset&nbsp;<span className="small-text"> 1100,00 €</span>
=======
                                        Ganzjahresreifenset
>>>>>>> main
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="sommer"
<<<<<<< HEAD
                                            data-preis="650"
                                            checked={this.state.sommerChecked}
                                            onChange={(e) => this.handleCheckboxChange(e, 'sommer', 650)}
=======
                                            checked={this.state.sommerChecked}
                                            onChange={this.handleCheckboxChange}
>>>>>>> main
                                            disabled={
                                                this.state.ganzjahresChecked
                                            }
                                        />
<<<<<<< HEAD
                                        Sommerreifenset&nbsp;<span className="small-text"> 650,00 €</span>
=======
                                        Sommerreifenset
>>>>>>> main
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="winter"
<<<<<<< HEAD
                                            data-preis="700"
                                            checked={this.state.winterChecked}
                                            onChange={(e) => this.handleCheckboxChange(e, 'winter', 700)}
=======
                                            checked={this.state.winterChecked}
                                            onChange={this.handleCheckboxChange}
>>>>>>> main
                                            disabled={
                                                this.state.ganzjahresChecked
                                            }
                                        />
<<<<<<< HEAD
                                        Winterreifenset&nbsp;<span className="small-text"> 700,00 €</span>
                                    </label>
                                    {/*<img id="selectedImage" src={imagePath} alt="Reifen" onError={() => setImagePath('https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/error/error.png')} /> */}
                                </div>

                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="reifenPrice">
                                    Reifen Preis: {this.formatPrice(this.state.reifenPreis)} €
=======
                                        Winterreifenset
                                    </label>
                                </div>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div className="price-display" id="paketePrice">
                                    Pakete Preis: 0 €
>>>>>>> main
                                </div>
                            </div>

                            <hr />
<<<<<<< HEAD

                            {/* <!-- ########### Pakete ########### --> */}
                            <div className="single-model-search">
                                <h3>Pakete</h3>
=======
                            {/* <!-- ########### Pakete ########### --> */}
                            <div className="single-model-search">
                                <h3 className="titel">Pakete</h3>
>>>>>>> main
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
<<<<<<< HEAD
                                    Pakete Preis: {this.formatPrice(this.state.paketePreis)} €
=======
                                    Pakete Preis: {this.state.paketePreis} €
>>>>>>> main
                                </div>
                            </div>

                            <hr />

                            {/* <!-- ########### Abhohlort ########### --> */}
                            <div className="single-model-search">
<<<<<<< HEAD
                                <h3>Abholort auswählen</h3>
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
=======
                                <h3 className="titel">Abhohlort auswählen</h3>
                                <div className="model-select-icon">
                                    <select className="form-control">
                                        <option value="muenchen">
                                            München
                                        </option>
                                        <option value="stuttgart">
                                            Stuttgart
                                        </option>
                                        <option value="berlin">Berlin</option>
                                        <option value="potsdam">Potsdam</option>
                                        <option value="bremen">Bremen</option>
                                        <option value="hamburg">Hamburg</option>
                                        <option value="wiesbaden">
                                            Wiesbaden
                                        </option>
                                        <option value="schwerin">
                                            Schwerin
                                        </option>
                                        <option value="hannover">
                                            Hannover
                                        </option>
                                        <option value="duesseldorf">
                                            Düsseldorf
                                        </option>
                                        <option value="mainz">Mainz</option>
                                        <option value="saarbruecken">
                                            Saarbrücken
                                        </option>
                                        <option value="dresden">Dresden</option>
                                        <option value="dresden">
>>>>>>> main
                                            Lieferung bis zur Haustür
                                        </option>
                                    </select>
                                </div>
                                {/* <!-- Anzeigefenster für den Preis --> */}
                                <div
                                    className="price-display"
                                    id="abholortPrice"
                                >
<<<<<<< HEAD
                                    Überführungskosten inkl MwSt: {this.formatPrice(this.state.abholortPreis)} €
                                </div>
                            </div>
                        {/* </div> */}


                            
                        </div>
                        <div className={styles.container2}>
                            {/* <!-- ########### Bild aus auswahl ########## --> */}
                            <div className="fixed-image-panel">
=======
                                    Abholort Preis: 0 €
                                </div>
                            </div>
                        </div>
                        <div className={styles.container2} >
                            {/* <!-- ########### Bild aus auswahl ########## --> */}
                            <div className="fixed-image-panel" style={{ maxHeight: '80%', overflow: 'hidden' }}>
>>>>>>> main
                                <img
                                    alt="Auto Bild"
                                    id="selectedImage"
                                    src={this.state.selectedImage}
<<<<<<< HEAD
                                    // onLoad={(e) => {
                                    //     e.target.style.height = "auto";
                                    //     e.target.style.width = "100%";
                                    // }}
                                />
                            </div>
                            {/* <!-- ########### Bild ENDE ########## --> */}
                            {/* <!-- ########## Gesamtpreis Box ########## --> */}
                            <div className={styles.fixedbar} id="fixed-bar">
                                <div className={styles.pricepanel}>
                                    <div>
                                        <button className="meinButton" onClick={this.handleButtonClick}>Zum Angebot</button>
                                    </div>
                                    <div id="totalPrice">
                                        <h2>
                                            Gesamtpreis: {this.formatPrice(this.state.totalPreis)}
=======
                                />
                                
                            </div>
                            {/* <!-- ########### Bild ENDE ########## --> */}
                                                        {/* <!-- ########## Gesamtpreis Box ########## --> */}
                                                        <div className={styles.fixedbar} id="fixed-bar">
                                <div className={styles.pricepanel}>
                                    <div id="totalPrice">
                                        <h2>
                                            Gesamtpreis: {this.state.totalPreis}
>>>>>>> main
                                            €
                                        </h2>
                                    </div>
                                    {/* <!-- Hinzufügen der monatlichen Gesamtrate --> */}
                                    <div id="monthly-rate-display">
                                        <h3>Monatliche Rate: 0 €</h3>
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                            {/* <!-- ########## Gesamtpreis Box ENDE ########## --> */}
=======
                            {/* <!-- ########## Gesmatpreis Box ENDE ########## --> */}

>>>>>>> main
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default Konfig;