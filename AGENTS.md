# AGENTS.md

## 🧠 Project Overview

**CarbonYield** is a frontend-only web application built with React, Vite, and Tailwind CSS. It helps users visualize and support community climate projects by:
- Funding carbon offset projects
- Tracking carbon credit resale impact
- Viewing aggregated climate impact metrics

This project currently includes placeholder data and static components. Future development will introduce calculators, user state management, and possibly external API integration.

## ⚙️ Tech Stack

- **React** + **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Mapbox GL** (via MapLibre) for interactive maps
- **React Router v7** for routing
- **Netlify** for deployment (no backend)
- **Local state** using `useState` and `useEffect`

## 📁 File Structure

- `src/components/` — UI components like `Layout`, `ImpactMap`, etc.
- `src/pages/` — Routed pages: `Dashboard`, `Marketplace`, `LandingPage`, etc.
- `main.tsx` — Entry point that mounts the React app
- `index.html` — Base HTML template
- `App.css`, `index.css` — Base styling
- `README.md` — Project overview
- `AGENTS.md` — Codex assistant configuration

## ✅ How to Run Locally

```bash
npm install
npm run dev
```

## 🔍 How to Lint / Format

```bash
npm run lint    # ESLint
npm run format  # Prettier (optional if configured)
```

## 🧪 Testing

> ⚠️ No test suite is implemented yet. If you add one, define test commands below.

## 🧩 Code Style and Conventions

- **Use functional components only**
- **Use React Hooks** — `useState`, `useEffect`, `useRef`
- **Tailwind CSS utility-first classes** for layout and styling
- Prefer **small, modular components**
- Use **TypeScript with interfaces or type aliases** for props

## 📋 Example Tasks for Codex

- "Refactor `ImpactMap.tsx` to extract a `MapOverlay` subcomponent"
- "Add a `<StatsCard />` component for Dashboard"
- "Document the props and behavior of `Layout.tsx`"
- "Convert `Dashboard.tsx` into smaller subcomponents"

## 🚧 Known Gaps (for Codex awareness)

- No real data source (uses demo GeoJSON only)
- No API or backend logic yet
- No global state (Redux, Context, etc.)
- No authentication or user sessions
