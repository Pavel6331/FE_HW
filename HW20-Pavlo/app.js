document.addEventListener('DOMContentLoaded', function() {
    const rootElement = document.documentElement;

    const newColors = {
        '--background-color': '#1c1c1e',
        '--text-color': '#adbac7',
        '--primary-dark': '#ffffff',
        '--highlight-color': '#f6c177',
        '--secondary-text-color': '#768390',
        '--bg-btn-color': '#f6c177'
    };

    for (const [property, value] of Object.entries(newColors)) {
        rootElement.style.setProperty(property, value);
    }
});
