// Projetos do Portfólio de Engenharia de Dados
export const projetos = [
  {
    titulo: "Pipeline ETL com Airflow (Batch)",
    descricao: "Orquestração de ETL diário com DAGs no Apache Airflow, extraindo dados, transformando e carregando em Data Warehouse.",
    imagem: "./images/thumb-airflow-etl.png",
    tipo: "imagem",
    conteudo: "./images/airflow-dag.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/pipeline-airflow-etl",
    tecnologias: ["Airflow", "Python", "ETL"]
  },
  {
    titulo: "ELT com dbt em Data Warehouse",
    descricao: "Modelagem analítica com dbt (staging, marts) e testes de qualidade para camadas confiáveis no warehouse.",
    imagem: "./images/thumb-dbt.png",
    tipo: "imagem",
    conteudo: "./images/dbt-lineage.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/elt-dbt-warehouse",
    tecnologias: ["dbt", "SQL", "ELT"]
  },
  {
    titulo: "Ingestão em Tempo Real com Kafka",
    descricao: "Pipeline de streaming com Kafka para ingestão de eventos em tempo real e persistência em storage analítico.",
    imagem: "./images/thumb-kafka.png",
    tipo: "imagem",
    conteudo: "./images/kafka-topics.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/streaming-kafka-ingestao",
    tecnologias: ["Kafka", "Streaming", "ETL"]
  },
  {
    titulo: "Processamento Distribuído com PySpark",
    descricao: "Transformações e agregações em larga escala utilizando PySpark, com particionamento e otimizações.",
    imagem: "./images/thumb-pyspark.png",
    tipo: "imagem",
    conteudo: "./images/spark-job.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/processamento-pyspark",
    tecnologias: ["Spark", "Python", "Big Data"]
  },
  {
    titulo: "Lakehouse: Data Lake + Camadas Bronze/Silver/Gold",
    descricao: "Estruturação de Data Lake com camadas bronze/silver/gold, padronização e governança de dados.",
    imagem: "./images/thumb-lakehouse.png",
    tipo: "imagem",
    conteudo: "./images/lakehouse-camadas.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/lakehouse-bronze-silver-gold",
    tecnologias: ["Data Lake", "Lakehouse", "Governança"]
  },
  {
    titulo: "CDC (Change Data Capture) para Sincronização",
    descricao: "Implementação de estratégia de CDC para replicação incremental entre bases e camada analítica.",
    imagem: "./images/thumb-cdc.png",
    tipo: "imagem",
    conteudo: "./images/cdc-flow.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/cdc-sincronizacao-dados",
    tecnologias: ["CDC", "SQL", "ETL"]
  },
  {
    titulo: "Qualidade de Dados com Great Expectations",
    descricao: "Validações automáticas, testes de integridade e relatórios de qualidade integrados ao pipeline.",
    imagem: "./images/thumb-great-expectations.png",
    tipo: "imagem",
    conteudo: "./images/great-expectations-suite.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/qualidade-great-expectations",
    tecnologias: ["Qualidade de Dados", "Python", "ETL"]
  },
  {
    titulo: "Modelo Dimensional (Star Schema) no Warehouse",
    descricao: "Construção de modelo dimensional com fatos e dimensões para análise performática e escalável.",
    imagem: "./images/thumb-star-schema.png",
    tipo: "imagem",
    conteudo: "./images/star-schema.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/modelo-dimensional-star-schema",
    tecnologias: ["SQL", "Modelagem", "Data Warehouse"]
  },
  {
    titulo: "Data Catalog e Dicionário de Dados",
    descricao: "Documentação e catálogo de dados com padronização de nomes, definições e linhagem de tabelas.",
    imagem: "./images/thumb-data-catalog.png",
    tipo: "imagem",
    conteudo: "./images/data-catalog.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/data-catalog-dicionario",
    tecnologias: ["Governança", "Documentação", "Data Catalog"]
  },
  {
    titulo: "API de Ingestão com Validação e Deduplicação",
    descricao: "API para recebimento de dados com validações, deduplicação e escrita consistente em storage.",
    imagem: "./images/thumb-api-ingestao.png",
    tipo: "imagem",
    conteudo: "./images/api-ingestao.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-ingestao-validacao",
    tecnologias: ["Python", "API", "ETL"]
  },
  {
    titulo: "Orquestração de Pipelines com Dependências e SLA",
    descricao: "Pipelines com monitoramento, alertas, SLAs e tratamento de falhas para confiabilidade operacional.",
    imagem: "./images/thumb-orquestracao.png",
    tipo: "imagem",
    conteudo: "./images/pipeline-sla.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/orquestracao-pipelines-sla",
    tecnologias: ["Airflow", "Observabilidade", "ETL"]
  },
  {
    titulo: "Particionamento e Otimização de Consultas",
    descricao: "Estratégias de particionamento, índices e otimizações para performance em bases analíticas.",
    imagem: "./images/thumb-otimizacao.png",
    tipo: "imagem",
    conteudo: "./images/query-optimization.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/otimizacao-consultas-particionamento",
    tecnologias: ["SQL", "Performance", "Data Warehouse"]
  },
  {
    titulo: "Carga Incremental e Controle de Watermark",
    descricao: "Implementação de carga incremental com watermark para reduzir custo e acelerar atualização de dados.",
    imagem: "./images/thumb-watermark.png",
    tipo: "imagem",
    conteudo: "./images/watermark.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/carga-incremental-watermark",
    tecnologias: ["ETL", "Python", "SQL"]
  },
  {
    titulo: "Pipeline de Logs e Observabilidade de Dados",
    descricao: "Centralização de logs e métricas do pipeline com rastreabilidade, auditoria e diagnósticos rápidos.",
    imagem: "./images/thumb-observabilidade.png",
    tipo: "imagem",
    conteudo: "./images/observability.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/observabilidade-pipelines-dados",
    tecnologias: ["Observabilidade", "Logs", "ETL"]
  },
  {
    titulo: "Pipeline Completo: Ingestão → Transformação → Camada Analítica",
    descricao: "Projeto end-to-end integrando ingestão, padronização, qualidade e disponibilização para consumo analítico.",
    imagem: "./images/thumb-end-to-end.png",
    tipo: "imagem",
    conteudo: "./images/end-to-end.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/pipeline-end-to-end-data-engineering",
    tecnologias: ["ETL", "Data Lake", "Data Warehouse"]
  }
];
