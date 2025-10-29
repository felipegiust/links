// Script para gerenciar os temas de cores
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de tema
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
        
        // Marca o botão correspondente como ativo
        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') === savedTheme) {
                button.classList.add('active');
            }
        });
    } else {
        // Define o tema padrão como ativo
        document.querySelector('.theme-btn.theme-default').classList.add('active');
    }
    
    // Adiciona evento de clique para cada botão de tema
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove a classe 'active' de todos os botões
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
            
            // Aplica o tema
            applyTheme(theme);
            
            // Salva a escolha no localStorage
            localStorage.setItem('selectedTheme', theme);
        });
    });
    
    // Função para aplicar o tema
    function applyTheme(theme) {
        // Remove todas as classes de tema do body
        document.body.classList.remove('theme-blue', 'theme-purple', 'theme-orange');
        
        // Se não for o tema padrão, adiciona a classe correspondente
        if (theme !== 'default') {
            document.body.classList.add('theme-' + theme);
        }
        
        // Atualiza o atributo data-theme do body
        document.body.setAttribute('data-theme', theme);
    }
});