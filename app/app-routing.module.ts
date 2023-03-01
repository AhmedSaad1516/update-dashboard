import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLoginGuard } from 'src/core-login/guard-login.guard';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';

const routes: Routes = [
{path:'',
  loadChildren: () => import(`../app/dashboard/dashboard.module`).then(m => m.DashboardModule)},
  {path:'login',
  canActivate:[GuardLoginGuard],
  loadChildren: () => import(`../app/auth/auth.module`).then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
