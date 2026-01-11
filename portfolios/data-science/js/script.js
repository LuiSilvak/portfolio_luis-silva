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

/**
 * Ícone do placeholder (FontAwesome) baseado em tecnologias
 */
function getPlaceholderIcon(projeto) {
  const techs = (projeto.tecnologias || []).map(t => (t || '').toLowerCase());

  if (techs.includes('nlp')) return 'fa-language';
  if (techs.includes('computer vision')) return 'fa-eye';
  if (techs.includes('deep learning')) return 'fa-brain';
  if (techs.includes('time series') || techs.includes('forecasting')) return 'fa-chart-line';
  if (techs.includes('ab testing') || techs.includes('experimentação') || techs.includes('estatística')) return 'fa-flask';
  if (techs.includes('mlops')) return 'fa-gears';
  if (techs.includes('deploy') || techs.includes('api')) return 'fa-plug';
  if (techs.includes('clustering') || techs.includes('unsupervised')) return 'fa-diagram-project';
  if (techs.includes('anomaly detection')) return 'fa-triangle-exclamation';
  if (techs.includes('xgboost') || techs.includes('machine learning')) return 'fa-robot';

  return 'fa-cubes';
}

/**
 * HTML do topo do card:
 * - Se tiver imagem: <img ...>
 * - Se não tiver / falhar: placeholder premium
 */
function getCardMediaHTML(projeto) {
  const icon = getPlaceholderIcon(projeto);

  if (!projeto.imagem) {
    return `
      <div class="card-image placeholder">
        <div class="ph-icon"><i class="fas ${icon}"></i></div>
      </div>
    `;
  }

  return `
    <img
      src="${projeto.imagem}"
      alt="${projeto.titulo}"
      class="card-image"
      onerror="this.outerHTML='<div class=&quot;card-image placeholder&quot;><div class=&quot;ph-icon&quot;><i class=&quot;fas ${icon}&quot;></i></div></div>'"
    >
  `;
}

// RENDERIZAR CARDS
function renderCards(projetosParaRenderizar) {
  projectsGrid.innerHTML = '';

  projetosParaRenderizar.forEach(projeto => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
      ${getCardMediaHTML(projeto)}
      <div class="card-content">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <div class="card-tags">
          ${(projeto.tecnologias || []).map(tech => `<span class="tag">${tech}</span>`).join('')}
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

  modalBody.innerHTML = '';
  modalLinks.innerHTML = '';

  if (projeto.tipo === 'iframe') {
    modalBody.innerHTML = `<iframe src="${projeto.conteudo}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    if (!projeto.conteudo) {
      modalBody.innerHTML = `<p style="color: rgba(176,196,222,0.9);">Conteúdo do projeto ainda não foi adicionado.</p>`;
    } else {
      modalBody.innerHTML = `
        <img
          src="${projeto.conteudo}"
          alt="${projeto.titulo}"
          onerror="this.outerHTML='<p style=&quot;color: rgba(176,196,222,0.9);&quot;>Imagem do projeto ainda não foi adicionada.</p>'"
        >
      `;
    }
  }

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
  const busca = (searchInput.value || '').toLowerCase();
  const filtroAtivo = document.querySelector('.filter-btn.active')?.dataset?.filter || 'todos';

  const projetosFiltrados = projetos.filter(p => {
    const porBusca =
      (p.titulo || '').toLowerCase().includes(busca) ||
      (p.descricao || '').toLowerCase().includes(busca);

    const porFiltro = filtroAtivo === 'todos' || (p.tecnologias || []).includes(filtroAtivo);
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
