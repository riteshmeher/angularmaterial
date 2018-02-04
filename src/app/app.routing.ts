import { Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';

export const routeConfig: Routes = [
  // do not change the order of the below routes
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];
