import { Component } from '@angular/core';
import { CounterService } from '../../services/counter';

// CounterComponent is only responsible for the UI
@Component({
  standalone: true,
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {

  // Inject CounterService using Dependency Injection
  // Angular creates and shares the service instance
  constructor(public counter: CounterService) {}

  // Calls the service method to update the counter state
  increment() { 
    this.counter.increment();
  }
}
