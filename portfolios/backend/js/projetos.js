// Projetos do Portfólio de Desenvolvimento Back-End
export const projetos = [
  {
    titulo: "API REST de Gestão de Usuários",
    descricao: "API REST completa com CRUD, validações e paginação, preparada para integração com front-end.",
    imagem: "./images/thumb-api-users.png",
    tipo: "imagem",
    conteudo: "./images/api-users.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-gestao-usuarios",
    tecnologias: ["API", "Java", "Spring Boot", "PostgreSQL"]
  },
  {
    titulo: "Autenticação JWT + Refresh Token",
    descricao: "Implementação de autenticação segura com JWT, refresh token, roles e controle de sessão.",
    imagem: "./images/thumb-jwt.png",
    tipo: "imagem",
    conteudo: "./images/jwt.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/auth-jwt-refresh",
    tecnologias: ["API", "Spring Boot", "Security", "JWT"]
  },
  {
    titulo: "API de Catálogo de Produtos",
    descricao: "Serviço back-end para catálogo com filtros avançados, ordenação e busca por parâmetros.",
    imagem: "./images/thumb-catalogo.png",
    tipo: "imagem",
    conteudo: "./images/catalogo.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-catalogo-produtos",
    tecnologias: ["API", "Spring Boot", "PostgreSQL"]
  },
  {
    titulo: "Gateway API e Rate Limit",
    descricao: "Gateway com roteamento, rate limiting e padronização de respostas para microsserviços.",
    imagem: "./images/thumb-gateway.png",
    tipo: "imagem",
    conteudo: "./images/gateway.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-gateway-rate-limit",
    tecnologias: ["API", "Spring Cloud", "Gateway"]
  },
  {
    titulo: "Microsserviço de Notificações",
    descricao: "Serviço de notificações desacoplado com filas, retries e arquitetura orientada a eventos.",
    imagem: "./images/thumb-notify.png",
    tipo: "imagem",
    conteudo: "./images/notify.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/microservice-notifications",
    tecnologias: ["API", "Java", "Mensageria"]
  },
  {
    titulo: "Sistema de Logs e Auditoria",
    descricao: "Registro de auditoria de ações críticas, trilha de alterações e logs estruturados por módulo.",
    imagem: "./images/thumb-auditoria.png",
    tipo: "imagem",
    conteudo: "./images/auditoria.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/logs-auditoria",
    tecnologias: ["Spring Boot", "PostgreSQL", "API"]
  },
  {
    titulo: "Integração com Serviços Externos",
    descricao: "Integração robusta com APIs externas com timeout, retry e tratamento de falhas.",
    imagem: "./images/thumb-integracao.png",
    tipo: "imagem",
    conteudo: "./images/integracao.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/integracao-api-externa",
    tecnologias: ["API", "Java", "Spring Boot"]
  },
  {
    titulo: "Upload de Arquivos + Storage",
    descricao: "Serviço para upload e download com validação, versionamento e organização por diretórios.",
    imagem: "./images/thumb-upload.png",
    tipo: "imagem",
    conteudo: "./images/upload.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/upload-storage-service",
    tecnologias: ["API", "Spring Boot", "Storage"]
  },
  {
    titulo: "API de Relatórios com Exportação",
    descricao: "Geração de relatórios com filtros e exportação para PDF/CSV com padronização de endpoints.",
    imagem: "./images/thumb-relatorios.png",
    tipo: "imagem",
    conteudo: "./images/relatorios.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/api-relatorios-export",
    tecnologias: ["API", "Java", "Spring Boot"]
  },
  {
    titulo: "Cache e Performance com Redis",
    descricao: "Camada de cache para endpoints críticos, com TTL, invalidação e métricas de performance.",
    imagem: "./images/thumb-redis.png",
    tipo: "imagem",
    conteudo: "./images/redis.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/cache-redis-api",
    tecnologias: ["API", "Redis", "Spring Boot"]
  },
  {
    titulo: "Paginação, Ordenação e Filtros",
    descricao: "Implementação padrão de paginação, ordenação e filtros reutilizáveis em múltiplos módulos.",
    imagem: "./images/thumb-pagination.png",
    tipo: "imagem",
    conteudo: "./images/pagination.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/paginacao-ordenacao-filtros",
    tecnologias: ["API", "Spring Boot", "PostgreSQL"]
  },
  {
    titulo: "Tratamento Global de Erros",
    descricao: "Camada centralizada de exceptions, respostas padronizadas e mensagens amigáveis.",
    imagem: "./images/thumb-errors.png",
    tipo: "imagem",
    conteudo: "./images/errors.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/global-exception-handler",
    tecnologias: ["API", "Spring Boot"]
  },
  {
    titulo: "Documentação Automática com Swagger",
    descricao: "Endpoints documentados com Swagger/OpenAPI, exemplos, schemas e organização por tags.",
    imagem: "./images/thumb-swagger.png",
    tipo: "imagem",
    conteudo: "./images/swagger.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/swagger-openapi-api",
    tecnologias: ["API", "Swagger", "OpenAPI"]
  },
  {
    titulo: "Testes Automatizados (Unit + Integration)",
    descricao: "Testes unitários e de integração cobrindo services, controllers e camadas críticas.",
    imagem: "./images/thumb-tests.png",
    tipo: "imagem",
    conteudo: "./images/tests.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/testes-api-spring",
    tecnologias: ["Java", "Spring Boot", "Testes"]
  },
  {
    titulo: "Arquitetura em Camadas + Boas Práticas",
    descricao: "Projeto completo em camadas (controller/service/repository), DTOs, validação e clean code.",
    imagem: "./images/thumb-architecture.png",
    tipo: "imagem",
    conteudo: "./images/architecture.png",
    linkLive: "",
    linkRepo: "https://github.com/LuiSilvak/arquitetura-camadas-api",
    tecnologias: ["Spring Boot", "API", "PostgreSQL"]
  }
];
