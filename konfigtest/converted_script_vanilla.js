
$(document).ready(function () {
    var ganzjahresCheckbox = document.querySelector('input[type="checkbox"][value="all-season-tire"]'));
    var sommerCheckbox = document.querySelector('input[type="checkbox"][value="sommer"]'));
    var winterCheckbox = document.querySelector('input[type="checkbox"][value="winter"]'));

    // Setze Sommerreifen als Standard ausgewählt
    sommerCheckbox.checked = true;

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
        var selectedValue = clickedCheckbox.value;

        if (selectedValue === 'all-season-tire') {
            sommerCheckbox.checked = false.disabled = true;
            winterCheckbox.checked = false.disabled = true;
        } else {
            if ((sommerCheckbox.checked || winterCheckbox.checked) && ganzjahresCheckbox.checked) {
                ganzjahresCheckbox.checked = false;
                updateGanzjahresCheckbox();
            }
        }
    }

    // Funktion zum Aktualisieren der Ganzjahresreifen-Checkbox
    function updateGanzjahresCheckbox() {
        if (!ganzjahresCheckbox.checked) {
            sommerCheckbox.disabled = false;
            winterCheckbox.disabled = false;
        }
    }

    // Funktion zur Aktualisierung des Reifenbildes
    function updateReifenImage(userAction = false) {
        if (!userAction) return; // Beendet die Funktion, wenn sie nicht durch Benutzeraktion aufgerufen wurde

        var imagePath;
        if (ganzjahresCheckbox.checked) {
            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
        } else if (sommerCheckbox.checked && winterCheckbox.checked) {
            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
        } else if (sommerCheckbox.checked) {
            imagePath = 'https://lego-defender-model-auto.s3.eu-central-1.amazonaws.com/bilder/landrover_web_lagerteile/standart/reifen.jpg';
        } else if (winterCheckbox.checked) {
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
