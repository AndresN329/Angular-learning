import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
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

  constructor(private http: HttpClient) {}

// loads users from backend API using HttpClient
  loadUsers() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<UserModel[]>('/api/users').subscribe({
      next: users => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading users');
        this.loading.set(false);
      }
    });
  }
}
