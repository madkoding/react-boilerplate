# React Boilerplate

Modern React boilerplate with **Vite**, **TypeScript**, **Vitest**, **ESLint**, and **Husky**.

## Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - Latest React with hooks and Concurrent Mode
- 📘 **TypeScript** - Type-safe development
- 🧪 **Vitest** - Fast unit testing with DOM support
- 🔍 **ESLint** - Code quality with Standard style
- 🧹 **Husky** - Git hooks for linting and testing
- 🎨 **Path aliases** - cleaner imports (`@components`, `@views`, etc.)

## Tech Stack

- **Build Tool**: Vite 5.4
- **Framework**: React 18.3
- **Language**: TypeScript 5.6
- **Testing**: Vitest 2.1 with @testing-library/react
- **Linting**: ESLint with Standard + TypeScript
- **Styling**: CSS Modules / Scoped CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command                 | Description                           |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | Start development server on port 3000 |
| `npm run build`         | Build for production                  |
| `npm run preview`       | Preview production build              |
| `npm test`              | Run tests in watch mode               |
| `npm run test:coverage` | Run tests with coverage               |
| `npm run test:ui`       | Run tests with Vitest UI              |
| `npm run lint`          | Run ESLint with auto-fix              |

## File Structure

```
src/
├── assets/          # Static assets (images, fonts, styles)
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── services/        # API services and business logic
├── utils/           # Utility functions
├── views/           # Page-level components
└── index.tsx        # Application entry point
```

## Path Aliases

Configure your IDE to resolve these imports:

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@hooks/*` → `src/hooks/*`
- `@services/*` → `src/services/*`
- `@utils/*` → `src/utils/*`
- `@views/*` → `src/views/*`

## Testing

Tests use Vitest with DOM testing library:

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npx vitest path/to/test.tsx
```

## Linting

The project uses ESLint with Standard JavaScript style plus TypeScript support:

```bash
# Check and fix linting issues
npm run lint
```

## Pre-commit Hooks

Husky is configured to run linting and tests on every commit via `lint-staged`.

## Configuration Files

- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.cjs` - ESLint configuration
- `.prettierrc` - Prettier configuration

## License

MIT

<!-- AUTO-UPDATE-DATE -->
**Última actualización:** 2026-02-20 05:14:47 -03
