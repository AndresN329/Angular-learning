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

### Day 5 — HttpClient + Mocks + UI States *(done — tag: `day-05`)*
- Enabled `HttpClient` using `provideHttpClient` in app config
- Created mock data to simulate a backend response
- Implemented `UserService` to manage users data and UI states
- Handled **loading**, **error**, and **empty** states explicitly in the UI
- Connected the App component to the service using dependency injection

### Day 6 — Routing + Lazy Loading (done — tag: `day-06`)
- Introduced Angular routing using standalone components.
- Implemented lazy loading with `loadComponent()` per route.
- Created a real-world app structure (`pages` vs `components`).
- Moved feature logic from `AppComponent` to page-level components.
- Kept `AppComponent` as a clean layout with `RouterOutlet`.

## Week 2 — Clean Architecture + Real Services

### Day 1 — Clean architecture & service design (done — tag: `day-07`)
- Introduced a clean folder structure (`pages`, `components`, `services`, `models`, `core`).
- Separated **UI, state, and business logic** following Angular best practices.
- Created real TypeScript models for domain data (`User`).
- Refactored `UserService` to fully own state using Signals.
- Connected page components to services via Dependency Injection.
- Kept components free of business logic (UI-only responsibility).

### Day 2 — HttpClient & Interceptors (done — tag: `day-08`)
- Replaced mocked data with real `HttpClient` requests.
- Implemented a `UserService` using Signals to manage data, loading, and error states.
- Centralized HTTP logic inside services (no HTTP in components).
- Created a functional HTTP interceptor for global request logging.
- Registered interceptors using `provideHttpClient` and `withInterceptors`.
- Built a reactive UI using `@if`, `@else`, and `@for` to handle all request states.
- Verified interceptor execution via browser console logs.
- Prepared the app for future backend integration (Spring Boot).

### Day 3 — Guards & Auth Mock (done — tag: `day-09`)
- Implemented a mock `AuthService` using Signals to manage authentication state.
- Created a functional `CanActivate` guard to protect routes based on auth state.
- Integrated route protection directly in the router configuration.
- Added global login/logout controls in the root component.
- Implemented redirection to home when accessing protected routes unauthenticated.
- Centralized authentication logic in services (no auth state in components).
- Followed Angular 21 best practices using functional guards and `inject()`.
- Simulated real-world route protection without backend dependency.

### Day 4 — Template-driven Forms & Basic Login (done — tag: `day-10`)
- Introduced Template-driven Forms using `FormsModule`.
- Implemented a simple login form with `ngModel` two-way binding.
- Used `ngForm` to track form state and validity.
- Added basic validation using `required` attributes.
- Disabled form submission when the form is invalid.
- Connected the login form to an existing `AuthService`.
- Kept authentication logic inside services, not templates.
- Practiced form handling for simple, real-world use cases (login).

### Day 5 — Reactive Forms & Login Refactor (done — tag: `day-11`)
- Refactored the login feature from Template-driven Forms to Reactive Forms.
- Replaced `FormsModule` and `ngModel` with `ReactiveFormsModule`.
- Created a `FormGroup` using `FormBuilder` in the `LoginComponent`.
- Centralized validation logic in TypeScript using `Validators`.
- Connected the template using `formGroup` and `formControlName`.
- Controlled form submission based on form validity.
- Kept authentication logic inside `AuthService`.
- Applied professional Angular form patterns used in real projects.

### Day 6 — Consolidation & Architecture Review (done)
- Reviewed existing components to validate responsibility boundaries.
- Confirmed all HTTP communication lives exclusively inside services.
- Verified state ownership and usage through Angular signals.
- Assessed components to ensure focus on UI rendering only.
- Reinforced architectural mental model (Page / Component / Service / Guard).
- Reviewed routing protection using existing guards and auth mock.
- Verified forms validation and control from TypeScript.
- Focused on code understanding, consistency, and interview-level reasoning.

## Week 3 — Application State with Signals + REST Integration

### Day 1 — Signal-based state store + real REST integration (done — tag: `day-13`)
- Introduced **application-level state management** using Angular Signals (no Redux, no NgRx).
- Applied the **store pattern** using services:
  - Service as Store
  - Signals as State
  - Methods as Actions
- Refactored `UserService` into a dedicated `UserStore` to make state ownership explicit.
- Centralized REST integration (`HttpClient`) inside the store.
- Connected pages (`Home`, `UsersPage`) to the store via Dependency Injection.
- Rendered UI state using Angular control flow blocks (`@if`, `@for`).
- Ensured components and pages remain **UI-only**, with no data-fetching logic.
- Reinforced clear separation between **data, state, and presentation layers**.

---

## Notes
- Each completed day is marked with a Git tag (e.g., `day-02`, `day-03`).
- The commit history contains the most detailed evolution of the codebase.
- This log grows over time; refactors and improvements are expected.
