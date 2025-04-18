import { Routes } from '@angular/router';
import { LoginComponent } from './components/base/login/login.component';
import { NotFoundComponent } from './components/base/not-found/not-found.component';
import { HomeComponent } from './components/base/home/home.component';
import { StartComponent } from './components/pages/start/start.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'start',
        component: StartComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
