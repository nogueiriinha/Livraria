import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutoListagemComponent } from './pages/produto-listagem/produto-listagem.component';
import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent},
    { path: 'ajuda', component: AjudaComponent },
    { path: 'produto-listagem', component: ProdutoListagemComponent},
    { path: 'produto-form', component: ProdutoFormComponent},

];
