import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteRoutingModule } from './create-note-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateNoteComponent],
  imports: [CommonModule, CreateNoteRoutingModule, FormsModule],
})
export class CreateNoteModule {}
