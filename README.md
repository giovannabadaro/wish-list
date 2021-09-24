# Wish List

Esta é um API que consiste em cadastrar, deletar, atualizar e listar Clientes. Essa API também conta com uma Wish List,
onde o Cliente pode adicionar qualquer produto existente que provém da [API do Magalu](https://gist.github.com/Bgouveia/9e043a3eba439489a35e70d1b5ea08ec).
O cliente pode ter apenas uma Wish List, e cadastrar apenas produtos que ainda não existem em sua lista.

## Instalação

Para instalar o projeto em sua máquina, primeiramente certifique-se de ter instalado em sua maquina:

- [Node v15.8](https://nodejs.org/en/)
- [docker-compose](https://docs.docker.com/compose/install/)

#### Agora você precisa configurar as variáveis de ambiente do projeto

- Copie tudo que está dentro do arquivo `.env.example` que se encontra na raiz do projeto,
- Crie um novo arquivo chamado `.env` na raiz do projeto
- Cole tudo que está dentro do `.env.example` no `.env`

#### Precisamos subir o banco de dados

O banco utilizado nesse projeto foi o postgresSQL

#### Rode o docker-compose

```bash
  docker-compose up
```

#### Dê um start no container

```bash
  docker-compose start
```

Esse projeto esta trabalhando com versionamento de alterações no banco de dados, então você precisa rodar as migrations:

```bash
  npm run migration:run
```

Agora vamos rodar o projeto efetivamente

```bash
  npm run dev:server
```

Voce poderá acessar o projeto em http://localhost:3333



## Documentação

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/15211771-83bb0598-95a1-4b3e-a7be-a31a1310ce40?action=collection%2Ffork&collection-url=entityId%3D15211771-83bb0598-95a1-4b3e-a7be-a31a1310ce40%26entityType%3Dcollection%26workspaceId%3D3f8dca9d-7bfc-4302-baf3-a11aa9475cb2)

Aperte para da fork, após abrir o link

### Autenticação

Essa API é aberta ao mundo, mas ela precisa de autenticação para acessar as rotas:

Para se autenticar você precisa acessar a rota `/auth`

### POST

- Exemplo de request

```json
{
  "username": "luizalabs",
  "password": "luizalabs2021"
}
```

- Exemplo de resposta

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzI0OTg5NzUsImV4cCI6MTYzMjU4NTM3NSwic3ViIjoibHVpemFsYWJzIn0.Qh3F5Q5JuSnPM9Ukxqyi5edZMBzInyEmk9PdYFeoUFQ"
}
```

Pronto você está autorizado!! Use esse token no HEADER da sua request, como

```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzI0OTg5NzUsImV4cCI6MTYzMjU4NTM3NSwic3ViIjoibHVpemFsYWJzIn0.Qh3F5Q5JuSnPM9Ukxqyi5edZMBzInyEmk9PdYFeoUFQ
```

- #### O restante da documentação esta em collection criada no postman, e você pode ter exemplos de paylod de requests e reponses, como abaixo:

![image](https://user-images.githubusercontent.com/29736189/134744970-f06cd87e-3628-4d52-85db-0a624cd7f567.png)


## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
