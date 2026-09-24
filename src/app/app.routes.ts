import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { KantoComponent } from './components/kanto/kanto.component';
import { JohtoComponent } from './components/johto/johto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: '**', redirectTo: 'home' }
];