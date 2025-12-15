// Apenas dados dos projetos de Análise de Dados
export const projetos = [
    {
        titulo: "Dashboard de Vendas (Power BI)",
        descricao: "Análise de performance de vendas para uma rede de varejo, com KPIs de faturamento, ticket médio e performance de vendedores.",
        imagem: "./images/thumb-vendas-powerbi.png", // Crie e coloque a imagem nesta pasta
        tipo: 'iframe', // 'iframe' ou 'imagem'
        conteudo: "https://app.powerbi.com/view?r=...", // Link do embed
        linkLive: "https://app.powerbi.com/view?r=...", // Link para abrir em nova aba
        linkRepo: "https://github.com/LuiSilvak/dashboard-vendas",
        tecnologias: ["Power BI", "DAX", "ETL"]
    },
    {
        titulo: "Automação de Relatórios com Python",
        descricao: "Script que coleta dados de múltiplas planilhas, realiza a limpeza e consolidação, e gera um relatório PDF diário automaticamente.",
        imagem: "./images/thumb-python-automacao.png",
        tipo: 'imagem',
        conteudo: "./images/python-script-exemplo.png", // Um print do código ou do resultado
        linkLive: "", // Sem link live para este
        linkRepo: "https://github.com/LuiSilvak/automacao-relatorios",
        tecnologias: ["Python", "Pandas", "Matplotlib"]
    },
    {
        titulo: "Segmentação de Clientes com SQL",
        descricao: "Análise de uma base de dados de clientes para identificar diferentes perfis de compra, utilizando queries SQL avançadas.",
        imagem: "./images/thumb-sql-clientes.png",
        tipo: 'imagem',
        conteudo: "./images/sql-query-exemplo.png", // Um print da query
        linkLive: "",
        linkRepo: "https://github.com/LuiSilvak/segmentacao-sql",
        tecnologias: ["SQL", "PostgreSQL", "BI"]
    },
    {
    titulo: "Análise de Churn de Clientes",
    descricao: "Estudo para identificar fatores associados ao cancelamento de clientes, utilizando análise exploratória e métricas de retenção.",
    imagem: "./images/thumb-churn.png",
    tipo: "imagem",
    conteudo: "./images/churn-eda.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/analise-churn-clientes",
    tecnologias: ["Python", "Pandas", "EDA"]
},
{
    titulo: "Dashboard Financeiro Mensal",
    descricao: "Dashboard interativo para acompanhamento de receitas, despesas e lucro mensal.",
    imagem: "./images/thumb-financeiro.png",
    tipo: "iframe",
    conteudo: "https://app.powerbi.com/view?r=...",
    linkLive: "https://app.powerbi.com/view?r=...",
    linkRepo: "",
    tecnologias: ["Power BI", "DAX", "Financeiro"]
},
{
    titulo: "Análise de Séries Temporais de Vendas",
    descricao: "Avaliação do comportamento de vendas ao longo do tempo para identificação de sazonalidade.",
    imagem: "./images/thumb-series-temporais.png",
    tipo: "imagem",
    conteudo: "./images/series-temporais.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/series-temporais-vendas",
    tecnologias: ["Python", "Pandas", "Matplotlib"]
},
{
    titulo: "ETL de Dados Comerciais",
    descricao: "Pipeline ETL para ingestão, tratamento e consolidação de dados comerciais.",
    imagem: "./images/thumb-etl.png",
    tipo: "imagem",
    conteudo: "./images/etl-pipeline.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/etl-dados-comerciais",
    tecnologias: ["Python", "ETL", "SQL"]
},
{
    titulo: "Análise de Desempenho de Vendedores",
    descricao: "Avaliação individual e comparativa de performance de equipes comerciais.",
    imagem: "./images/thumb-vendedores.png",
    tipo: "iframe",
    conteudo: "https://app.powerbi.com/view?r=...",
    linkLive: "https://app.powerbi.com/view?r=...",
    linkRepo: "",
    tecnologias: ["Power BI", "Indicadores", "BI"]
},
{
    titulo: "Exploração de Dados de Marketing",
    descricao: "Análise de campanhas de marketing digital para identificar canais mais eficientes.",
    imagem: "./images/thumb-marketing.png",
    tipo: "imagem",
    conteudo: "./images/marketing-eda.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/analise-marketing",
    tecnologias: ["Python", "EDA", "Marketing"]
},
{
    titulo: "Análise de Ticket Médio",
    descricao: "Estudo do comportamento do ticket médio por período e categoria de produto.",
    imagem: "./images/thumb-ticket-medio.png",
    tipo: "imagem",
    conteudo: "./images/ticket-medio.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/ticket-medio",
    tecnologias: ["SQL", "PostgreSQL", "BI"]
},
{
    titulo: "Automação de Indicadores de KPIs",
    descricao: "Script automatizado para cálculo e atualização diária de indicadores estratégicos.",
    imagem: "./images/thumb-kpis.png",
    tipo: "imagem",
    conteudo: "./images/kpis-script.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/automacao-kpis",
    tecnologias: ["Python", "Automação", "Pandas"]
},
{
    titulo: "Análise de Dados de Logística",
    descricao: "Avaliação de prazos, atrasos e eficiência logística a partir de dados operacionais.",
    imagem: "./images/thumb-logistica.png",
    tipo: "imagem",
    conteudo: "./images/logistica.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/analise-logistica",
    tecnologias: ["Python", "SQL", "Logística"]
},
{
    titulo: "Dashboard de Indicadores Operacionais",
    descricao: "Painel de acompanhamento de métricas operacionais em tempo gerencial.",
    imagem: "./images/thumb-operacional.png",
    tipo: "iframe",
    conteudo: "https://app.powerbi.com/view?r=...",
    linkLive: "https://app.powerbi.com/view?r=...",
    linkRepo: "",
    tecnologias: ["Power BI", "KPIs", "Gestão"]
},
{
    titulo: "Análise Estatística Descritiva",
    descricao: "Resumo estatístico de bases de dados com métricas de tendência central e dispersão.",
    imagem: "./images/thumb-estatistica.png",
    tipo: "imagem",
    conteudo: "./images/estatistica.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/estatistica-descritiva",
    tecnologias: ["Python", "Estatística", "Pandas"]
},
{
    titulo: "Limpeza e Padronização de Dados",
    descricao: "Processo completo de tratamento, normalização e validação de dados brutos.",
    imagem: "./images/thumb-data-cleaning.png",
    tipo: "imagem",
    conteudo: "./images/data-cleaning.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/data-cleaning",
    tecnologias: ["Python", "Data Cleaning", "Qualidade de Dados"]
}

];