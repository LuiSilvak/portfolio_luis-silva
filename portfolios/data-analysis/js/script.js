import { projetos } from './projetos.js';

// ELEMENTOS DO DOM
const projectsGrid = document.getElementById('projects-grid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalBody = document.querySelector('.modal-body');
const modalLinks = document.getElementById('modalLinks');
const closeModalBtn = document.querySelector('.close-button');

// ÍCONE PADRÃO POR TECNOLOGIA (para placeholder)
function pickIcon(tecnologias = []) {
    const t = tecnologias.map(x => String(x).toLowerCase());

    if (t.includes('power bi') || t.includes('dax')) return 'fa-chart-column';
    if (t.includes('python') || t.includes('pandas')) return 'fa-python';
    if (t.includes('sql') || t.includes('postgresql')) return 'fa-database';
    if (t.includes('etl')) return 'fa-gears';

    return 'fa-folder-open';
}

// RENDERIZAR CARDS
function renderCards(projetosParaRenderizar) {
    projectsGrid.innerHTML = '';

    projetosParaRenderizar.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Capa: imagem se existir; senão, placeholder premium com ícone
        const hasImage = Boolean(projeto.imagem && String(projeto.imagem).trim().length > 0);
        const icon = pickIcon(projeto.tecnologias);

        const coverHTML = hasImage
            ? `<img src="${projeto.imagem}" alt="${projeto.titulo}" class="card-image">`
            : `
                <div class="card-image placeholder" aria-hidden="true">
                    <div class="ph-icon"><i class="fas ${icon}"></i></div>
                </div>
            `;

        card.innerHTML = `
            ${coverHTML}
            <div class="card-content">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="card-tags">
                    ${projeto.tecnologias.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(projeto));
        projectsGrid.appendChild(card);
    });
}

// ABRIR MODAL
function openModal(projeto) {
    modalTitle.textContent = projeto.titulo;
    modalDescription.textContent = projeto.descricao;

    // Limpa o conteúdo anterior
    modalBody.innerHTML = '';
    modalLinks.innerHTML = '';

    // Adiciona o conteúdo principal (iframe ou imagem)
    if (projeto.tipo === 'iframe') {
        modalBody.innerHTML = `<iframe src="${projeto.conteudo}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        modalBody.innerHTML = `<img src="${projeto.conteudo}" alt="${projeto.titulo}">`;
    }

    // Adiciona os links
    if (projeto.linkLive) {
        modalLinks.innerHTML += `<a href="${projeto.linkLive}" target="_blank" class="live-link">Ver ao Vivo</a>`;
    }
    if (projeto.linkRepo) {
        modalLinks.innerHTML += `<a href="${projeto.linkRepo}" target="_blank" class="repo-link">Ver Repositório</a>`;
    }

    modal.style.display = 'block';
}

// FECHAR MODAL
function closeModal() {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
}

// FILTRAGEM E BUSCA
function filterAndSearch() {
    const busca = searchInput.value.toLowerCase();
    const filtroAtivo = document.querySelector('.filter-btn.active').dataset.filter;

    const projetosFiltrados = projetos.filter(p => {
        const porBusca =
            p.titulo.toLowerCase().includes(busca) ||
            p.descricao.toLowerCase().includes(busca);

        const porFiltro = filtroAtivo === 'todos' || p.tecnologias.includes(filtroAtivo);

        return porBusca && porFiltro;
    });

    renderCards(projetosFiltrados);
}

// EVENT LISTENERS
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAndSearch();
    });
});

searchInput.addEventListener('input', filterAndSearch);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// INICIALIZAÇÃO
renderCards(projetos);
