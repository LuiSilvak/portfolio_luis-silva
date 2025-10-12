document.addEventListener('DOMContentLoaded', function() {

    // --- INICIALIZAÇÃO DE BIBLIOTECAS ---
    AOS.init({
        duration: 800,
        once: true
    });

    if (document.querySelector('#typed-specializations')) {
        const typedOptions = {
            strings: [
                'Analista de Dados&nbsp;|&nbsp;Desenvolvedor Full Stack&nbsp;|&nbsp;Técnico em Informática&nbsp;|&nbsp;Engenheiro Mecânico'
            ],
            typeSpeed: 40,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html',
        };
        new Typed('#typed-specializations', typedOptions);
    }

    // --- FUNCIONALIDADES DO SITE ---
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section[id]');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    // 1. LÓGICA PARA DESTACAR LINK ATIVO AO ROLAR
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            // A lógica de cálculo agora usa o scroll-padding-top, então podemos simplificar
            const sectionTop = section.offsetTop - 85; // 80px do padding + 5px de margem
            if (scrollPosition >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 2. LÓGICA PARA ATUALIZAR LINK ATIVO AO CLICAR
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Fecha o menu hambúrguer no mobile após clicar
            if (navLinksList.classList.contains('show')) {
                navLinksList.classList.remove('show');
            }
        });
    });

    // 3. LÓGICA PARA O MENU HAMBÚRGUER
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('show');
        });
    }
});