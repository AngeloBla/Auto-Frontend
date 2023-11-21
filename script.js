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

                // ########### Funktion Auswahl Autofarbe verlinkung Bilder ###########
                function loadCarImage() {
                    var carColor = document.getElementById('carColor').value;
                    var imagePath;
                    switch (carColor) {
                        case 'red':
                            imagePath = './testbilder/aussenfarberot.png';
                            break;
                        case 'blue':
                            imagePath = './testbilder/aussenfarbeblau.png';
                            break;
                        case 'yellow':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_rundum/landrover_vbs.jpg';
                            break;
                        case 'green':
                            imagePath = './testbilder/aussenfarbegruen.png';
                            break;
                        case 'black':
                            imagePath = './testbilder/aussenfarbeschwarz.png';
                            break;
                        case 'white':
                            imagePath = './testbilder/aussenfarbeweiss.png';
                            break;
                        default:
                            imagePath = './testbilder/error.png';
                    }
                        document.getElementById('selectedImage').src = imagePath;
                }
                // ########### Funktion Auswahl karosserie verlinkung Bilder ###########
                function loadCarImage() {
                    var bodyColor = document.getElementById('bodyColor').value;
                    var imagePath;
                    switch (bodyColor) {
                        case 'body-red':
                            imagePath = './testbilder/aussenfarberot.png';
                            break;
                        case 'body-blue':
                            imagePath = './testbilder/aussenfarbeblau.png';
                            break;
                        case 'body-yellow':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/karosserie.jpg';
                            break;
                        case 'body-green':
                            imagePath = './testbilder/aussenfarbegruen.png';
                            break;
                        case 'body-black':
                            imagePath = './testbilder/aussenfarbeschwarz.png';
                            break;
                        case 'body-white':
                            imagePath = './testbilder/aussenfarbeweiss.png';
                            break;
                        default:
                            imagePath = './testbilder/error.png';
                    }
                        document.getElementById('selectedImage').src = imagePath;
                }
                //  ################ funktion Auswahl Motorhaubefarbe mit Bild verlinken ################
                function loadHoodImage() {
                    var hoodColor = document.getElementById('hoodColor').value;
                    var imagePath;
                    switch (hoodColor) {
                        case 'white-hood':
                            imagePath = './testbilder/motorhaubeweiss.png';
                            break;
                        case 'blue-hood':
                            imagePath = './testbilder/motorhaubeblau.png';
                            break;
                        case 'green-hood':
                            imagePath = './testbilder/motorhaubegruen.png';
                            break;
                        case 'red-hood':
                            imagePath = './testbilder/motorhauberot.png';
                            break;
                        case 'yellow-hood':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/motorhaube.jpg';
                            break;
                        case 'black-hood':
                            imagePath = './testbilder/motorhaubeschwarz.png';
                            break;
                        default:
                            imagePath = 'error.png';
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
                            imagePath = 'error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                //  ################ funktion Auswahl Dachträger mit Bild verlinken ################

                function loadroofrackImage() {
                    var roofrack = document.getElementById('roofrack').value;
                    var imagePath;
                    switch (roofrack) {
                        case 'roof-rack0':
                            imagePath = './testbilder/dachtraegerkein.png';
                            break;
                        case 'roof-rack1':
                            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/dachtraeger.jpg';
                            break;
                        default:
                            imagePath = 'error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                //  ################ funktion Auswahl getönte Scheiben mit Bilder ##########

                function loadwindowcolorImage() {
                    var windowcolor = document.getElementById('windowcolor').value;
                    var imagePath;
                    switch (windowcolor) {
                        case 'window0':
                            imagePath = './testbilder/scheiben0getoent.png';
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
                            imagePath = 'error.png';
                    }
                    document.getElementById('selectedImage').src = imagePath;
                }

                // ############ Reifen ############
                // ############ Reifen ############
                $(document).ready(function () {
                    var ganzjahresCheckbox = $('input[type="checkbox"][value="all-season-tire"]');
                    var sommerCheckbox = $('input[type="checkbox"][value="sommer"]');
                    var winterCheckbox = $('input[type="checkbox"][value="winter"]');
                
                    // Setze Sommerreifen als Standard ausgewählt
                    sommerCheckbox.prop('checked', true);
                
                    // Hinzufügen des Event Listeners für die Änderung der Checkboxen
                    $('input[type="checkbox"]').change(function () {
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
                        this.src = 'error.png'; // Fallback-Bild
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
        
