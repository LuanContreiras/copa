# NLW COPA IGNITE 2022 - bolão

Projeto desenvolvida durante o evento NLW Copa da Rocketseat.

Dentro dessa aplicação é possível:

- A criação de bolão.
- Logar com o Google (exclusivo da versão Mobile).
- Participar de bolões já criados através do código do bolão.
- Compartilhar o código dos bolões com amigos.

<h2 style="font-weight:bold"> BACKEND (SERVER) </h2>

Aplicação backend do projeto construído usando Node, Fastify, Prisma, SQLite.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![SQLite Bade](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)

## RODAR APLICAÇÃO BACKEND

Abra terminal de comando dentro da pasta.

- Instale as dependências

```bash
  npm install
```

- Inicie o servidor

```bash
  npm run dev
```

<hr>

<h2 style="font-weight:bold"> FRONT-END (WEB) </h2>

Aplicação frontend do projeto construído utilizando React, Next.js, Typescript, TaildwindCSS.

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCss Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TS Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![PreviewReact](./.github/PreviewReact.png)

## RODAR APLICAÇÃO FRONTEND

Após iniciar o backend/servidor, abra o terminal de comando dentro da pasta web e execute os seguintes comandos.

- Instale as dependências

```bash
  npm install
```

- Iniciar aplicação

```bash
  npm run dev
```

A página abrirá no endereço:

> http://localhost:3000

Dados em tela refletem os dados do banco de Dados, conforme os bolões forem sendo criados o número na tela será atualizado.

<hr>

<h2 style="font-weight:bold">MOBILE</h2>

Aplicação mobile do projeto construído utilizando React Native, Expo, Native-base.

![ReactNative Badge](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TS Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

<div style="display:flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  <img src="./.github/splash.jpeg" width="180px" height="360px"/>
  <img src="./.github/login.jpeg" width="180px" height="360px"/>
  <img src="./.github/tela1.jpeg" width="180px" height="360px"/>
  <img src="./.github/tela2.jpeg" width="180px" height="360px"/>
  <img src="./.github/tela3.jpeg" width="180px" height="360px"/>
</div>
<br>

## RODAR APLICAÇÃO MOBILE

Após iniciar o backend/servidor, abra o terminal de comando na pasta mobile.

Você deve ter android studio para poder emular um ambiente android ou instalar EXPO
GO da Googleplay store ou Applestore.

- Instale as dependências

```bash
  npm install
```

- Inicie a aplicação

```bash
  npx expo start
```

Após a aplicação ser iniciada você tem a opção de ou abrir pelo emulador do Android studio ou lendo o QR Code através do Expo GO.

> Obs: Para a aplicação Web é necessário que você tenha uma variavel de ambiente. CLIENT_ID

<hr>
