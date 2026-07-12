# ORB - Open Rad Bench Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the official documentation site for **ORB (Open Rad Bench)**. It is built using [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) theme, providing a comprehensive, easily navigable, and interactive documentation experience.

## ✨ Key Features

- **Interactive API Documentation:** Automatically generated and integrated OpenAPI specification via `starlight-openapi` and `openapi.json`.
- **Comprehensive Guides:** Sections for Getting Started, Tutorials, Analysis, and Reference materials.
- **Backend Architecture:** Deep dive into the backend concepts and structure.
- **API Playground:** Built-in playground to interactively test API endpoints.

## 🚀 Project Structure

Inside the repository, you'll see the following structure:

```text
.
├── public/                 # Static assets like favicons
├── src/
│   ├── assets/             # Images embedded in Markdown
│   ├── content/
│   │   └── docs/           # Markdown and MDX documentation files
│   └── styles/             # Custom CSS styles
├── openapi.json            # The OpenAPI specification file for the API Reference
├── astro.config.mjs        # Astro configuration, including sidebar and site settings
├── package.json
└── tsconfig.json
```

- **Content:** Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file becomes a route based on its file name.
- **Configuration:** The sidebar layout and OpenAPI integration are managed entirely within `astro.config.mjs`.

## 🧞 Commands

All commands are run from the root of the project in your terminal. You can use either `bun` or `npm` depending on your preference.

### Using Bun (Recommended)

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `bun install`      | Installs dependencies                            |
| `bun run dev`      | Starts local dev server at `localhost:4321`      |
| `bun run build`    | Build your production site to `./dist/`          |
| `bun run preview`  | Preview your build locally, before deploying     |
| `bunx astro ...`   | Run CLI commands like `astro add`, `astro check` |

### Using npm

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 👀 Want to learn more?

- **Astro Starlight:** Check out [Starlight’s docs](https://starlight.astro.build/) or [the Astro documentation](https://docs.astro.build).
