import { Injectable } from '@angular/core';
import ToDo from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  notes: ToDo[] = [];

  constructor() { 
    var stored = localStorage.getItem("todo");
    if(stored != null) {
      this.notes = JSON.parse(stored) as ToDo[];
    }
  }

  addNote(text: string): void {
    var id = 1;
    if(this.notes.length > 0) {
      id = this.notes[this.notes.length -1].id + 1;
    }
    this.notes.push({
      id: id,
      text: text,
      completed: false
    });
    this.syncStorage();
  }

  markAsCompleted(id: number): void {
    var item = this.notes.find(x => x.id == id);
    if(item) {
      item.completed = true;
    }
    this.syncStorage();
  }

  markAsIncomplete(id: number): void {
    var item = this.notes.find(x => x.id == id);
    if(item) {
      item.completed = false;
    }
    this.syncStorage();
  }

  deleteNote(id: number): void {
    var item = this.notes.find(x => x.id == id);
    if(item) {
      var index = this.notes.indexOf(item);
      if(index > -1) {
        this.notes.splice(index, 1);
      }
    }
    this.syncStorage();
  }

  private syncStorage(): void {
    localStorage.removeItem("todo");
    localStorage.setItem("todo", JSON.stringify(this.notes));
  }

}
