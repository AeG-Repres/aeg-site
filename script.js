// Smooth scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Animação dos elementos ao scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-socio, .pilar');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card-socio, .pilar');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const sobre = document.querySelector('.sobre-nos');
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight > sobre.offsetTop + 100) {
        sobre.classList.add('show');
    }
});

// Ativar animação dos pilares quando estiver visível na tela
const pilaresSection = document.querySelector('.pilares');
const tituloPilares = document.querySelector('.titulo-pilares');

window.addEventListener('scroll', () => {
    const sectionTop = pilaresSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        tituloPilares.classList.add('animate');
    }
});

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length <= 2) {
        value = value.replace(/^(\d{0,2})/, '($1');
    } else if (value.length <= 7) {
        value = value.replace(/^(\d{2})(\d{0,1})/, '($1) $2');
    } else if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d{1})(\d{0,4})/, '($1) $2 $3');
        if (value.length >= 13) {
            value = value.replace(/^(\(\d{2}\) \d{1} \d{4})(\d{0,4})/, '$1-$2');
        }
    }

    e.target.value = value;
});

// Menu hamburguer
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});