import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { USERS_MOCK } from '../mocks/users.mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // holds the list of users-page
  users = signal<any[]>([]);

  // indicates loading state for the UI
  loading = signal(false);

  error = signal<string | null>(null); // stores error message if the request fails

  constructor(private http: HttpClient) {}// HttpClient injected for future real APIs

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
