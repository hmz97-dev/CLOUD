import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BouttonComponent } from "../boutton/boutton.component";
import { Task } from '../../models/Task.model';

@Component({
  selector: 'app-delate-all',
  imports: [CommonModule, BouttonComponent],
  templateUrl: './delate-all.component.html',
  styleUrl: './delate-all.component.css'
})
export class DelateAllComponent {
  @Output() delateAll: EventEmitter<string> = new EventEmitter<string>()

  delateAllTasksMessage(){
    this.delateAll.emit();
  }
}
