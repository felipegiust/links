
//  // CARREGADOR DE PÁGINA
window.onload = function () {
    var loader = document.getElementById('fullScreenLoader');
    if (loader) {
        setTimeout(function() {
            loader.classList.add('d-none');
        }, 1000); 
    }
};



// Script para melhorar a interação dos botões
document.addEventListener('DOMContentLoaded', function () {
    // Adicionar animação aos botões de tema
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Melhorar a experiência dos botões de idioma
    const languageButtons = document.querySelectorAll('.language-list');
    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.getElementById('anoAtual').textContent = new Date().getFullYear();


// COOKIES
// Funções para controle do toast
function aceitarTermos() {
    localStorage.setItem('cookiesAceitos', 'true');
    document.getElementById('cookieToast').classList.remove('show');
    // Aqui você pode adicionar scripts de analytics/tracking
}

function recusarCookies() {
    localStorage.setItem('cookiesAceitos', 'false');
    document.getElementById('cookieToast').classList.remove('show');
    // Remover cookies não essenciais se necessário
}

// Adiciona eventos aos botões
document.getElementById('btnAceitarTermos').addEventListener('click', aceitarTermos);
document.getElementById('btnRecusarCookies').addEventListener('click', recusarCookies);

// Verificar se já aceitou os termos
document.addEventListener('DOMContentLoaded', function () {
    const cookiesAceitos = localStorage.getItem('cookiesAceitos');
    const cookieToast = document.getElementById('cookieToast');

    if (cookiesAceitos === 'true') {
        cookieToast.classList.remove('show');
    }
    // Se for 'false' ou não existir, o toast continua visível
});


// ANIMAÇÃO DE DIGITAÇÃO NOME 
// Função para animar a digitação
function typeAnimation(element, text, speed = 100) {
    let index = 0;
    element.textContent = ' >_ '; // Começa com o prefixo

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.getElementById('typing-text');
    const nameToType = 'Felipe Machado Giusti';

    // Inicia a animação após 500ms
    setTimeout(() => {
        typeAnimation(typingElement, nameToType, 100);
    }, 2000);
});

// ANIMAÇÃO DE DIGITAÇÃO Funções
document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Full Stack", "PHP", "Laravel", "Docker", "POWER BI", "MySQL", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"];
    const typedTextElement = document.getElementById('typed-text');
    let arrayIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // milissegundos por caractere
    const erasingSpeed = 50; // milissegundos por caractere
    const newTextDelay = 1500; // atraso antes de começar a apagar/digitar

    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            // Digitando
            typedTextElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Terminou de digitar, espera e começa a apagar
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            // Apagando
            typedTextElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            // Terminou de apagar, avança para o próximo texto
            arrayIndex++;
            if (arrayIndex >= textArray.length) {
                arrayIndex = 0; // Volta ao início (loop)
            }
            setTimeout(type, 500); // Pequeno atraso antes de digitar o próximo texto
        }
    }

    setTimeout(() => {
        // Inicia o processo de digitação quando a página carrega
        setTimeout(type, newTextDelay);
    }, 3000);
});

