// assets/js/tema.js (seu script original, agora modificado)
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';

    // Função para aplicar o tema
    function applyTheme(theme) {
        const htmlElement = document.documentElement;
        
        // Remove todas as classes de tema do <html>
        htmlElement.classList.remove('theme-blue', 'theme-purple', 'theme-orange');

        // Se não for o tema padrão, adiciona a classe correspondente
        if (theme !== 'default') {
            htmlElement.classList.add('theme-' + theme);
        }

        // Atualiza o atributo data-theme do body para referência, se necessário
        document.body.setAttribute('data-theme', theme);
    }

    // Marca o botão ativo e aplica o tema na carga inicial
    themeButtons.forEach(button => {
        if (button.getAttribute('data-theme') === savedTheme) {
            button.classList.add('active');
        }
    });
    // A aplicação visual já foi feita pelo theme-loader.js,
    // mas garantimos a consistência do data-attribute aqui.
    document.body.setAttribute('data-theme', savedTheme);


    // Adiciona evento de clique para cada botão de tema
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');

            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            applyTheme(theme);
            localStorage.setItem('selectedTheme', theme);
        });
    });
});
