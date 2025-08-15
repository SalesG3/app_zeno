import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UsercadastroComponent } from './usercadastro/usercadastro.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { CategoriasComponent } from './categorias/categorias.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: UserloginComponent},
    {path: 'dashbord', component: DashbordComponent},
    {path: 'cadastro', component: UsercadastroComponent},
    {path: 'lancamentos', component: LancamentosComponent},
    {path: 'categorias', component: CategoriasComponent}
];
