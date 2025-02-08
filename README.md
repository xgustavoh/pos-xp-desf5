> DESF5 - Atividade do Desafio Final - Pós graduação XP

# 🏪 API de Vendas Online

Esta API REST permite gerenciar Clientes, Produtos e Pedidos, oferecendo operações CRUD e funcionalidades adicionais como busca e contagem de registros.

### Principais Tecnologias:
- Node.js (20+)
- Express.js
- Prisma ORM
- PostgreSQL (Banco de Dados)

### Docs:

-  [📌 API (Endpoints)](docs/api.md)
-  [🏗 Arquitetura do Sistema](docs/arquitetura.md)

### Run:

1. Install Packages
```bash
$ npm install
```

2. Run PostgreSQL (opicinal)
```bash
$ docker compose up
```

3. Inicialize o banco de dados via prisma
```bash
$ npx prisma db push
```

4. Execute o projeto
```bash
$ npm dev
```