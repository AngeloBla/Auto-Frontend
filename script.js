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
