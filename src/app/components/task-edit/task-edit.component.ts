import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BouttonComponent } from '../boutton/boutton.component';

@Component({
  selector: 'app-task-edit',
  imports: [BouttonComponent],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  @Input() text? : string;
  @Input() position? : string;
  @Output() editTask: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteTask: EventEmitter<string> = new EventEmitter<string>();

  editTaskMessage(){
    this.editTask.emit();
  }
  deleteTaskMessage(){
    this.deleteTask.emit();
  }

 }
