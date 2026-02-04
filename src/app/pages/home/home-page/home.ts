import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../components/counter/counter';
import { UserStore } from '../../../services/user.store';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CounterComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  count = signal(0);
  isVisible = signal(true);

  increment() {
    this.count.update(v => v + 1);
  }

  toggle() {
    this.isVisible.update(v => !v);
  }

  constructor(public store: UserStore) {}
}
