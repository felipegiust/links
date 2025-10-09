
// assets/js/theme.js
(() => {
  'use strict';

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  // Função para marcar o item de menu correto como 'active'
  const showActiveTheme = (theme) => {
    // Remove 'active' de todos
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    // Adiciona 'active' ao botão correto
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    if (btnToActive) {
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
    }
  };

  // --- LÓGICA DE INICIALIZAÇÃO ---
  window.addEventListener('DOMContentLoaded', () => {
    // Apenas atualiza qual item do menu está 'active'
    const theme = getStoredTheme() || 'auto';
    showActiveTheme(theme);

    // Adiciona os listeners de clique
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const themeValue = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(themeValue);
        setTheme(themeValue);
        showActiveTheme(themeValue);
      });
    });
  });

  // Listener para mudanças no tema do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'auto') {
      setTheme('auto');
    }
  });
})();

