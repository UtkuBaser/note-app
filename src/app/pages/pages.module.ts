import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
