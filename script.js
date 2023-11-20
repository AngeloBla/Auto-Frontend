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
                //  ################ funktion Auswahl Motorhaubefarbe mit Bild verlinken ################
                function loadHoodImage() {
                    var hoodColor = document.getElementById('hoodColor').value;
                    var imagePath;
                    switch (hoodColor) {
                        case 'standard-hood':
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
                            imagePath = './testbilder/motorhaubegelb.png';
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
                            imagePath = './testbilder/dachweiss.png';
                            break;
                        case 'blue-roof':
                            imagePath = './testbilder/dachblau.png';
                            break;
                        case 'green-roof':
                            imagePath = './testbilder/dachgruen.png';
                            break;
                        case 'red-roof':
                            imagePath = './testbilder/dachrot.png';
                            break;
                        case 'yellow-roof':
                            imagePath = './testbilder/dachgelb.png';
                            break;
                        case 'black-roof':
                            imagePath = './testbilder/dachschwarz.png';
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
                            imagePath = './testbilder/dachträgerstandard.png';
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
                            $(document).ready(function () {
                var ganzjahresCheckbox = $('input[type="checkbox"][value="all-season-tire"]');
                var sommerCheckbox = $('input[type="checkbox"][value="sommer"]');
                var winterCheckbox = $('input[type="checkbox"][value="winter"]');

                // Setze Sommerreifen als Standard ausgewählt
                sommerCheckbox.prop('checked', true);

                // Hinzufügen des Event Listeners für die Änderung der Checkboxen
                $('input[type="checkbox"]').change(function () {
                    updateOptions($(this));
                });

                // Hinzufügen des Event Listeners für die Änderung der Ganzjahresreifen-Checkbox
                ganzjahresCheckbox.change(function () {
                    updateGanzjahresCheckbox();
                });

                // Funktion zum Aktualisieren der Checkboxen
                function updateOptions(clickedCheckbox) {
                    var selectedValue = clickedCheckbox.val();

                    if (selectedValue === 'all-season-tire') {
                        // Wenn Ganzjahresreifen ausgewählt ist, deaktiviere Sommer- und Winterreifen
                        sommerCheckbox.prop('checked', false).prop('disabled', true);
                        winterCheckbox.prop('checked', false).prop('disabled', true);
                    } else {
                        // Wenn Ganzjahresreifen nicht ausgewählt ist, aktiviere Sommer- und Winterreifen
                        // sommerCheckbox.prop('disabled', !sommerCheckbox.is(':checked') && !ganzjahresCheckbox.is(':checked'));
                        // winterCheckbox.prop('disabled', !winterCheckbox.is(':checked') && !ganzjahresCheckbox.is(':checked'));
                    }

                    // Wenn Sommerreifen oder Winterreifen ausgewählt sind, deaktiviere Ganzjahresreifen
                    if ((sommerCheckbox.is(':checked') || winterCheckbox.is(':checked')) && ganzjahresCheckbox.is(':checked')) {
                        ganzjahresCheckbox.prop('checked', false);
                        updateGanzjahresCheckbox();
                    }
                }

                // Funktion zum Aktualisieren der Ganzjahresreifen-Checkbox
                function updateGanzjahresCheckbox() {
                    // Wenn Ganzjahresreifen abgewählt wird, aktiviere Sommer- und Winterreifen
                    if (!ganzjahresCheckbox.is(':checked')) {
                        sommerCheckbox.prop('disabled', false);
                        winterCheckbox.prop('disabled', false);
                    }
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
        
