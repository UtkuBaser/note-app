import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Note } from 'src/app/types';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  noteList: Array<Note> = [];
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    const noteList = localStorage.getItem('noteList');
    if (noteList != null) {
      this.noteList = JSON.parse(noteList);
    }
  }

  goToDetail(note: Note) {
    const selectedNote: Note = {
      id: note.id,
      title: note.title,
      body: note.body,
      createdDate: note.createdDate,
    };
    const navigationExtras: NavigationExtras = {
      state: {
        isNew: false,
      },
    };
    localStorage.setItem('note', JSON.stringify(note));
    this.router.navigate(['create-note'], navigationExtras);
  }

  deleteNote(note: Note): void {
    const answer: boolean = window.confirm(
      `Are you sure want to delete '${note.title}' ?`
    );
    if (answer) {
      const noteIndex = this.noteList.findIndex((item) => item.id == note.id);
      this.noteList.splice(noteIndex, 1);
      localStorage.setItem('noteList', JSON.stringify(this.noteList));
      this.toastr.success('Note has been deleted.');
    }
  }
}
