// assets/js/theme-loader.js
(function() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && savedTheme !== 'default') {
        document.documentElement.classList.add('theme-' + savedTheme);
        // Usamos document.documentElement (o <html>) para garantir que a classe
        // seja aplicada o mais cedo possível, mesmo antes do <body> existir.
    }
})();
