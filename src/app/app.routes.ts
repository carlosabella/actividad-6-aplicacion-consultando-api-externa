import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNewComponent } from './components/user-new/user-new.component';

export const routes: Routes = [
    {
        path: "", pathMatch: 'full', redirectTo: "home"
    },
    { path: "home", component: HomeComponent },
    { path: "newuser", component: UserNewComponent },
    { path: "user/:id", component: UserDetailComponent },
];

