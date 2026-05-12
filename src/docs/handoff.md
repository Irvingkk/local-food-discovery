# Codex Handoff Summary

> This file was generated for handoff to a new Codex chat.

## Project Goal

Build a React + Vite frontend prototype for a Local Food Discovery Web App.

Phase 1 is Xi'an only:

- Food exploration
- Food detail pages
- Restaurant and mock map guidance
- Favorites via `localStorage`
- Mock AI dietary and calorie assistance

## Current Status

Prototype is implemented and pushed to GitHub:

```text
https://github.com/Irvingkk/local-food-discovery.git
```

Latest pushed commit:

```text
206c25a docs: add project documentation placeholders
```

Working tree was clean after the final push.

## Files Changed

Core app files:

```text
src/App.jsx
src/data.js
src/main.jsx
src/styles.css
index.html
package.json
package-lock.json
.gitignore
```

Documentation placeholders:

```text
src/README.md
src/docs/AIPrompt.md
src/docs/handoff.md
src/docs/product-idea.md
src/docs/roadmap.md
```

## Important Decisions

- Frontend only, no backend.
- Hardcoded Xi'an food and restaurant data in `src/data.js`.
- Favorites stored in `localStorage`.
- Desktop-first layout with collapsible sidebar.
- Mobile layout uses bottom navigation.
- Vite pinned to `^5.4.21` because local Node is `v19.5.0`.
- `dist/` and `node_modules/` are ignored by Git.

## Known Issues

- Docs files are currently empty placeholders, except this handoff file.
- Some food images are generic Unsplash images, not guaranteed dish-accurate.
- Browser or PowerShell output may show mojibake for Chinese characters, but source files and build work.
- `npm install` reported moderate vulnerabilities; they have not been audited or fixed yet.

## Next Task

Fill documentation content, especially:

```text
src/README.md
src/docs/product-idea.md
src/docs/roadmap.md
src/docs/AIPrompt.md
```

## Commands To Run

Install dependencies:

```powershell
cd "F:\AI Projects\AI Agent\Website"
npm install
```

Start the dev server:

```powershell
npm run dev
```

Build the project:

```powershell
npm run build
```

Check Git status:

```powershell
git status
```

Commit future changes:

```powershell
git add .
git commit -m "your message"
git push
```
