import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina.component';
import { NavComponent} from './nav/nav.component';

const routes: Routes = [
  {
    path:'',
    component:PaginaComponent,
    children:[
      {
        path:'Nav',
        component: NavComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaRoutingModule { }
