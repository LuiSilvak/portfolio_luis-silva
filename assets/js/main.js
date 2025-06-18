// Rolagem suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionar classe 'active' ao link de navegação atual ao rolar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) { // Ajuste para quando a seção deve ser considerada "ativa"
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Lógica para o menu hambúrguer (descomentado e ajustado)
const menuToggle = document.querySelector('.menu-toggle');
const navLinksList = document.querySelector('.nav-links'); // Renomeado para evitar conflito

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinksList.classList.toggle('show');
    });

    // Fechar menu ao clicar em um link (opcional, mas boa prática)
    navLinksList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('show');
        });
    });
}

// Inicializar AOS (Animate On Scroll) - ADICIONADO AQUI
AOS.init({
    duration: 800, // Duração padrão da animação (em ms)
    once: true,    // Animar apenas uma vez ao rolar para baixo
});

// Você pode adicionar mais funcionalidades aqui no futuro, como:
// - Validação de formulário de contato
// - Carrossel de imagens para projetos