import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';

import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginaComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PaginaModule { }
