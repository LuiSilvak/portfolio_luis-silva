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
    }
    // Adicione mais projetos aqui...
];