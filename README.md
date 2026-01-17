# Angular Learning Journey 🚀

This repository is my personal **Angular learning journey**, built around a **single evolving Angular application** using modern, real-world practices. Instead of creating isolated daily projects, I keep one codebase that grows over time—closer to how Angular apps evolve in professional environments.

The project is built with **Angular 21 (standalone components)** and focuses on both core fundamentals and clean architecture principles.

## 🛠 Tech Stack
- Angular 21 (Standalone architecture)
- TypeScript
- HTML / CSS
- Git & GitHub

> RxJS will be introduced later when the learning path reaches real async data flows (HTTP, async pipe, etc.).

## 🎯 Purpose
Learn Angular in a **structured and practical way**, emphasizing:
- Modern templates (`@if`, `@for`)
- Reactive UI state with **Signals**
- Event binding and interactive UI
- Component-based architecture
- Reusable components
- Parent ↔ child communication (`@Input()` / `@Output()`)
- Clean code, separation of concerns, and incremental improvements via Git

## 📁 Project Structure (grows over time)
This repository contains **one Angular project** that continuously evolves as new concepts are learned and applied.

```bash
src/
angular-learning/
├─ src/
│  ├─ app/
│  │  ├─ app.ts            # App component logic (signals/state)
│  │  ├─ app.html          # App template (@if, @for, bindings)
│  │  ├─ app.css           # App styles
│  │  ├─ app.config.ts     # Application-level providers/config
│  │  └─ app.routes.ts     # Routes (when needed)
│  ├─ index.html           # Base HTML shell
│  ├─ main.ts              # Entry point (bootstrapApplication)
│  └─ styles.css           # Global styles
├─ public/                 # Static public assets
├─ .gitignore
├─ angular.json
├─ package.json
├─ package-lock.json
├─ tsconfig.json
└─ README.md
```

Progress is primarily documented through the **Git commit history**, where each commit represents a concrete concept or improvement.

## 🧭 Learning Progress
- **Day 1**
  - Angular project setup (standalone)
  - Basic project structure and bootstrap

- **Day 2**
  - Signals as reactive UI state (`signal`, `set`, `update`)
  - Event binding (`(click)`) to update state
  - Modern control flow in templates: `@if` and `@for` (with `track`)

- **Day 3 (in progress)**
  - Reusable components
  - Parent → child communication with `@Input()`
  - Child → parent communication with `@Output()`
  - Keeping state in the parent (Signals) and UI/actions in the child

> Detailed progress can be explored through the commit history.

## 📝 Commit Convention
I follow a simple and clear convention (small, meaningful commits):

- `init: create angular project`
- `feat: add reactive state with signals (day 2)`
- `feat: handle user interaction with event binding (day 2)`
- `feat: use modern angular templates with @if and @for (day 2)`
- `feat: add reusable counter component with @Input/@Output (day 3)` *(planned)*
- `docs: update README`

## ▶️ Running the Project
```bash
npm install
ng serve
