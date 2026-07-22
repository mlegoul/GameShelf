# 🎮 GameShelf

Une application web moderne de gestion et d'exploration de votre bibliothèque de jeux vidéo, développée avec **React 19**, **TypeScript** et **Vite**.

---

## 🛠️ Stack Technique

- **Framework UI :** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool :** [Vite 8](https://vitejs.dev/)
- **Design System / UI :** [Material UI (MUI)](https://mui.com/) + Emotion
- **Gestion d'État (Reactive State) :** [Elf.js](https://ngneat.github.io/elf/) (Store réactif basé sur RxJS)
- **Formulaires & Validation :** [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup) (Validation de schémas type-safe)
- **Notifications (Toast) :** [Notistack](https://notistack.com/) (Toaster empilable intégré à Material UI)
- **Routage :** [React Router 8](https://reactrouter.com/)
- **Internationalisation :** [i18next](https://www.i18next.com/) + `react-i18next`
- **Qualité & Formatage :** [Oxlint](https://oxc.rs/) (Linter Rust ultra-rapide) + [Prettier](https://prettier.io/)
- **Automation Git :** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

---

## 🏗️ Architecture du Projet

L'application suit les principes de la **Clean Architecture / DDD (Domain-Driven Design)** pour assurer une séparation stricte des responsabilités :

```text
src/
├── assets/         # Ressources statiques (images, médias)
├── data/           # Implémentations techniques (Repositories API, Stores Elf, DTOs)
├── domain/         # Cœur métier pur (Entities, Interfaces de Repositories, Validators)
└── ui/             # Couche de présentation React
    ├── components/ # Design system (un dossier par composant : .tsx, story, Code Connect)
    ├── features/   # Fonctionnalités métier
    ├── pages/      # Écrans routés
    ├── storybook/  # Helpers Storybook (liaison Figma)
    └── theme/      # Tokens et thème MUI dérivés de Figma
```

---

## 📚 Documentation

- [`docs/design-system.md`](docs/design-system.md) — guide de liaison Figma ↔ Storybook (tokens, Code Connect, publication).
