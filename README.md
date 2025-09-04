# Atividade Avaliativa 01 
# 🛒 API de Produtos (CRUD em memória)

## 📌 Contexto

Você foi contratado para desenvolver uma **API REST** simples para gerenciar uma lista de **produtos**.
O objetivo é praticar a implementação de rotas, manipulação de dados em memória e uso correto dos status codes HTTP.

---

## 📚 Requisitos da Atividade

### 🔹 Estrutura do Projeto

* Criar uma aplicação em **Node.js** utilizando **Express.js**.
* Os dados dos produtos devem ser armazenados em **memória** (um array).
* Cada produto deve seguir o schema:

  ```
  {
    "id": número,
    "nome": string,
    "preco": número
  }
  ```

### 🔹 Funcionalidades (CRUD)

A API deve expor as seguintes rotas:

1. **POST /produtos**

   * Adiciona um novo produto.
   * Deve validar se `id` é numérico e único.
   * Retorna **201 Created** em caso de sucesso.

2. **GET /produtos**

   * Retorna todos os produtos cadastrados.

3. **GET /produtos/\:id**

   * Retorna um único produto pelo `id`.
   * Caso não exista, retornar **404 Not Found**.

4. **PUT /produtos/\:id**

   * Atualiza **todos os campos** (`nome` e `preco`) de um produto existente.
   * Caso não exista, retornar **404 Not Found**.

5. **PATCH /produtos/\:id**

   * Atualiza **parcialmente** (`nome` ou `preco`) de um produto.
   * Caso não exista, retornar **404 Not Found**.

6. **DELETE /produtos/\:id**

   * Remove um produto da lista.
   * Retornar **204 No Content** em caso de sucesso.
   * Caso não exista, retornar **404 Not Found**.

---

## 🔹 Regras importantes

* IDs devem ser sempre **numéricos**.
* Os **status codes** devem ser utilizados corretamente:

  * **201** → criação bem-sucedida.
  * **204** → remoção bem-sucedida, sem corpo de resposta.
  * **404** → recurso não encontrado.

---

## 🛠️ Testes

* Testar todas as rotas no **Postman**.
* Criar pelo menos cinco produtos diferentes para os testes.
* Salvar ou exportar as requisições realizadas.

---

## 📌 Entregáveis

1. **Repositório no GitHub** com:

   * Código da aplicação.
   

2. **Export/prints do Postman** mostrando os testes de cada rota.

3. **Readme.md** deve conter:

   * Descrição das rotas implementadas.
   * Status codes utilizados em cada caso.
   * Dificuldades encontradas e como foram resolvidas.
   * Instruções explicando como rodar o projeto.

---

## 🎯 Critérios de Avaliação

* Implementação correta do CRUD em memória.
* Validação de IDs numéricos.
* Uso adequado dos status codes HTTP.
* Organização do projeto e clareza do código.
* Documentação (`README` e relatório).

---
