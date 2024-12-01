import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './dashboard/users/users.component';
import { ClientsComponent } from './dashboard/clients/clients.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'clients', component: ClientsComponent },
    ],
  },
];
