// TRADUÇÃO - FUNCIONALIDADE GOOGLE TRANSLATE
(function() {
    'use strict';
    
    // Função para inicializar o Google Translate
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'pt',
            layout: google.translate.TranslateElement.InlineLayout.NONE,
            autoDisplay: false
        }, 'google_translate_element');
    }

    // Função para traduzir a página
    function translatePage(lang) {
        if (!lang) return;

        setTimeout(() => {
            var googleSelect = document.querySelector('.goog-te-combo');
            if (googleSelect) {
                googleSelect.value = lang;
                googleSelect.dispatchEvent(new Event('change'));
                
                // Atualiza o idioma ativo na lista
                updateActiveLanguage(lang);
                
                // Salva preferência do usuário
                localStorage.setItem('preferred-language', lang);
            }
        }, 100);
    }

    // Função para atualizar o idioma ativo
    function updateActiveLanguage(lang) {
        document.querySelectorAll('.language-list').forEach(item => {
            item.classList.remove('language-active');
            if (item.getAttribute('data-google-lang') === lang) {
                item.classList.add('language-active');
            }
        });
    }

    // Inicializa a funcionalidade de tradução
    function initTranslation() {
        // Adiciona o container do Google Translate
        const translateContainer = document.createElement('div');
        translateContainer.id = 'google_translate_element';
        translateContainer.style.display = 'none';
        document.body.appendChild(translateContainer);
        
        // Configura os event listeners para os itens existentes
        setupTranslationEvents();
        
        // Restaura idioma salvo
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang) {
            updateActiveLanguage(savedLang);
        }
    }

    // Configura os eventos de tradução
    function setupTranslationEvents() {
        // Event listeners para os itens da lista de tradução
        document.querySelectorAll('.language-list').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-google-lang');
                translatePage(lang);
            });
        });
    }

    // Remove elementos do Google Translate que aparecem dinamicamente
    function setupTranslationObserver() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) {
                        if (node.id === 'goog-gt-tt' || 
                            node.classList && (
                                node.classList.contains('goog-te-banner-frame') ||
                                node.classList.contains('VIpgJd-ZVi9od-ORHb-OEVmcd')
                            )) {
                            node.style.display = 'none';
                            node.style.visibility = 'hidden';
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Inicializa quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        initTranslation();
        setupTranslationObserver();
        
        // Remove elementos do Google a cada segundo (backup)
        setInterval(function() {
            const googleElements = document.querySelectorAll(`
                .goog-te-banner-frame, 
                .VIpgJd-ZVi9od-ORHb-OEVmcd,
                #goog-gt-tt
            `);
            googleElements.forEach(element => {
                element.style.display = 'none';
                element.style.visibility = 'hidden';
            });
        }, 1000);
    });

    // Torna as funções globais para o Google Translate
    window.googleTranslateElementInit = googleTranslateElementInit;
    window.translatePage = translatePage;

})();