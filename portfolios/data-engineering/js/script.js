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
 * Escolhe um ícone (FontAwesome) para o placeholder, baseado nas tecnologias.
 * Você pode ajustar os mapeamentos livremente.
 */
function getPlaceholderIcon(projeto) {
  const techs = (projeto.tecnologias || []).map(t => t.toLowerCase());

  if (techs.includes('kafka')) return 'fa-network-wired';
  if (techs.includes('spark') || techs.includes('big data')) return 'fa-bolt';
  if (techs.includes('airflow')) return 'fa-diagram-project';
  if (techs.includes('dbt')) return 'fa-code-branch';
  if (techs.includes('data lake') || techs.includes('lakehouse')) return 'fa-layer-group';
  if (techs.includes('data warehouse') || techs.includes('modelagem')) return 'fa-database';
  if (techs.includes('observabilidade') || techs.includes('logs')) return 'fa-chart-line';
  if (techs.includes('qualidade de dados')) return 'fa-shield-halved';
  if (techs.includes('cdc')) return 'fa-arrows-rotate';
  if (techs.includes('api')) return 'fa-plug';
  if (techs.includes('etl') || techs.includes('elt')) return 'fa-gears';

  return 'fa-cubes';
}

/**
 * Retorna o HTML do topo do card:
 * - Se tiver imagem: <img ...>
 * - Se não tiver ou der erro: placeholder premium
 */
function getCardMediaHTML(projeto) {
  const icon = getPlaceholderIcon(projeto);

  // Se não houver imagem definida, já coloca placeholder direto
  if (!projeto.imagem) {
    return `
      <div class="card-image placeholder">
        <div class="ph-icon"><i class="fas ${icon}"></i></div>
      </div>
    `;
  }

  // Se houver imagem, adiciona onerror para fallback automático
  // Observação: this.outerHTML troca o <img> pelo placeholder caso falhe.
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

  // Limpa o conteúdo anterior
  modalBody.innerHTML = '';
  modalLinks.innerHTML = '';

  // Adiciona o conteúdo principal (iframe ou imagem)
  if (projeto.tipo === 'iframe') {
    modalBody.innerHTML = `<iframe src="${projeto.conteudo}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    // Fallback também dentro do modal (se imagem não existir)
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
  modalBody.innerHTML = ''; // Limpa o iframe para parar vídeos/aplicações
}

// FILTRAGEM E BUSCA
function filterAndSearch() {
  const busca = searchInput.value.toLowerCase();
  const filtroAtivo = document.querySelector('.filter-btn.active').dataset.filter;

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
