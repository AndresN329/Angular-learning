import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter'; //import CounterComponent in app.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent], //add CounterComponet to imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('angular-basico');

  count = signal(0);
  isVisible = signal(true);

  increment() {
    this.count.update(v => v + 1);
  }

  toggle() {
    this.isVisible.update(v => !v);
  }

  users = signal ([
    {id: 1, name: "ana"},
    {id: 2, name: "juan"}
  ]);

  addUser() {
    this.users.update(list => [
      ...list,
      {id: Date.now(), name: "Nuevo"}
    ]);
  }
}


