# static-site-boilerplate-vite

A [Vite](https://vite.dev/) starter kit for static site development.

## Features

- [Vite](https://vite.dev/) for build and dev server
- [ESLint](https://eslint.org/) / [Stylelint](https://stylelint.io/) / [Prettier](https://prettier.io/) for linting and formatting
- [Lefthook](https://github.com/evilmartians/lefthook) for pre-commit linting
- [GitHub Actions](https://github.com/features/actions) for PR linting

## Requirements

- [Volta](https://volta.sh/)

## Setup

```bash
# Install dependencies
npm i

# Set up Git hooks
npx lefthook install
```

## Commands

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm start`       | Start dev server          |
| `npm run build`   | Production build          |
| `npm run preview` | Preview build output      |
| `npm run lint`    | Run linters               |
| `npm run fix`     | Run linters with auto-fix |

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/) or its forks (e.g. [Cursor](https://www.cursor.com/))

## License

[MIT](./LICENSE)
