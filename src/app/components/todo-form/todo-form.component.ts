import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  input: string;
  @ViewChild("noteField") set field(ref: ElementRef) {
    var textarea = ref.nativeElement as HTMLTextAreaElement;
    textarea.addEventListener("keyup", (event) => {
      if(event.keyCode == 13) {
        event.preventDefault();
        this.addNote();
      }
    })
  }

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
  }

  addNote() {
    if(this.input.trim() != "") {
      this._todoService.addNote(this.input);
      this.input = "";
    }
  }

}
