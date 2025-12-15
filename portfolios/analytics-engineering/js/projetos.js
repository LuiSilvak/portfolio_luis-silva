// Projetos do Portfólio de Engenharia Analítica (Analytics Engineering)
export const projetos = [
  {
    titulo: "Camada Semântica e Métricas (Metric Store)",
    descricao: "Definição de KPIs padronizados, métricas reutilizáveis e camada semântica para consumo consistente em BI.",
    imagem: "./images/thumb-metric-layer.png",
    tipo: "imagem",
    conteudo: "./images/metric-layer.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/camada-semantica-metric-store",
    tecnologias: ["SQL", "Modelagem", "BI"]
  },
  {
    titulo: "Projeto dbt Completo (Staging → Marts)",
    descricao: "Estrutura dbt com staging, intermediates e marts, seguindo boas práticas de naming, documentação e testes.",
    imagem: "./images/thumb-dbt-project.png",
    tipo: "imagem",
    conteudo: "./images/dbt-project-structure.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dbt-projeto-completo",
    tecnologias: ["dbt", "SQL", "ELT"]
  },
  {
    titulo: "Modelagem Dimensional (Fatos e Dimensões)",
    descricao: "Construção de modelo dimensional para análises rápidas: tabela fato, dimensões e conformidade de chaves.",
    imagem: "./images/thumb-dimensional.png",
    tipo: "imagem",
    conteudo: "./images/dimensional-model.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/modelagem-dimensional",
    tecnologias: ["SQL", "Modelagem", "Data Warehouse"]
  },
  {
    titulo: "Documentação Automatizada no dbt (Docs + Lineage)",
    descricao: "Geração de documentação com dbt docs, linhagem e dicionário de dados para governança do time.",
    imagem: "./images/thumb-dbt-docs.png",
    tipo: "imagem",
    conteudo: "./images/dbt-docs-lineage.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dbt-docs-lineage",
    tecnologias: ["dbt", "Governança", "Documentação"]
  },
  {
    titulo: "Testes de Qualidade em Tabelas Analíticas (dbt tests)",
    descricao: "Validações com testes genéricos e customizados: not null, unique, relationships e regras de negócio.",
    imagem: "./images/thumb-dbt-tests.png",
    tipo: "imagem",
    conteudo: "./images/dbt-tests.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dbt-testes-qualidade",
    tecnologias: ["dbt", "Qualidade de Dados", "SQL"]
  },
  {
    titulo: "Padronização de KPIs (Dicionário de Métricas)",
    descricao: "Criação de catálogo de métricas com definições, granularidade, owner e regras de cálculo para BI.",
    imagem: "./images/thumb-kpi-dictionary.png",
    tipo: "imagem",
    conteudo: "./images/kpi-dictionary.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dicionario-de-metricas-kpi",
    tecnologias: ["BI", "Governança", "Documentação"]
  },
  {
    titulo: "Incremental Models no dbt (Performance e Custo)",
    descricao: "Modelos incrementais para reduzir custo de execução e acelerar atualização, com estratégia de merge.",
    imagem: "./images/thumb-dbt-incremental.png",
    tipo: "imagem",
    conteudo: "./images/dbt-incremental.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dbt-modelos-incrementais",
    tecnologias: ["dbt", "SQL", "Performance"]
  },
  {
    titulo: "Snapshots no dbt (Histórico de Dimensões)",
    descricao: "Implementação de snapshots para rastrear mudanças em atributos, suportando SCD (Slowly Changing Dimensions).",
    imagem: "./images/thumb-dbt-snapshots.png",
    tipo: "imagem",
    conteudo: "./images/dbt-snapshots.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/dbt-snapshots-scd",
    tecnologias: ["dbt", "SQL", "Modelagem"]
  },
  {
    titulo: "Camada de Consumo para BI (Marts por Domínio)",
    descricao: "Organização de marts por domínio (vendas, financeiro, operações), com tabelas prontas para BI e governança.",
    imagem: "./images/thumb-marts.png",
    tipo: "imagem",
    conteudo: "./images/marts-dominios.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/marts-por-dominio",
    tecnologias: ["SQL", "Data Warehouse", "BI"]
  },
  {
    titulo: "Boas Práticas de Naming + Conventions Analíticas",
    descricao: "Guia prático de convenções: padrões de nomes, schemas, chaves, colunas, timestamps e documentação.",
    imagem: "./images/thumb-conventions.png",
    tipo: "imagem",
    conteudo: "./images/naming-conventions.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/boas-praticas-analytics-engineering",
    tecnologias: ["Governança", "Documentação", "SQL"]
  },
  {
    titulo: "Reconciliação de Dados (Source vs Warehouse)",
    descricao: "Reconciliação entre dados de origem e tabelas analíticas com checks, amostragem e divergências controladas.",
    imagem: "./images/thumb-reconciliation.png",
    tipo: "imagem",
    conteudo: "./images/reconciliation.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/reconciliacao-source-warehouse",
    tecnologias: ["Qualidade de Dados", "SQL", "ETL"]
  },
  {
    titulo: "Análise de Funil (Funnel) com Modelagem Analítica",
    descricao: "Modelagem de eventos para funil de conversão (etapas, tempo entre etapas) e tabelas prontas para BI.",
    imagem: "./images/thumb-funnel.png",
    tipo: "imagem",
    conteudo: "./images/funnel-model.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/modelagem-funnel-conversao",
    tecnologias: ["SQL", "Modelagem", "BI"]
  },
  {
    titulo: "Cohort Analysis (Retenção) com Tabelas Analíticas",
    descricao: "Construção de tabelas de coorte para retenção e comportamento, com métricas prontas para visualização.",
    imagem: "./images/thumb-cohort.png",
    tipo: "imagem",
    conteudo: "./images/cohort-table.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/cohort-analysis-modelagem",
    tecnologias: ["SQL", "BI", "Modelagem"]
  },
  {
    titulo: "Camada Gold com Governança (Acesso e Auditoria)",
    descricao: "Definição de camada gold com regras de acesso, auditoria e padronização para consumo seguro no BI.",
    imagem: "./images/thumb-gold-governance.png",
    tipo: "imagem",
    conteudo: "./images/gold-governance.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/camada-gold-governanca",
    tecnologias: ["Governança", "Data Warehouse", "SQL"]
  },
  {
    titulo: "Projeto End-to-End: Modelagem + Métricas + BI",
    descricao: "Entrega completa do ciclo analítico: modelo dbt, métricas padronizadas e camada final para dashboards.",
    imagem: "./images/thumb-end-to-end-ae.png",
    tipo: "imagem",
    conteudo: "./images/end-to-end-ae.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/end-to-end-analytics-engineering",
    tecnologias: ["dbt", "SQL", "BI"]
  }
];
