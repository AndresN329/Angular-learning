# Learning Progress Log

This file contains the **full day-by-day progress** of my Angular Learning Journey.
For a short overview, see the main **README.md**.

---

## Week 1 — Foundations (Standalone + Signals + Components)

### Day 1 — Project setup (done)
- Created the Angular project (standalone setup).
- Reviewed the basic project structure (Angular CLI).
- Understood app bootstrap in `src/main.ts` using `bootstrapApplication(...)`.

### Day 2 — Templates + Signals (done — tag: `day-02`)
- Learned Signals as reactive UI state (`signal`, `set`, `update`).
- Connected UI actions via event binding (`(click)`).
- Used modern template control flow: `@if` and `@for` (with `track`).
- Built a small interactive UI: counter, toggle, and a dynamic user list.

### Day 3 — Reusable components + communication (done — tag: `day-03`)
- Built a reusable `CounterComponent`.
- Parent → child communication with `@Input()` (`[value]="count()"`).
- Child → parent communication with `@Output()` (`(valueChange)="count.set($event)"`).
- Kept state in the parent (Signals) and UI/actions in the child.
- Imported the child component in a standalone parent (`imports: [CounterComponent]`).

### Day 4 — Services + shared state (done — tag: `day-04`)
- Introduced Angular services to manage shared application state.
- Moved counter business logic from the component into a dedicated service.
- Used Dependency Injection to provide services to components.
- Used Signals inside a service as a single source of truth.
- Simplified components to focus only on UI concerns.

### Day 5 — HttpClient + Mocks + UI States *(done — tag: day-05)*
- Enabled `HttpClient` using `provideHttpClient` in app config
- Created mock data to simulate a backend response
- Implemented `UserService` to manage users data and UI states
- Handled **loading**, **error**, and **empty** states explicitly in the UI
- Connected the App component to the service using dependency injection

### Day 6 — Routing + Lazy Loading (done — tag: day-06)
- Introduced Angular routing using standalone components.
- Implemented lazy loading with `loadComponent()` per route.
- Created a real-world app structure (`pages` vs `components`).
- Moved feature logic from `AppComponent` to page-level components.
- Kept `AppComponent` as a clean layout with `RouterOutlet`.

---

## Notes
- Each completed day is marked with a Git tag (e.g., `day-02`, `day-03`).
- The commit history contains the most detailed evolution of the codebase.
- This log grows over time; refactors and improvements are expected.
