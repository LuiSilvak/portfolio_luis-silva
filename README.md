# Portfólio — Luís Silva

Portfólio profissional multidisciplinar: Análise de Dados, Desenvolvimento Full Stack,
Automação, Infraestrutura de TI e Engenharia Mecânica.

🔗 **Site:** https://luisilvak.github.io/portfolio_luis-silva/

## Destaques

- Design premium dark com glassmorphism, gradientes e animações suaves
- **Zero frameworks e zero build** — HTML, CSS e JavaScript puros
- Animações de reveal com `IntersectionObserver` (sem bibliotecas externas)
- Efeito de digitação no hero implementado em JS puro
- 9 galerias de portfólio por área, com filtros, busca e modal de detalhes
- Acessível: skip link, `aria-*`, navegação por teclado e `prefers-reduced-motion`
- SEO: Open Graph, Twitter Card, JSON-LD (Schema.org), sitemap e robots.txt

## Estrutura

```
├── index.html                  # Página principal
├── assets/
│   ├── css/
│   │   ├── style.css           # Design system da página principal
│   │   └── portfolio.css       # Estilo compartilhado das 9 subpáginas
│   ├── js/
│   │   ├── main.js             # Interações da página principal
│   │   └── portfolio.js        # Módulo compartilhado (cards, filtros, busca, modal)
│   └── img/
├── docs/
│   └── Luis_Silva_Curriculo.pdf
└── portfolios/
    └── <área>/
        ├── index.html          # Template unificado (tema via classe no <body>)
        ├── js/projetos.js      # Dados dos projetos da área (edite aqui!)
        └── js/script.js        # Bootstrap: importa o módulo compartilhado
```

## Como adicionar projetos

Edite o arquivo `portfolios/<área>/js/projetos.js` e adicione um objeto ao array:

```js
{
  titulo: "Nome do Projeto",
  descricao: "Descrição curta do projeto.",
  imagem: "./images/capa.png",        // opcional — sem imagem, mostra placeholder
  tipo: "imagem",                     // "imagem" ou "iframe" (ex.: Power BI)
  conteudo: "./images/detalhe.png",   // conteúdo exibido no modal
  linkLive: "",                       // link da demo (opcional)
  linkRepo: "https://github.com/...", // link do repositório (opcional)
  tecnologias: ["Python", "SQL"]
}
```

## Como visualizar localmente

As subpáginas usam módulos ES (`import`), então é necessário um servidor local:

```bash
git clone https://github.com/LuiSilvak/portfolio_luis-silva.git
cd portfolio_luis-silva
python -m http.server 8000
# Abra http://localhost:8000
```

## Formulário de contato

O formulário usa o [Formspree](https://formspree.io). Para ativá-lo, crie um formulário
gratuito e substitua `SEU_CODIGO_AQUI` no `action` do `<form>` em `index.html`.

## Contato

- **Email:** luisilvaoliveira4@gmail.com
- **LinkedIn:** https://linkedin.com/in/luissilvak
- **GitHub:** https://github.com/LuiSilvak
