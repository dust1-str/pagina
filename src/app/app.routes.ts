import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'register', loadComponent:()=>import('./register-user/register-user.component').then(m=>m.RegisterUserComponent)},
    { path: 'paises' , loadComponent:()=>import('./empleados/empleados.component').then(m=>m.EmpleadosComponent), canActivate: [authGuard]},

];
