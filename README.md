# Cine-Stream — Next.js 15 Redux & Automated QA Testing (Sprint 11 Track A)

![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat&logo=redux)
![Jest Coverage](https://img.shields.io/badge/Jest_Coverage-91.5%25-brightgreen?style=flat&logo=jest)

Cine-Stream is an enterprise-grade media discovery Single Page Application (SPA) built with **Next.js 15 (App Router)**, **Redux Toolkit**, and **React Testing Library**. It features Server-Side Rendering (SSR), Infinite Scroll, AI Mood Matcher, and an automated QA testing suite achieving **91.5% Code Coverage**.

🌐 **Live Website Deployment:** [https://sprint-11-cine-stream.vercel.app/](https://sprint-11-cine-stream.vercel.app/)
🐙 **GitHub Repository:** [https://github.com/shashank113333/sprint-11-cine-stream](https://github.com/shashank113333/sprint-11-cine-stream)

---

## 🌟 Key Engineering Features

- **Automated QA Testing Suite:** 6 Test Suites & 19 Tests achieving **91.5% Line Coverage** with Jest & React Testing Library (RTL).
- **Next.js 15 App Router & SSR:** Fast initial hydration delivering clean HTML payloads for crawlers & instant page loads.
- **Redux Toolkit State Architecture:** Centralized store managing Favorites, Multifaceted Filters (Genre, Year, IMDb Rating, Sort), and Global Color Themes (Dark 🌙, Light ☀️, Cyberpunk ⚡).
- **Infinite Scroll & Throttling:** Native `IntersectionObserver` bottom sentinel for seamless pagination and 500ms search input debouncing.
- **AI Mood Matcher:** Natural language vibe-to-movie query handoff powered by Google Gemini AI.
- **Fully Responsive & Accessible:** 100/100 Lighthouse ready UI with mobile 2-column grid system and high-contrast glassmorphism styling.

---

## 🧪 Testing & Code Coverage Report

Execute the automated test suite locally:

```bash
# Run all automated unit and interaction tests
npm test

# Generate code coverage report (91.5% Line Coverage)
npm run test:coverage
```

### Coverage Report Summary:
- **Navbar Component (`Navbar.jsx`):** 100% Coverage
- **Movie Card Component (`MovieCard.jsx`):** 95.45% Coverage
- **Filter Sidebar (`FilterSidebar.jsx`):** 88.23% Coverage
- **Redux Store Slices (`favoritesSlice`, `filterSlice`, `themeSlice`):** 94.2% Coverage
- **API Utilities (`tmdb.js`):** 86.04% Coverage
- **Overall Line Coverage:** **91.5%** (Exceeds mandatory 70% threshold requirement)

---

## 🛠️ Local Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/shashank113333/sprint-11-cine-stream.git

# 2. Navigate to directory
cd sprint-11-cine-stream

# 3. Install dependencies
npm install

# 4. Start Next.js development server
npm run dev
```

Open `http://localhost:3000` in your browser to explore the app.

---

## 📄 License & Ownership

Engineered by **Shashank Vishwakarma** — Sprint 11 Track A (Frontend Specialist).
