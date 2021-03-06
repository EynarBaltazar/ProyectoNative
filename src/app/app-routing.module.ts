import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { SendEmailComponent } from './auth/send-email/send-email.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: '/pagina',
    pathMatch: 'full',
  },
  {
    path: 'pagina',
    loadChildren: () => import('./pagina/pagina.module').then(m => m.PaginaModule)
  },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  {
    path:'verification-email',
    component:SendEmailComponent,
  },

  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },

  { path: 'admin', loadChildren: () => 
  import('./admin/admin.module').then((m) => m.AdminModule),
  canActivate: [CanAdminGuard],
  },

  { path: 'editor', loadChildren: () => 
  import('./editor/editor.module').then((m) => m.EditorModule),
    canActivate: [CanEditGuard],
  },
  { path: 'suscriptor', loadChildren: () => 
  import('./suscriptor/suscriptor.module').then((m) => m.SuscriptorModule),
    canActivate: [CanSuscriptorGuard],
 },

  { path: 'conta', loadChildren: () => import('./auth/conta/conta.module').then(m => m.ContaModule) },

  { path: 'galeria', loadChildren: () => import('./auth/galeria/galeria.module').then(m => m.GaleriaModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
