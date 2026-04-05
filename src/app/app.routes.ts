import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Settings } from './pages/settings/settings';
import { Auth } from './pages/auth/auth';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'settings', component: Settings },
  { path: 'auth', component: Auth },
];
