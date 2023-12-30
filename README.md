# 🚀 MB-Labs Challenge

| Language options |                            |
| ---------------- | -------------------------- |
| EN-US            | [Link](languages/en-us.md) |
| PT-BR            | [Link](#)                  |

<br />

## Obs

Qual o motivo de eu ter complicado o projeto, apesar de ser algo simples? Eu queria mostrar oque eu sou capaz de fazer, se eu fosse deixar o projeto o mais simplificado possível talvez eu teria conseguido fazer em umas duas horas ou menos, porém esse não era meu objetivo e eu espero que você mantenha isso em mente.

## ⚙️ Deploys

Para acessar a aplicação, segue o link: [preview](#) (não foi feito deploy ainda)

### Detalhes de deploy

Para o deploy eu vou usar o serviço da Vercel e eu vou criar um branch contendo um BFF (back-end for front-end) para facilitar o processo, já que as opções de deploy de back-end de graça são limitadas e a qualquer momento podem derrubar seu cluster por inatividade. Já para o banco de dados, eu pretendo usar o serviço da planetscale

[Roadmap](TODO.md)

<br />

## 🧵 Como usar

Caso queira rodar a aplicação na sua maquina, eu recomendo seguir esses passos

<br />

Clonando o repositorio

```bash
git clone [url-do-repositório]
```

Baixando as dependencias com PNPM

```bash
pnpm install
```

Executando o projeto localmente

```bash
docker compose -f ./.docker/docker-compose.yml up -d
```

```bash
cd apps/back-end && pnpm dlx prisma migrate deploy
```

Depois de migrar o schema do banco de dados, você vai precisar voltar para a pasta root do projeto e executar o seguinte comando:

```bash
pnpm run dev
```

Para acessar o projeto localmente basta entrar nesse link dentro do seu browser

```md
http://localhost:3000
```

<br />

## ✨ Tech Stack

Estrutura do projeto (monorepo)

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

#### Recursos

- [Figma](https://www.figma.com/file/JzfPFVyczStkdzC3zmoa9I/Desafio?type=design&node-id=0%3A1&mode=design&t=JFI0Rw9cMGWV1JIR-1)

<br />

### Back-end

- Nest.js
- Prisma ORM
- PostgreSQL
- Docker
- Zod / Zod Validation Error

#### Recursos

- [Requisitos](https://docs.google.com/document/d/1_i_U5YOJZK3IrdC5BO6ICwCPtXsmTKIMNiEPwQx_rGE/edit?usp=sharing)

<br />

### Packages

Uso de Monorepo para facilitar o desenvolvimento de várias aplicações em conjunto

#### Domain (Clean architecture with DDD)

Desacoplamento da lógica de negócio, facilitando para a aplicação escalar e, também, durante a troca de Frameworks e ORMs

`Pasta movida pra dentro do projeto de back-end, retendo seu código da mesma forma`

#### Linter (Biome.js)

Controle de configuração para o Linter do Monorepo

#### Typescript config

Controle das configurações de Typescript do Monorepo

<br />

### Outros

- Vitest (testing)
- Biome.js (linting)
- Typescript (superset for type safety)

<br />

## 💨 Fim

Feito com carinho e organizado com o 💜

Esse projeto está fazendo uso da licença MIT.
