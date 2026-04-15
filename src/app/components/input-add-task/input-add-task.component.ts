import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-task',
  imports: [CommonModule],
  templateUrl: './input-add-task.component.html',
  styleUrl: './input-add-task.component.css'
})
export class InputAddTaskComponent {
  @Input() placeholder : string = "Add one task ";

  @Output() addTaskEvent: EventEmitter<string> = new EventEmitter<string>()

  sendMessage(task: string){
    this.addTaskEvent.emit(task);
  }
}
