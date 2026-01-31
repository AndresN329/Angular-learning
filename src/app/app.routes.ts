import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home-page/home')
            .then(m => m.HomeComponent)
    },
    {
        path: 'users',
        loadComponent: () =>
            import('./pages/users/users-page/users')
            .then(m => m.UsersComponent),
            canActivate: [authGuard]
    }
];
