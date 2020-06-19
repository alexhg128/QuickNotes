import { Component, OnInit, Input } from '@angular/core';
import ToDo from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: ToDo;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteNote(id: number) {
    this._todoService.deleteNote(id);
  }

  markAsCompleted(id: number) {
    this._todoService.markAsCompleted(id);
  }

  markAsIncomplete(id: number) {
    this._todoService.markAsIncomplete(id);
  }

}
