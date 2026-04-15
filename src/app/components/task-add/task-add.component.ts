import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { BouttonComponent } from '../boutton/boutton.component';

@Component({
  selector: 'app-task-add',
  imports: [CommonModule, BouttonComponent],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  @Input() placeholder?: string;
  @Input() position?: string;

  @Output() updateTask : EventEmitter<string> = new EventEmitter<string>;
  @Output() cancel : EventEmitter<string> = new EventEmitter<string>

  sendUpdateTask(message: string){
    this.updateTask.emit(message)
  }
  sendCancelMessage(){
    this.cancel.emit();
  }
}
