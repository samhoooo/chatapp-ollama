# Chatbot App with Ollama

This is an offline React chatbot application integrated with [Ollama](https://ollama.com/).

<img width="500" alt="image" src="https://github.com/user-attachments/assets/0d48694c-585a-43c9-9944-f8c1b10c3da8">

## Features

- Next.js: React frontend to interact with the chatbot
- Node.js: Backend integrated with [Ollama JS](https://www.npmjs.com/package/ollama)
- Turborepo: Monorepo to include the above modules

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js >= 18](https://nodejs.org/en/download/package-manager)
- [pnpm](https://pnpm.io/)
- [Ollama](https://ollama.com/)

### Installation

Run the following command:

```sh
pnpm install
```

### Environment variable

Set up the following .env files, based on the template in .env.example

- `apps/api/.env`
- `apps/web/.env`

### Running the Development Server

This monorepo uses Turborepo to manage the two packages (api, web).

To start all packages run:

```sh
pnpm dev
```

By default, the packages serve at the following endpoints:

- Web: http://localhost:3000
- API: http://localhost:8080

### Building the Project

Build all apps and packages:

```sh
pnpm build
```

## License

This project is licensed under the MIT License.

## Contact

For any questions, please open an issue in the repository.
