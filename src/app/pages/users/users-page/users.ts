import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
  constructor(public users: UserService) {}
}
