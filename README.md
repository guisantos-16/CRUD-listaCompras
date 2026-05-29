# Backend CRUD API

API RESTful desenvolvida com Node.js, Express e MySQL, utilizando arquitetura MVC e boas práticas de organização de código.

## Sobre o projeto

Projeto back-end criado com foco em estruturação profissional de APIs, separação de responsabilidades e escalabilidade.

A aplicação implementa um CRUD completo com autenticação de rotas, validação básica de dados e gerenciamento de variáveis de ambiente.

## Tecnologias

* Node.js
* Express.js
* MySQL
* JavaScript (ES6+)
* dotenv

## Funcionalidades

* CRUD completo
* Arquitetura MVC
* Modularização de rotas e controllers
* Validação de requisições
* Autenticação de rotas
* Variáveis de ambiente com `.env`
* Estrutura escalável e organizada

## Como executar

### 1. Clone o repositório

git clone <URL_DO_REPOSITORIO>

### 2. Instale as dependências

npm install

### 3. Configure o banco de dados

Execute o arquivo `.sql` presente no projeto para criar a tabela no MySQL.

### 4. Configure o ambiente

Renomeie o arquivo:

.env.example

para:

.env

e preencha as variáveis necessárias.

### 5. Execute o servidor

node server.js

## Testando a API

Para testar as rotas da aplicação, utilize uma ferramenta de cliente HTTP, como:

* Thunder Client
* Postman
* Insomnia

Essas ferramentas permitem simular requisições HTTP para testar os endpoints da API.

OBS: Lembrar de usar o token de autenticação das rotas.

## Estrutura

crud-mvc/
├── controllers/
├── models/
├── app.js
└── server.js

## Boas práticas aplicadas

* Separação de responsabilidades
* Middleware de autenticação
* Uso de variáveis de ambiente
* `.gitignore` configurado
* Estrutura preparada para manutenção e escalabilidade

## Autor

Guilherme Santos




