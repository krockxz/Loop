# Contributing to TaskFlow

Thank you for your interest in contributing to TaskFlow! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report:

1. Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
2. Include steps to reproduce
3. Provide environment details (deployment type, browser, Node.js version)
4. Add screenshots if applicable

### Suggesting Features

Feature requests are welcome! Please:

1. Check existing feature requests
2. Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Explain the use case clearly
4. Consider describing alternative solutions

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes following our coding standards
4. Write tests if applicable
5. Ensure all tests pass: `npm run build`
6. Commit with conventional commits: `feat:`, `fix:`, `docs:`, etc.
7. Push to your fork: `git push origin feature/my-feature`
8. Open a pull request using our [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/taskflow.git
cd taskflow/frontend

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Push database schema
npx prisma db push
npx prisma generate

# Start development server
npm run dev
```

## Coding Standards

### TypeScript

- Use type hints for all function parameters and return values
- Avoid `any` types — use `unknown` when type is truly unknown
- Run type checker before committing: `tsc --noEmit`

### Code Style

- Follow existing code patterns (KISS, DRY, YAGNI)
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Keep files under 350 lines — split when needed

### Git Commits

Use [conventional commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add task filtering by due date`

### File Organization

- Use `kebab-case` for file names
- Group related files in directories
- Keep components under 300 lines

## Testing

Before submitting a PR:

1. **Type check:** `npm run build` or `tsc --noEmit`
2. **Lint:** `npm run lint`
3. **Manual test:** Test your changes in a browser
4. **E2E tests:** `npm exec playwright test` (if adding test coverage)

## Project Structure

```
taskflow/
├── frontend/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/              # Utilities, hooks, types
│   ├── prisma/           # Database schema
│   └── docs/             # Documentation
├── .github/              # GitHub templates
├── .planning/            # Project planning (GSD)
├── README.md             # Project overview
├── DEPLOYMENT.md         # Deployment guide
└── CONTRIBUTING.md       # This file
```

## Getting Help

- **Documentation:** Start with [README.md](README.md) and [DEPLOYMENT.md](DEPLOYMENT.md)
- **Discussions:** Use GitHub Discussions for questions
- **Issues:** Bug reports and feature requests via GitHub Issues

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
