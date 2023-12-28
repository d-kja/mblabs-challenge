# 🚀 MB-Labs Challenge

| Language options |                            |
| ---------------- | -------------------------- |
| EN-US            | [Link](languages/en-us.md) |
| PT-BR            | Current file               |

## ⚙️ Deploys

Para acessar a aplicação, segue o link: [preview](#)

### Detalhes de deploy

Para o deploy eu usei o serviço da Vercel e criei um branch contendo um BFF (back-end for front-end) para facilitar o processo, já que as opções de deploy de back-end de graça são limitadas e a qualquer momento podem derrubar seu cluster por inatividade. Já para o banco de dados, eu usei o serviço da planetscale

## 🧵 Como usar

Caso queira rodar a aplicação na sua maquina, eu recomendo seguir esses passos

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
docker compose up -d && pnpm run dev
```

Para acessar o projeto localmente basta entrar nesse link dentro do seu browser

```md
http://localhost:3000
```

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
  | | - Linter-config/
  | | - Typescript-config/
  |
  | -----------------------|
```

### Front-end

- Next.js
- React Query
- React Hook Form
- Radix UI
- Zod

#### Recursos

- [Figma](https://www.figma.com/file/JzfPFVyczStkdzC3zmoa9I/Desafio?type=design&node-id=0%3A1&mode=design&t=JFI0Rw9cMGWV1JIR-1)

---

### Back-end

#### Recursos

- [Requisitos](https://docs.google.com/document/d/1_i_U5YOJZK3IrdC5BO6ICwCPtXsmTKIMNiEPwQx_rGE/edit?usp=sharing)

---

### Outros

- Vitest (testing)
- Biome.js (linting)

## 💨 Fim

Feito com carinho e organizado com o 💜

Esse projeto está fazendo uso da licença MIT.
