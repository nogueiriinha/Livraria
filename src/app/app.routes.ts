import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CarrinhoCompraComponent } from './pages/carrinho-compra/carrinho-compra.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'carrinho', component: CarrinhoCompraComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent},
    { path: 'ajuda', component: AjudaComponent },

];
