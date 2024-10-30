import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { LoginComponent } from './components/login/login.component';

const routesAuth: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routesAuth)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
