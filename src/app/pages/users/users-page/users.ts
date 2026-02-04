import { Component } from '@angular/core';
import { UserStore } from '../../../services/user.store';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
  constructor(public store: UserStore) {}
}
