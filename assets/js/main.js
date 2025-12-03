document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // 1. INICIALIZAÇÃO DE BIBLIOTECAS
    // ============================
    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // Se existir o span de texto digitado, inicializa o Typed
    if (window.Typed && document.querySelector('#typed-specializations')) {
        const typedOptions = {
            strings: [
                'Analista de Dados&nbsp;|&nbsp;Desenvolvedor Full Stack&nbsp;|&nbsp;Técnico em Informática&nbsp;|&nbsp;Engenheiro Mecânico'
            ],
            typeSpeed: 40,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html'
        };

        new Typed('#typed-specializations', typedOptions);
    }

    // ============================
    // 2. ELEMENTOS PRINCIPAIS
    // ============================
    const header       = document.querySelector('.header');
    const navLinks     = Array.from(document.querySelectorAll('.nav-links a'));
    const sections     = Array.from(document.querySelectorAll('main section[id]'));
    const menuToggle   = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');
    const logoLink     = document.querySelector('.logo');

    // ============================
    // 3. FUNÇÃO PARA ATUALIZAR LINK ATIVO COM BASE NO SCROLL
    //    (USANDO O 1/3 SUPERIOR DA TELA COMO REFERÊNCIA)
    // ============================
    const updateActiveLinkOnScroll = () => {
        if (!sections.length || !navLinks.length) return;

        const scrollPosition = window.pageYOffset + window.innerHeight / 3;
        let currentSectionId = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentSectionId}`);
        });
    };

    // ============================
    // 4. CLIQUE NO MENU
    // ============================
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Marca o link clicado como ativo imediatamente
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Fecha o menu mobile após o clique
            if (navLinksList && navLinksList.classList.contains('show')) {
                navLinksList.classList.remove('show');
            }
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Clique no logo volta o destaque para "Início"
    if (logoLink) {
        logoLink.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            const homeLink = navLinks.find(l => l.getAttribute('href') === '#home');
            if (homeLink) homeLink.classList.add('active');
        });
    }

    // ============================
    // 5. MENU HAMBÚRGUER
    // ============================
    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinksList.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // ============================
    // 6. HEADER COM SCROLL (EFEITO VISUAL)
    // ============================
    const updateHeaderOnScroll = () => {
        if (!header) return;
        if (window.scrollY > 10) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    };

    // ============================
    // 7. LISTENER DE SCROLL ÚNICO
    // ============================
    const handleScroll = () => {
        updateHeaderOnScroll();
        updateActiveLinkOnScroll();
    };

    window.addEventListener('scroll', handleScroll);

    // Chamada inicial para ajustar estado logo ao carregar
    updateHeaderOnScroll();
    updateActiveLinkOnScroll();

    // ============================
    // 8. ANO DINÂMICO NO RODAPÉ
    // ============================
    const yearSpan = document.querySelector('[data-current-year]');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
