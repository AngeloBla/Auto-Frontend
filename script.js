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
