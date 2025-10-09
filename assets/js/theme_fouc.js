
// Aplica o tema ANTES de qualquer renderização para evitar o "piscar" (FOUC).
(function () {
    'use strict';

    const getStoredTheme = () => localStorage.getItem('theme');

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }
        // Se não houver nada salvo, o padrão é 'auto'.
        return 'auto';
    };

    const setTheme = theme => {
        // Se o tema for 'auto', determina o tema do sistema e aplica.
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            // Caso contrário, aplica o tema escolhido (light, dark, ou o 'light' do auto).
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };

    // --- PONTO CHAVE DA CORREÇÃO ---
    // Aplica o tema imediatamente na tag <html> assim que o script é executado.
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);
})();
