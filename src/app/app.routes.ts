import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'newuser', component: UserManagementComponent },
  { path: 'updateuser/:id', component: UserManagementComponent },
  { path: 'user/:id', component: UserDetailComponent },
];

