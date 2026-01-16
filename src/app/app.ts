import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('angular-basico');

  count = signal(0);
  isVisible = signal(true);

  users = signal ([
    {id: 1, name: "ana"},
    {id: 2, name: "juan"}
  ]);
}
