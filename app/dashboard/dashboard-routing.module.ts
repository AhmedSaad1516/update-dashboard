import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardDashboardGuard } from 'src/core/guard-dashboard.guard';
import { HomeComponent } from './layout/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{
  path:'',
 component:NavbarComponent,
 canActivateChild:[GuardDashboardGuard],
 children:[
        
   {path:'',component:HomeComponent},
   
   {path:'home',
   loadChildren: () => import(`../dashboard/layout/layout.module`).then(m => m.LayoutModule)},

   {path:'chat',
   loadChildren: () => import(`../dashboard/chat/chat.module`).then(m => m.ChatModule)},

   {path:'orders',
   loadChildren: () => import(`../dashboard/order/order.module`).then(m => m.OrderModule)},
         
   {path:'services',
   loadChildren: () => import(`../dashboard/service/service.module`).then(m => m.ServiceModule)},
   {path:'settings',
   loadChildren: () => import(`../dashboard/setting/setting.module`).then(m => m.SettingModule)},
   {path:'users',
   loadChildren: () => import(`../dashboard/user/user.module`).then(m => m.UserModule)},
   {path:'workers',
   loadChildren: () => import(`../dashboard/worker/worker.module`).then(m => m.WorkerModule)},
  
  
  

 ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
