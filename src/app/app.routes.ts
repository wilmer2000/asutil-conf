import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/base/base.component').then((m) => m.BaseComponent),
    children: [

    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
