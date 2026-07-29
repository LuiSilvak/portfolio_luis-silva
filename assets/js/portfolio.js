/* ==========================================================================
   LUÍS SILVA — PORTFÓLIO (SUBPÁGINAS)
   Módulo compartilhado: renderização de cards, filtros, busca e modal.
   Uso (em cada subpágina):
       import { projetos } from './js/projetos.js';
       import { initPortfolio } from '../../assets/js/portfolio.js';
       initPortfolio(projetos);
   ========================================================================== */

// ÍCONE PADRÃO POR TECNOLOGIA (para o placeholder de capa)
function pickIcon(tecnologias = []) {
    const t = tecnologias.map(x => String(x).toLowerCase());

    if (t.some(x => ['power bi', 'dax', 'kpis', 'indicadores'].includes(x))) return 'fa-chart-column';
    if (t.some(x => ['machine learning', 'nlp', 'deep learning'].includes(x))) return 'fa-brain';
    if (t.some(x => ['python', 'pandas'].includes(x))) return 'fa-code';
    if (t.some(x => ['sql', 'postgresql', 'mysql'].includes(x))) return 'fa-database';
    if (t.some(x => ['etl', 'dbt', 'pipeline'].includes(x))) return 'fa-gears';
    if (t.some(x => ['rpa', 'automação', 'automacao'].includes(x))) return 'fa-robot';
    if (t.some(x => ['api', 'rest', 'django', 'node.js'].includes(x))) return 'fa-server';
    if (t.some(x => ['vue.js', 'javascript', 'css', 'html'].includes(x))) return 'fa-window-maximize';
    if (t.some(x => ['solidworks', 'autocad', 'simulação fea', 'desenho técnico'].includes(x))) return 'fa-compass-drafting';
    if (t.some(x => ['redes', 'linux', 'suporte'].includes(x))) return 'fa-network-wired';

    return 'fa-folder-open';
}

function escapeHTML(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

export function initPortfolio(projetos) {
    // ELEMENTOS DO DOM
    const projectsGrid = document.getElementById('projects-grid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const modalLinks = document.getElementById('modalLinks');
    const closeModalBtn = modal ? modal.querySelector('.close-button') : null;

    if (!projectsGrid) return;

    // RENDERIZAÇÃO DOS CARDS
    function renderCards(lista) {
        projectsGrid.innerHTML = '';

        if (!lista.length) {
            projectsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
                    Nenhum projeto encontrado. Tente outro termo ou filtro.
                </div>
            `;
            return;
        }

        lista.forEach((projeto, index) => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.style.animationDelay = `${Math.min(index * 0.05, 0.4)}s`;
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Abrir detalhes do projeto ${projeto.titulo}`);

            const hasImage = Boolean(projeto.imagem && String(projeto.imagem).trim().length > 0);
            const icon = pickIcon(projeto.tecnologias);

            const coverHTML = hasImage
                ? `<img src="${escapeHTML(projeto.imagem)}" alt="${escapeHTML(projeto.titulo)}" class="card-image" loading="lazy">`
                : `<div class="card-image placeholder" aria-hidden="true">
                       <div class="ph-icon"><i class="fas ${icon}"></i></div>
                   </div>`;

            card.innerHTML = `
                ${coverHTML}
                <div class="card-content">
                    <h3>${escapeHTML(projeto.titulo)}</h3>
                    <p>${escapeHTML(projeto.descricao)}</p>
                    <div class="card-tags">
                        ${projeto.tecnologias.map(tech => `<span class="tag">${escapeHTML(tech)}</span>`).join('')}
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openModal(projeto));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(projeto);
                }
            });

            projectsGrid.appendChild(card);
        });
    }

    // MODAL
    function openModal(projeto) {
        if (!modal) return;

        modalTitle.textContent = projeto.titulo;
        modalDescription.textContent = projeto.descricao;

        modalBody.innerHTML = '';
        modalLinks.innerHTML = '';

        const temConteudo = Boolean(projeto.conteudo && !String(projeto.conteudo).includes('...'));

        if (temConteudo) {
            if (projeto.tipo === 'iframe') {
                modalBody.innerHTML = `<iframe src="${escapeHTML(projeto.conteudo)}" title="${escapeHTML(projeto.titulo)}" allowfullscreen loading="lazy"></iframe>`;
            } else {
                modalBody.innerHTML = `<img src="${escapeHTML(projeto.conteudo)}" alt="${escapeHTML(projeto.titulo)}" loading="lazy" onerror="this.closest('.modal-body').style.display='none'">`;
            }
        }

        if (projeto.linkLive && !String(projeto.linkLive).includes('...')) {
            modalLinks.innerHTML += `<a href="${escapeHTML(projeto.linkLive)}" target="_blank" rel="noopener" class="live-link"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Ver ao Vivo</a>`;
        }
        if (projeto.linkRepo) {
            modalLinks.innerHTML += `<a href="${escapeHTML(projeto.linkRepo)}" target="_blank" rel="noopener" class="repo-link"><i class="fab fa-github" aria-hidden="true"></i> Ver Repositório</a>`;
        }

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('is-open');
        modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }

    // FILTRO + BUSCA
    function filterAndSearch() {
        const busca = (searchInput ? searchInput.value : '').toLowerCase().trim();
        const ativo = document.querySelector('.filter-btn.active');
        const filtroAtivo = ativo ? ativo.dataset.filter : 'todos';

        const filtrados = projetos.filter(p => {
            const porBusca =
                !busca ||
                p.titulo.toLowerCase().includes(busca) ||
                p.descricao.toLowerCase().includes(busca) ||
                p.tecnologias.some(t => t.toLowerCase().includes(busca));

            const porFiltro = filtroAtivo === 'todos' || p.tecnologias.includes(filtroAtivo);

            return porBusca && porFiltro;
        });

        renderCards(filtrados);
    }

    // EVENTOS
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndSearch();
        });
    });

    if (searchInput) searchInput.addEventListener('input', filterAndSearch);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // INICIALIZAÇÃO
    renderCards(projetos);
}
