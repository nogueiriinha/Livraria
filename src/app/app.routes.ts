import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

export const routes: Routes = [
    { path: 'contato', component: ContatoComponent},
    { path: 'ajuda', component: AjudaComponent },
    { path: '', component: HomeComponent}
];
