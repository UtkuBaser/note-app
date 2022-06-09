import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Creation, Note } from 'src/app/types';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  id: number = 0;
  title: string = '';
  body: string = '';
  date: Date | null = null;
  createView: boolean = true;
  noteList: Array<Note> = [];
  saveButtonClicked: boolean = false;

  constructor(private toastr: ToastrService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state != null) {
      const state = navigation.extras.state as Creation;
      const noteDetail = localStorage.getItem('note');
      if (noteDetail != null) {
        const note: Note = JSON.parse(noteDetail);
        this.id = note.id;
        this.title = note.title;
        this.body = note.body;
        this.date = note.createdDate;
        this.createView = state.isNew;
      }
    }
    const noteList = localStorage.getItem('noteList');
    if (noteList != null) this.noteList = JSON.parse(noteList);
  }

  ngOnInit(): void {}

  save(): void {
    this.saveButtonClicked = true;
    if (!this.title || !this.body || !this.date) {
      this.toastr.error('Please fill in the required fields.');
      return;
    }
    if (this.createView == true) {
      const note: Note = {
        id: this.noteList.length + 1,
        title: this.title,
        body: this.body,
        createdDate: this.date,
      };
      this.noteList.push(note);
      this.toastr.success('Note has been created.');
    } else {
      const noteIndex = this.noteList.findIndex((item) => item.id == this.id);
      this.noteList[noteIndex].body = this.body;
      this.noteList[noteIndex].title = this.title;
      this.noteList[noteIndex].createdDate = this.date;
      this.toastr.success('Note has been edited.');
    }
    localStorage.setItem('noteList', JSON.stringify(this.noteList));
    this.title = '';
    this.body = '';
    this.date = null;
    this.router.navigate(['home']);
  }
}
