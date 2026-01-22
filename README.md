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
angular-learning/
├─ docs/
│  └─ progress.md                # Full day-by-day learning log
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  └─ counter/
│  │  │     ├─ counter.ts        # Counter UI component (uses service via Dependency Injection)
│  │  │     ├─ counter.html      # Counter UI (button + value)
│  │  │     ├─ counter.css       # Counter styles
│  │  │     └─ counter.spec.ts   # Counter unit tests
│  │  │
│  │  ├─ services/
│  │  │  ├─ counter.ts           # CounterService (shared state + business logic)
│  │  │  └─ counter.spec.ts      # Service unit tests
│  │  │
│  │  ├─ app.ts                  # Root application component
│  │  ├─ app.html                # Main template (@if/@for + component usage)
│  │  ├─ app.css                 # App styles
│  │  ├─ app.config.ts           # App-wide configuration/providers
│  │  └─ app.routes.ts           # Routes (if/when needed)
│  │
│  ├─ index.html                 # Base HTML shell
│  ├─ main.ts                    # App bootstrap (bootstrapApplication)
│  └─ styles.css                 # Global styles
│
├─ public/                       # Static public assets
├─ .gitignore                    # Ignored files (e.g., node_modules)
├─ angular.json                  # Angular workspace config
├─ package.json                  # Dependencies + scripts
├─ package-lock.json             # Locked dependency versions
├─ tsconfig.json                 # TypeScript config
└─ README.md                     # Project overview + learning log

```

Progress is primarily documented through the **Git commit history**, where each commit represents a concrete concept or improvement.

> I’m using Git tags as daily checkpoints (first time using tags) — e.g., `day-02`, `day-03`.

## 🧭 Learning Progress
- **Day 1 (done)**
  - Angular project setup (standalone)
  - Basic project structure (Angular CLI)
  - App bootstrap (`main.ts` with `bootstrapApplication`)

- **Day 2 (done — tag: `day-02`)**
  - Signals as reactive UI state (`signal`, `set`, `update`)
  - Event binding (`(click)`) to update state
  - Modern control flow in templates: `@if` and `@for` (with `track`)

- **Day 3 (done — tag: `day-03`)**
  - Built a reusable `CounterComponent`
  - Parent → child communication with `@Input()` (`[value]="count()"`)
  - Child → parent communication with `@Output()` (`(valueChange)="count.set($event)"`)
  - Kept state in the parent (Signals) and UI/actions in the child
  - Imported the child component in a standalone parent (`imports: [CounterComponent]`)

- **Day 4 (done — tag: `day-04`)**
  - Introduced Angular services for shared state
  - Moved counter business logic from component to service
  - Used Dependency Injection to provide services to components
  - Used Signals inside a service as a single source of truth
  - Simplified components to focus only on UI concerns
  
> Full day-by-day progress log: [docs/progress.md](docs/progress.md)  
> Detailed progress can be explored through the commit history.

## 📝 Commit Convention
I follow small, meaningful commits using a simple Conventional Commits style:

- `init:` project initialization
- `feat:` new functionality or learning milestone
- `docs:` documentation-only changes
- `refactor:` code changes that don’t add features (cleanup/improvements)
- `chore:` tooling/config/dependency maintenance (no feature changes)

**Examples**
- `init: create angular project`
- `feat: add reactive state with signals (day 2)`
- `feat: handle user interaction with event binding (day 2)`
- `feat: use modern angular templates with @if and @for (day 2)`
- `feat: implement parent-child communication with @Input/@Output (day 3)`
- `feat: connect counter component to parent signal state (day 3)`
- `docs: update README`
- `refactor: simplify component logic`
- `chore: update dependencies`

> Full history is available in the commit log.

## ▶️ Running the Project
```bash
npm install
ng serve
