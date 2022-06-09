import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  {
    path: 'createNote',
    component: CreateNoteComponent,
  },
  {
    path: '',
    redirectTo: 'createNote',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNoteRoutingModule { }
