import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
    {
        path: "", pathMatch: 'full', redirectTo: "home"
    },
    { path: "home", component: HomeComponent },
    { path: "user/:id", component: UserDetailComponent },
];

