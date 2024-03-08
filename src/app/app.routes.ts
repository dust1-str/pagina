import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'home' , loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
];
