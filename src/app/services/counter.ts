import { Injectable, signal } from '@angular/core';

// Service that holds the counter logic and shared state
@Injectable({
  providedIn: 'root', // Makes this service a singleton (shared across the app)
})
export class CounterService {
  count = signal(0); // Signal that stores the counter value

    // Updates the counter value
  increment() {
    this.count.update(v => v + 1);
  }
}
