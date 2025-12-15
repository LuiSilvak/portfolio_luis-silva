// Projetos do Portfólio de Ciência de Dados (Data Science)
export const projetos = [
  {
    titulo: "Classificação de Churn (Modelos Supervisionados)",
    descricao: "Pipeline completo para prever churn: EDA, feature engineering, modelos (LogReg/RandomForest/XGBoost) e métricas.",
    imagem: "./images/thumb-churn.png",
    tipo: "imagem",
    conteudo: "./images/churn-model.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/classificacao-churn-ml",
    tecnologias: ["Python", "Machine Learning", "XGBoost"]
  },
  {
    titulo: "Previsão de Vendas (Séries Temporais)",
    descricao: "Modelagem de séries temporais com abordagem de baseline + modelos (Prophet/ARIMA) e validação temporal.",
    imagem: "./images/thumb-forecast.png",
    tipo: "imagem",
    conteudo: "./images/forecast.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/previsao-vendas-series-temporais",
    tecnologias: ["Python", "Time Series", "Forecasting"]
  },
  {
    titulo: "Segmentação de Clientes (Clustering)",
    descricao: "Segmentação com K-Means/Hierárquico, escolha de k, análise de clusters e storytelling com insights acionáveis.",
    imagem: "./images/thumb-clustering.png",
    tipo: "imagem",
    conteudo: "./images/clustering.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/segmentacao-clientes-clustering",
    tecnologias: ["Python", "Clustering", "Pandas"]
  },
  {
    titulo: "Detecção de Fraude (Classificação Desbalanceada)",
    descricao: "Tratamento de desbalanceamento (class weights/SMOTE), ajuste de threshold e avaliação por PR-AUC.",
    imagem: "./images/thumb-fraud.png",
    tipo: "imagem",
    conteudo: "./images/fraud-detection.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/deteccao-fraude-ml",
    tecnologias: ["Python", "Machine Learning", "Imbalanced"]
  },
  {
    titulo: "NLP: Análise de Sentimentos em Português",
    descricao: "Pipeline NLP com limpeza, vetorização (TF-IDF) e modelos lineares; comparação com embeddings.",
    imagem: "./images/thumb-sentiment.png",
    tipo: "imagem",
    conteudo: "./images/sentiment.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/nlp-sentimentos-ptbr",
    tecnologias: ["Python", "NLP", "Scikit-learn"]
  },
  {
    titulo: "NLP: Classificação de Textos (Multi-classe)",
    descricao: "Classificação supervisionada de documentos com validação estratificada e matriz de confusão interpretável.",
    imagem: "./images/thumb-text-classification.png",
    tipo: "imagem",
    conteudo: "./images/text-classification.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/classificacao-textos-multiclasse",
    tecnologias: ["Python", "NLP", "Machine Learning"]
  },
  {
    titulo: "Recomendação (Collaborative Filtering)",
    descricao: "Sistema de recomendação com filtragem colaborativa, avaliação offline e ranking de itens recomendados.",
    imagem: "./images/thumb-recommendation.png",
    tipo: "imagem",
    conteudo: "./images/recommendation.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/sistema-recomendacao-colaborativo",
    tecnologias: ["Python", "Recommender", "Machine Learning"]
  },
  {
    titulo: "A/B Testing e Experimentação",
    descricao: "Framework de experimentos: hipóteses, cálculo de tamanho amostral, testes estatísticos e leitura de resultados.",
    imagem: "./images/thumb-abtest.png",
    tipo: "imagem",
    conteudo: "./images/abtest.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/ab-testing-experimentacao",
    tecnologias: ["Estatística", "Python", "Experimentação"]
  },
  {
    titulo: "Modelagem Preditiva com Interpretabilidade (SHAP)",
    descricao: "Treinamento de modelo + explicabilidade com SHAP para entender variáveis mais influentes e decisões do modelo.",
    imagem: "./images/thumb-shap.png",
    tipo: "imagem",
    conteudo: "./images/shap.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/interpretabilidade-shap",
    tecnologias: ["Python", "Explainability", "SHAP"]
  },
  {
    titulo: "Feature Engineering (Boas Práticas e Pipelines)",
    descricao: "Criação de features, encoding, scaling, pipelines e validação consistente para reduzir data leakage.",
    imagem: "./images/thumb-feature-engineering.png",
    tipo: "imagem",
    conteudo: "./images/feature-engineering.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/feature-engineering-pipelines",
    tecnologias: ["Python", "Machine Learning", "Pipelines"]
  },
  {
    titulo: "Computer Vision: Classificação de Imagens",
    descricao: "Classificação de imagens com transfer learning, data augmentation e métricas por classe.",
    imagem: "./images/thumb-cv.png",
    tipo: "imagem",
    conteudo: "./images/computer-vision.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/computer-vision-classificacao",
    tecnologias: ["Python", "Computer Vision", "Deep Learning"]
  },
  {
    titulo: "Detecção de Anomalias (Unsupervised)",
    descricao: "Detecção de anomalias com Isolation Forest/Autoencoders (conceitual) e análise de casos extremos.",
    imagem: "./images/thumb-anomaly.png",
    tipo: "imagem",
    conteudo: "./images/anomaly.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/deteccao-anomalias",
    tecnologias: ["Python", "Anomaly Detection", "Unsupervised"]
  },
  {
    titulo: "MLOps: Empacotamento e Versionamento de Modelo",
    descricao: "Estrutura de projeto com versionamento, artefatos do modelo, rastreio de métricas e reprodutibilidade.",
    imagem: "./images/thumb-mlops.png",
    tipo: "imagem",
    conteudo: "./images/mlops.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/mlops-versionamento-modelo",
    tecnologias: ["Python", "MLOps", "Reprodutibilidade"]
  },
  {
    titulo: "API de Predição (Deploy Local / Docker)",
    descricao: "API simples para servir modelo treinado, com validação de entrada e endpoint de inferência.",
    imagem: "./images/thumb-api-ml.png",
    tipo: "imagem",
    conteudo: "./images/api-ml.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-predicao-ml",
    tecnologias: ["Python", "API", "Deploy"]
  },
  {
    titulo: "Projeto End-to-End: DS (EDA → Modelo → Deploy)",
    descricao: "Entrega completa: limpeza, modelagem, tuning, avaliação, explicabilidade e disponibilização em API.",
    imagem: "./images/thumb-endtoend-ds.png",
    tipo: "imagem",
    conteudo: "./images/endtoend-ds.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/projeto-end-to-end-data-science",
    tecnologias: ["Python", "Machine Learning", "End-to-End"]
  }
];
