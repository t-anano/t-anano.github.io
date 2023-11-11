// script.js
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'styles.css') {
        themeStyle.setAttribute('href', 'styles-light.css');
    } else {
        themeStyle.setAttribute('href', 'styles.css');
    }
}

