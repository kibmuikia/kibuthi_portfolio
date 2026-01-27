# Allan Kibuthi - Portfolio

A modern, minimal, and highly configurable portfolio website built with **React**, **TypeScript**, and **Vite**, featuring a professional "Modern Solid" design system.

---

## 🛠️ Tech Stack
- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Routing:** React Router 7
- **Styling:** Vanilla CSS 3 with CSS Variables (Theming)
- **State Management:** React Hooks (Custom `useTheme` for persistence)
- **Modularity:** Feature-based sectional components + CSS Modules

---

## 📁 Project Structure
```text
kibuthi_portfolio/
├── src/
│   ├── assets/             # Visual assets & illustrations
│   ├── components/
│   │   ├── layout/         # Navigation, Footer
│   │   ├── sections/       # Interactive page sections (Hero, Skills, etc.)
│   │   └── ui/             # Reusable UI components (Buttons, Cards)
│   ├── config/             # Profile & Content configuration (Main Brain)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Main view components
│   ├── styles/             # Global variables & reset styles
│   └── types/              # TypeScript interface definitions
└── public/                 # Static assets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) | prefer to use pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development
Start the development server:
```bash
pnpm run dev
```

### Build
Generate production build:
```bash
pnpm run build
```

---

## 🧠 Config-Driven Content
All content is managed centrally in `src/config/profile.ts`. To update your information, simply modify this file:
- **Bio & Tagline**
- **Skills & Expertise**
- **Social Links**

---

## 📄 Documentation
- [Main Implementation Guide](../Portfolio%20Implementation%20Guide%20-%20Hosting%20and%20SEO.md)
- [Complementary Architectural Guide](./COMPLEMENTARY_GUIDE.md)

---

## 👤 Author
**Allan Kibuthi Muikia**  
*Full Stack Software Engineer*  
[GitHub](https://github.com/kibmuikia) | [LinkedIn](https://www.linkedin.com/in/muikia-allan/)
