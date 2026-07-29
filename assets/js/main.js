/* ==========================================================================
   LUÍS SILVA — PORTFÓLIO
   JavaScript principal (sem dependências externas)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================
    // 1. REVEAL AO ROLAR (substitui o AOS)
    // ============================
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ============================
    // 2. EFEITO DE DIGITAÇÃO (substitui o typed.js)
    // ============================
    const typedTarget = document.getElementById('typed-roles');

    if (typedTarget) {
        const roles = [
            'Analista de Dados',
            'Desenvolvedor Full Stack',
            'Engenheiro de Dados',
            'Especialista em Automação',
            'Engenheiro Mecânico'
        ];

        if (prefersReducedMotion) {
            typedTarget.textContent = roles[0];
        } else {
            let roleIndex = 0;
            let charIndex = 0;
            let deleting = false;

            const TYPE_DELAY = 65;
            const DELETE_DELAY = 32;
            const HOLD_DELAY = 2100;

            const tick = () => {
                const current = roles[roleIndex];

                if (!deleting) {
                    charIndex++;
                    typedTarget.textContent = current.slice(0, charIndex);

                    if (charIndex === current.length) {
                        deleting = true;
                        setTimeout(tick, HOLD_DELAY);
                        return;
                    }
                    setTimeout(tick, TYPE_DELAY);
                } else {
                    charIndex--;
                    typedTarget.textContent = current.slice(0, charIndex);

                    if (charIndex === 0) {
                        deleting = false;
                        roleIndex = (roleIndex + 1) % roles.length;
                    }
                    setTimeout(tick, DELETE_DELAY);
                }
            };

            setTimeout(tick, 500);
        }
    }

    // ============================
    // 3. CONTADORES ANIMADOS (STATS DO HERO)
    // ============================
    const counters = document.querySelectorAll('[data-counter]');

    const animateCounter = (el) => {
        const target = parseInt(el.dataset.counter, 10);
        if (Number.isNaN(target)) return;

        if (prefersReducedMotion) {
            el.textContent = target;
            return;
        }

        const duration = 1400;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        counters.forEach(el => counterObserver.observe(el));
    } else {
        counters.forEach(el => { el.textContent = el.dataset.counter; });
    }

    // ============================
    // 4. ELEMENTOS PRINCIPAIS
    // ============================
    const header = document.querySelector('.header');
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');
    const logoLink = document.querySelector('.logo');
    const progressBar = document.querySelector('.scroll-progress');
    const backToTop = document.querySelector('.back-to-top');

    // ============================
    // 5. LINK ATIVO DE ACORDO COM O SCROLL
    // ============================
    const setActiveLink = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const updateActiveLinkOnScroll = () => {
        if (!sections.length) return;

        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSectionId = sections[0].id;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                currentSectionId = section.id;
            }
        });

        setActiveLink(currentSectionId);
    };

    // ============================
    // 6. MENU (CLIQUE + MOBILE)
    // ============================
    const closeMobileMenu = () => {
        if (navLinksList && navLinksList.classList.contains('show')) {
            navLinksList.classList.remove('show');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            closeMobileMenu();
        });
    });

    if (logoLink) {
        logoLink.addEventListener('click', () => {
            setActiveLink('home');
            closeMobileMenu();
        });
    }

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinksList.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Fecha ao clicar fora ou pressionar Esc
        document.addEventListener('click', (e) => {
            if (!navLinksList.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });
    }

    // ============================
    // 7. SCROLL: HEADER, PROGRESSO E BACK-TO-TOP
    // ============================
    let ticking = false;

    const onScroll = () => {
        const scrollY = window.scrollY;

        // Header com fundo ao rolar
        if (header) {
            header.classList.toggle('header--scrolled', scrollY > 10);
        }

        // Barra de progresso
        if (progressBar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollY / docHeight : 0;
            progressBar.style.transform = `scaleX(${progress})`;
        }

        // Botão voltar ao topo
        if (backToTop) {
            backToTop.classList.toggle('is-visible', scrollY > window.innerHeight * 0.8);
        }

        updateActiveLinkOnScroll();
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        });
    }

    // ============================
    // 8. ANO DINÂMICO NO RODAPÉ
    // ============================
    const yearSpan = document.querySelector('[data-current-year]');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
