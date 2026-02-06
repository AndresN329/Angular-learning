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
│
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  └─ counter/
│  │  │     ├─ counter.ts        # Counter UI component (uses service via Dependency Injection)
│  │  │     ├─ counter.html      # Counter UI (button + value)
│  │  │     ├─ counter.css       # Counter styles
│  │  │
│  │  ├─ core/
│  │  │  ├─ guards/
│  │  │  │  ├─ auth.guard.ts      # Functional CanActivate guard (blocks routes if not authenticated)
│  │  │  │  └─ auth-guard.spec.ts # Auth guard unit tests
│  │  │  │
│  │  │  ├─ interceptors/
│  │  │  │  ├─ logging.interceptor.ts
│  │  │  │  │  # Global HTTP logging interceptor (logs all outgoing requests)
│  │  │  │  │
│  │  │  │  └─ error.interceptor.ts
│  │  │  │     # Global HTTP error interceptor (centralizes error handling and logging)
│  │  │  │
│  │  │  └─ services/
│  │  │     ├─ auth.service.ts    # Auth mock service (signal-based login state)
│  │  │
│  │  ├─ mocks/
│  │  │  └─ users.mock.ts        # Mock users data (simulated backend response)
│  │  │
│  │  ├─ models/
│  │  │  ├─ user.model.ts        # User domain model (TypeScript interface)
│  │  │  └─ .gitkeep             # Keeps folder tracked until more models are added
│  │  │
│  │  ├─ pages/
│  │  │  ├─ home/
│  │  │  │  └─ home-page/
│  │  │  │     ├─ home.ts        # Home page (injects UserStore and renders users via signals)
│  │  │  │     ├─ home.html      # Home template (Signal control flow: @if / @for)
│  │  │  │     ├─ home.css       # Home page styles
│  │  │  │
│  │  │  ├─ login/
│  │  │  │  ├─ login.ts          # Login page (Reactive Forms with FormBuilder + Validators)
│  │  │  │  ├─ login.html        # Login form template (formGroup + formControlName)
│  │  │  │  ├─ login.css         # Login page styles
│  │  │  │
│  │  │  └─ users/
│  │  │     └─ users-page/
│  │  │        ├─ users.ts       # Users page (injects UserStore, UI-only)
│  │  │        ├─ users.html     # Users template (consistent UX: loading / error / content)
│  │  │        ├─ users.css      # Users page styles
│  │  │        └─ users.spec.ts  # Users page unit tests
│  │  │
│  │  ├─ services/
│  │  │  ├─ counter.ts           # CounterService (shared state + business logic)
│  │  │  ├─ user.store.ts        # UserStore (signal-based state, consumes HTTP with global error handling)
│  │  │  └─ user.spec.ts         # User store unit tests
│  │  │
│  │  ├─ app.ts                  # Root application component (layout + auth controls)
│  │  │
│  │  ├─ app.html                # Main template (navigation, login/logout, RouterOutlet)
│  │  │
│  │  ├─ app.css                 # App styles
│  │  │
│  │  ├─ app.config.ts           # App-wide configuration (router, http client, global interceptors)
│  │  │
│  │  └─ app.routes.ts           # Application routes (lazy-loaded pages + auth guards)
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

- **Day 5 (done — tag: `day-05`)**
  - Enabled `HttpClient` using `provideHttpClient` in the app configuration
  - Created mock data to simulate a backend without a real API
  - Implemented `UserService` to handle data fetching and UI state
  - Managed **loading**, **error**, and **empty** states explicitly
  - Connected the root App component to the service via dependency injection
  - Kept HTTP and data logic out of components (clean separation of concerns)
  
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
