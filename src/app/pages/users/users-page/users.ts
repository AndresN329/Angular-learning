import { Component } from '@angular/core';
import { UserStore } from '../../../services/user.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
  constructor(public store: UserStore) {}
}
