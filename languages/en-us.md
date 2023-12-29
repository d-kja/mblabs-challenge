# 🚀 MB-Labs Challenge

| Language options |                      |
| ---------------- | -------------------- |
| EN-US            | [Link](#)            |
| PT-BR            | [Link](../README.md) |

<br />

## ⚙️ Deploys

Here's the preview for the application: [link](#)

### Details of the deploy

As for the deployment I used the service provided by Vercel (BFF) by creating a separate branch with the API code inside the Next API route. The reason as to why I made this choice is because Backend services are slightly limited and they can take down you cluster at any time, at least the free plans. Database wise, I used the service provided by Planet Scale.

[DEVELOPMENT ROADMAP](TODO.md)

<br />

## 🧵 How to use

In case you want to run the application locally, I'd recommend following these steps:

<br />

Cloning the repository

```bash
git clone [repo-url]
```

Downloading the dependencies with PNPM

```bash
pnpm install
```

Running the project locally

```bash
docker compose up -d && pnpm run dev
```

To access the project locally, all that you have to do is open this link in your browser

```md
http://localhost:3000 #front-end
http://localhost:3333 #back-end
```

<br />

## ✨ Tech Stack

Project structure (monorepo)

```
- Project/
  |
  | - Apps/
  | |
  | | - Front-end/
  | | - Back-end/
  |
  | - Packages/
  | |
  | | - domain/
  | | - Linter-config/
  | | - Typescript-config/
  |
  | -----------------------|
```

<br />

### Front-end

- Next.js
- React Query
- React Hook Form
- Radix UI
- Zod

#### Resources

- [Figma](https://www.figma.com/file/JzfPFVyczStkdzC3zmoa9I/Desafio?type=design&node-id=0%3A1&mode=design&t=JFI0Rw9cMGWV1JIR-1)

<br />

### Back-end

- Nest.js
- Prisma ORM
- PostgreSQL
- Docker
- Zod / Zod Validation Error

#### Resources

- [Requirements](https://docs.google.com/document/d/1_i_U5YOJZK3IrdC5BO6ICwCPtXsmTKIMNiEPwQx_rGE/edit?usp=sharing)

<br />

### Packages

The use of a Monorepo is to facilitate the development of multiple applications at once

#### Domain (Clean architecture with DDD)

Decoupling the business logic, assisting the application scale, and it also helps during the changes of Frameworks and ORMs

`Folder moved to back-end project with no changes, keeping the code intact`

#### Linter config (Biome.js)

It keeps the configuration of the linter for the Monorepo

#### Typescript config

It keeps the configuration of the Typescript for the Monorepo

<br />

### Others

- Vitest (testing)
- Biome.js (linting)
- Typescript (superset for type safety)

<br />

## 💨 Outro

Made with care and organized with 💜

This project us under the MIT license.
