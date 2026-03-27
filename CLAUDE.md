# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Type-check + production build (output: dist/)
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

Single-page portfolio website for Vinod Kumar Reddy / Solvin brand. React + TypeScript, built with Vite.

**Entry points:**
- `index.html` → `src/main.tsx` → `src/App.tsx`

**Source structure:**
- `src/App.tsx` — root component, assembles all section components in order
- `src/index.css` — global reset and base styles (dark theme: `#0d0a22` bg, `#eeeaff` text)
- `src/data/portfolio.ts` — all site content as typed exports: `stats`, `skills`, `services`, `aboutInfo`, `projects`
- `src/components/` — one component + CSS module per section: `Navbar`, `Hero`, `Services`, `About`, `Projects`, `Contact`, `Footer`

**Design tokens** (used throughout CSS modules):
- Gold: `#FFD700`, Purple: `#6C63FF`, Purple light: `#9B94FF`
- Section borders: `rgba(108, 99, 255, 0.1)`

**Content editing:** Update `src/data/portfolio.ts` to change stats, skills, projects, or about info without touching component files.

**TypeScript setup:** Split configs — `tsconfig.app.json` for `src/` (strict mode, ES2023, react-jsx), `tsconfig.node.json` for Vite config files.

**ESLint:** Uses flat config format (ESLint 9+) with TypeScript ESLint, React Hooks, and React Refresh plugins. Config is in `eslint.config.js`.

**Vite plugin:** Uses `@vitejs/plugin-react` with Oxc transpilation (not SWC).
