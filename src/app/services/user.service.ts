import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { USERS_MOCK } from '../mocks/users.mock';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // holds the list of users-page
  users = signal<UserModel[]>([]);

  // indicates loading state for the UI
  loading = signal(false);

  error = signal<string | null>(null); // stores error message if the request fails

  // loads users-page (mocked for now, simulating an API call)
  loadUsers() {
    this.loading.set(true);
    this.error.set(null);

  // simulate backend response
  setTimeout(() => {
    this.users.set(USERS_MOCK);
    this.loading.set(false);
  }, 800);
  }
}
