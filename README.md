# Atividade Avaliativa Back-End

Este é um projeto de back-end desenvolvido como parte de uma atividade avaliativa. Ele fornece uma API para gerenciar informações sobre jogos.

## 🚀 Como instalar e executar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados configurado (ex.: PostgreSQL, MySQL, SQLite)

### Passos para instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/VitorArgeri/Atividade-Avaliativa-Back-End
   cd Atividade-Avaliativa-Back-End


2. Instale as dependências:
  npm install


3. Configure o banco de dados:
  Crie um arquivo .env na raiz do projeto com a variável DATABASE_URL apontando para o seu banco de dados. Exemplo:
  DATABASE_URL="file:./dev.db"

4. Execute as migrações do Prisma:
  npx prisma migrate dev


5. Inicie o servidor:
  npm run dev


6. O servidor estará disponível em:
  http://localhost:3000

---

## 📚 Exemplos de requisições para cada endpoint

### **Games**
#### 1. Listar todos os games
- **Endpoint**: `GET /api/games`
- **Exemplo de resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "God of War: Ragnarok",
      "price": 69.99,
      "releaseYear": 2022,
      "developer": "Santa Monica Studio",
      "genres": "Ação, Aventura",
      "platforms": "PlayStation 4,PlayStation 5",
      "imageURL": "https://example.com/god-of-war-ragnarok.jpg",
      "createdAt": "2025-04-10T12:00:00.000Z",
      "updatedAt": "2025-04-10T12:00:00.000Z"
    }
  ]
  ```

#### 2. Buscar um game por ID
- **Endpoint**: `GET /api/games/:id`
- **Exemplo de resposta**:
  ```json
  {
    "id": 1,
    "title": "God of War: Ragnarok",
    "price": 69.99,
    "releaseYear": 2022,
    "developer": "Santa Monica Studio",
    "genres": "Ação, Aventura",
    "platforms": "PlayStation 4,PlayStation 5",
    "imageURL": "https://example.com/god-of-war-ragnarok.jpg",
    "createdAt": "2025-04-10T12:00:00.000Z",
    "updatedAt": "2025-04-10T12:00:00.000Z"
  }
  ```

#### 3. Criar um novo game
- **Endpoint**: `POST /api/games`
- **Corpo da requisição**:
  ```json
  {
    "title": "The Legend of Zelda: Breath of the Wild",
    "price": 59.99,
    "releaseYear": 2017,
    "developer": "Nintendo",
    "genres": "Ação, Aventura",
    "platforms": "Nintendo Switch",
    "imageURL": "https://example.com/zelda.jpg"
  }
  ```
- **Exemplo de resposta**:
  ```json
  {
    "id": 2,
    "title": "The Legend of Zelda: Breath of the Wild",
    "price": 59.99,
    "releaseYear": 2017,
    "developer": "Nintendo",
    "genres": "Ação,Aventura",
    "platforms": "Nintendo Switch",
    "imageURL": "https://example.com/zelda.jpg",
    "createdAt": "2025-04-10T12:00:00.000Z",
    "updatedAt": "2025-04-10T12:00:00.000Z"
  }
  ```

#### 4. Atualizar um game
- **Endpoint**: `PUT /api/games/:id`
- **Corpo da requisição**:
  ```json
  {
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "price": 69.99
  }
  ```
- **Exemplo de resposta**:
  ```json
  {
    "id": 2,
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "price": 69.99,
    "releaseYear": 2017,
    "developer": "Nintendo",
    "genres": "Ação,Aventura",
    "platforms": "Nintendo Switch",
    "imageURL": "https://example.com/zelda.jpg",
    "createdAt": "2025-04-10T12:00:00.000Z",
    "updatedAt": "2025-04-10T12:30:00.000Z"
  }
  ```

#### 5. Deletar um game
- **Endpoint**: `DELETE /api/games/:id`
- **Exemplo de resposta**:
  - Status `204 No Content` (sem corpo na resposta).

---

## 🧰 Tecnologias utilizadas

- **Node.js**: Plataforma de execução para o JavaScript.
- **Express.js**: Framework para criação de APIs.
- **Prisma ORM**: Gerenciamento do banco de dados.
- **SQLite** (ou outro banco de dados configurado): Armazenamento dos dados.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## 🛠️ Decisões de design e arquitetura

1. **Prisma ORM**:
   - Utilizado para facilitar a interação com o banco de dados e garantir consistência nos modelos de dados.

2. **Estrutura MVC**:
   - O projeto segue o padrão Model-View-Controller (MVC) para organizar o código de forma modular e escalável.

3. **Validação de dados**:
   - Validações básicas foram implementadas nos controladores para garantir que os dados enviados sejam consistentes.

4. **API RESTful**:
   - A API foi projetada seguindo os princípios REST para facilitar a integração com clientes.

