import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

export const routes: Routes = [
    { path: 'ajuda', component: AjudaComponent },
    { path: '', component: HomeComponent},
];
