import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  @Output()
  clearCompleted: EventEmitter<null> = new EventEmitter();

  constructor() {
  }

  clearCompletedTodos() {
  	this.clearCompleted.emit();
  }

}
