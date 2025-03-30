# Node.js Boilerplate

This is a Node.js boilerplate project designed to provide a solid foundation for building robust and scalable applications. It leverages modern tools and best practices to enhance development efficiency and maintainability.

## Stack

- **pnpm:** Fast, disk space efficient package manager.
- **Vite:** Extremely fast development server and build tool (for development, HMR, and build process).
- **ESLint:** Linter and formatter for maintaining code quality and consistency.
- **Husky:** Git hooks for automating tasks before commit and push.
- **lint-staged:** Runs linters against staged git files.
- **GitHub Workflow:** Automated CI/CD pipelines.
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.

## Prerequisites

- Node.js (>= 18)
- pnpm (install globally: `npm install -g pnpm`)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd node-boilderplates
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Development:**

    ```bash
    pnpm dev
    ```

    This will start the Vite development server with Hot Module Replacement (HMR).

4.  **Build for production:**

    ```bash
    pnpm build
    ```

    This will generate the production build in the `dist` directory.

5.  **Start the production server:**

    ```bash
    pnpm start
    ```

    This will run the built application.

## Scripts

- `pnpm dev`: Starts the Vite development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to lint the code.
- `pnpm lint:fix`: Runs ESLint and automatically fixes linting errors.
- `pnpm prepare`: Installs Husky Git hooks.

## Development Workflow

1.  **Code:** Write your application code in the `src` directory.
2.  **Linting:** ESLint is configured to automatically lint your code. You can manually run `pnpm lint` or `pnpm lint:fix`.
3.  **Formatting:** ESLint also handles code formatting.
4.  **Committing:** Husky and lint-staged ensure that your code is linted before each commit.
5.  **Building:** Use `pnpm build` to create a production-ready build.
6.  **Deployment:** Use `pnpm start` to run the built application.
7.  **CI/CD:** GitHub Workflow is configured for automated testing and deployment. (You will need to configure the workflow to your needs).

## ESLint Configuration

The project uses `@antfu/eslint-config` as a base configuration, providing a sensible set of rules for JavaScript and TypeScript projects.

## Husky and lint-staged

Husky and lint-staged are configured to run `pnpm lint` against staged files before each commit. This ensures that only clean and linted code is committed.

## GitHub Workflow

The `.github/workflows` directory contains GitHub Workflow configurations for automated CI/CD. You can customize these workflows to fit your specific needs, such as running tests, building, and deploying your application.

## Project Structure

```
node-boilderplates/
├── dist/         # Production build output
├── src/          # Source code
│   ├── index.ts  # Application entry point
│   └── ...       # Other source files
├── .eslintrc.json # ESLint configuration
├── .gitignore    # Git ignore file
├── package.json  # Project dependencies and scripts
├── pnpm-lock.yaml # pnpm lock file
├── vite.config.ts # Vite configuration
└── ...           # Other configuration files
```
