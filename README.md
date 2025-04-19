# Node Boilerplates

A modern Node.js boilerplate project using **Vite**, **Express**, and **TypeScript**. It includes linting, type checking, and dev tools setup for a clean and scalable development experience.

---

## 🚀 Features

- 🛠️ **Vite** for fast development and build
- ⚡ **Express 5** for server-side routing
- 🧱 **TypeScript** for type safety
- 🧹 **ESLint** with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- 🧪 **Husky** + **lint-staged** for Git hook and code linting automation
- 🧩 **vite-plugin-node** for seamless Node integration in Vite
- 🧾 Auto type-checking with `vite-plugin-checker`
- 📦 Github workflow for CI/CD

---

## 📦 Installation

```bash
pnpm install
```

This project uses pnpm. You can also use npm or yarn if preferred.

# 🧑‍💻 Scripts

<!-- create table -->

| Script          | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `pnpm dev`      | Start the development server                               |
| `pnpm build`    | Build the project for production                           |
| `pnpm start`    | Start the production server                                |
| `pnpm lint`     | Run ESLint on                                              |
| `pnpm lint:fix` | Run ESLint on all files and fix any problems automatically |

---

## 🧰 Project Structure

```
.
|── .github/
│   └── workflows/
│       └── lint.yml     # GitHub Actions CI workflow
│       └── build.yml     # GitHub Actions CI workflow
├── .husky/
│   └── pre-commit     # Git hook to run lint-staged on commit
├── .vscode/
│   └── settings.json  # VSCode settings
├── .env.example       # Example environment variables
├── .gitignore         # Git ignore file
├── src/
│   └── index.ts       # Entry point of the app
├── dist/              # Compiled output
├── eslint.config.mjs  # ESLint config
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite config
├── package.json       # Node.js package file
├── pnpm-lock.yaml     # pnpm lockfile
└── README.md          # This file
```
