# 🏷 Rotas da API

🔗 Base URL: http://localhost:3000


## 📦 1. Produtos (/products)

### 🔍 1.1 Listar todos os produtos
```http
GET /products
```

📌 Resposta:
```json
[
  { "id": 1, "name": "Produto A", "price": 99.90 },
  { "id": 2, "name": "Produto B", "price": 149.90 }
]
```

### 🔍 1.2 Buscar produto por ID
```http
GET /products/{id}
```

📌 Resposta:
```json
{ "id": 1, "name": "Produto A", "price": 99.90 }
```

### 🔍 1.3 Buscar produto por nome
```http
GET /products/search?name=Produto
```

📌 Resposta:
```json
[
  { "id": 1, "name": "Produto A", "price": 99.90 }
]
```

### ➕ 1.4 Criar um novo produto
```http
POST /products
Content-Type: application/json
```

📌 Body:
```json
{ "name": "Produto C", "price": 199.90 }
```

📌 Resposta:
```json
{ "id": 3, "name": "Produto C", "price": 199.90 }
````

### 🔄 1.5 Atualizar um produto
```http
PUT /products/{id}
Content-Type: application/json
```

📌 Body:
```json
{ "name": "Produto X", "price": 179.90 }
```

📌 Resposta:
```json
{ "id": 1, "name": "Produto X", "price": 179.90 }
```

### ❌ 1.6 Excluir um produto
```http
DELETE /products/{id}
```

📌 Resposta:
```json
{ "message": "Produto removido com sucesso" }
```

### 🔢 1.7 Contagem total de produtos
```http
GET /products/count
```

📌 Resposta:
```json
{ "total": 10 }
```
