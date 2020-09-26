import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginaComponent,
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PaginaModule { }
