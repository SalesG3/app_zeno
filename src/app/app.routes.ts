import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: UserloginComponent},
    {path: 'dashbord', component: DashbordComponent}
];
