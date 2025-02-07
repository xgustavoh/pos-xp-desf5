# 🏗 Arquitetura do Sistema

Este documento detalha a arquitetura da API de Vendas Online, explicando seu modelo arquitetural, estrutura do código e diagramas do C4 Model.

---

## 📌 1. Visão Geral

A API de Vendas Online é responsável por gerenciar clientes, produtos e pedidos. Ela segue o padrão REST API e está estruturada de acordo com a arquitetura MVC.

### Principais Tecnologias:
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Banco de Dados)

## 🏛 2. Modelo Arquitetural (MVC)
A API segue o padrão MVC, organizando o código em Camadas para garantir separação de responsabilidades.

### 📦 Estrutura do Código
```bash
📦 src
 ┣ 📂 @types        # Definição dos modelos (.d.ts)
 ┣ 📂 controllers   # Controladores (camada de roteamento da API)
 ┣ 📂 services      # Regras de negócio (lógica da aplicação)
 ┣ 📂 repositories  # Repositórios (acesso ao banco de dados)
 ┣ 📂 routers       # Rotas disponibilizada para a API RESTful
 ┗ 📄 app.js        # Configuração principal da API
```

## 🏗 3. C4 Model - Diagramas

1. [Diagrama de Contexto](diagrams/Context.puml)
2. [Diagrama de Contêineres](diagrams/Container.puml)
3. [Diagrama de Componentes](diagrams/Component.puml)
3. [Diagrama de Código](diagrams/Code.puml)


## 🚀 4. Execução (Direta / Sem Docker)

1. Instale as dependências:

```bash
npm i
```

2.  Configure as variáveis de ambiente em um arquivo `.env`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/ormvendas
PORT=3000
```

3. Execute a API:

```bash
npm start
```

> A API estará disponível em http://localhost:3000.


#### 📌 Para mais detalhes, acesse a [documentação da API](docs/api.md).

