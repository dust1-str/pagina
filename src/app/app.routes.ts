import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'register', loadComponent:()=>import('./register-user/register-user.component').then(m=>m.RegisterUserComponent)},
    { path: 'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'paises' , loadComponent:()=>import('./empleados/empleados.component').then(m=>m.EmpleadosComponent), canActivate: [authGuard]},
    { path: 'paises/update/:id' , loadComponent:()=>import('./paises-update-form/paises-update-form.component').then(m=>m.PaisesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'paises/create' , loadComponent:()=>import('./paises-create-form/paises-create-form.component').then(m=>m.PaisesCreateFormComponent), canActivate: [authGuard]},
    { path: 'regiones', loadComponent:()=>import('./regiones/regiones.component').then(m=>m.RegionesComponent), canActivate: [authGuard]},
    { path: 'regiones/create', loadComponent:()=>import('./regiones-create-form/regiones-create-form.component').then(m=>m.RegionesCreateFormComponent), canActivate: [authGuard]},
    { path: 'regiones/update/:id', loadComponent:()=>import('./regiones-update-form/regiones-update-form.component').then(m=>m.RegionesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'ciudades', loadComponent:()=>import('./ciudades/ciudades.component').then(m=>m.CiudadesComponent), canActivate: [authGuard]},
    { path: 'ciudades/create', loadComponent:()=>import('./ciudades-create-form/ciudades-create-form.component').then(m=>m.CiudadesCreateFormComponent), canActivate: [authGuard]},
    { path: 'ciudades/update/:id', loadComponent:()=>import('./ciudades-update-form/ciudades-update-form.component').then(m=>m.CiudadesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'distritos', loadComponent:()=>import('./distritos/distritos.component').then(m=>m.DistritosComponent), canActivate: [authGuard]},
    { path: 'distritos/create', loadComponent:()=>import('./distrito-create-form/distrito-create-form.component').then(m=>m.DistritoCreateFormComponent), canActivate: [authGuard]},
    { path: 'distritos/update/:id', loadComponent:()=>import('./distrito-update-form/distrito-update-form.component').then(m=>m.DistritoUpdateFormComponent), canActivate: [authGuard]},
    { path: 'barrios', loadComponent:()=>import('./barrios/barrios.component').then(m=>m.BarriosComponent), canActivate: [authGuard]},
    { path: 'barrios/create', loadComponent:()=>import('./barrio-create-form/barrio-create-form.component').then(m=>m.BarrioCreateFormComponent), canActivate: [authGuard]},
    { path: 'barrios/update/:id', loadComponent:()=>import('./barrio-update-form/barrio-update-form.component').then(m=>m.BarrioUpdateFormComponent), canActivate: [authGuard]},
    { path: 'calles', loadComponent:()=>import('./calles/calles.component').then(m=>m.CallesComponent), canActivate: [authGuard]},
    { path: 'calles/create', loadComponent:()=>import('./calle-create-form/calle-create-form.component').then(m=>m.CalleCreateFormComponent), canActivate: [authGuard]},
    { path: 'calles/update/:id', loadComponent:()=>import('./calle-update-form/calle-update-form.component').then(m=>m.CalleUpdateFormComponent), canActivate: [authGuard]},
    { path: 'edificios', loadComponent:()=>import('./edificios/edificios.component').then(m=>m.EdificiosComponent), canActivate: [authGuard]},
    { path: 'edificios/create', loadComponent:()=>import('./edificio-create-form/edificio-create-form.component').then(m=>m.EdificioCreateFormComponent), canActivate: [authGuard]},
    { path: 'edificios/update/:id', loadComponent:()=>import('./edificio-update-form/edificio-update-form.component').then(m=>m.EdificioUpdateFormComponent), canActivate: [authGuard]},
    { path: 'apartamentos', loadComponent:()=>import('./apartamentos/apartamentos.component').then(m=>m.ApartamentosComponent), canActivate: [authGuard]},
    { path: 'apartamentos/create', loadComponent:()=>import('./apartamentos-create-form/apartamentos-create-form.component').then(m=>m.ApartamentosCreateFormComponent), canActivate: [authGuard]},
    { path: 'apartamentos/update/:id', loadComponent:()=>import('./apartamentos-update-form/apartamentos-update-form.component').then(m=>m.ApartamentosUpdateFormComponent), canActivate: [authGuard]},
    { path: 'contrato-alquiler', loadComponent:()=>import('./contrato-alquiler/contrato-alquiler.component').then(m=>m.ContratoAlquilerComponent), canActivate: [authGuard]},
    { path: 'contratoAlquilers/create', loadComponent:()=>import('./contrato-create-form/contrato-create-form.component').then(m=>m.ContratoCreateFormComponent), canActivate: [authGuard]},
    { path: 'contratoAlquilers/update/:id', loadComponent:()=>import('./contrato-update-form/contrato-update-form.component').then(m=>m.ContratoUpdateFormComponent), canActivate: [authGuard]},
    { path: 'inquilinos', loadComponent:()=>import('./inquilinos/inquilinos.component').then(m=>m.InquilinosComponent), canActivate: [authGuard]},
    { path: 'inquilinos/create', loadComponent:()=>import('./inquilino-create-form/inquilino-create-form.component').then(m=>m.InquilinoCreateFormComponent), canActivate: [authGuard]},
    { path: 'inquilinos/update/:id', loadComponent:()=>import('./inquilino-update-form/inquilino-update-form.component').then(m=>m.InquilinoUpdateFormComponent), canActivate: [authGuard]},
    { path: 'roles', loadComponent:()=>import('./roles/roles.component').then(m=>m.RolesComponent), canActivate: [authGuard]},
    {path: 'usuarios/update/:id', loadComponent:()=>import('./usuario-update-form/usuario-update-form.component').then(m=>m.UsuarioUpdateFormComponent), canActivate: [authGuard]},

    { path: '', redirectTo: '/paises', pathMatch: 'full' }

];
