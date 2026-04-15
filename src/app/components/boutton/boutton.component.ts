import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boutton',
  imports: [CommonModule],
  templateUrl: './boutton.component.html',
  styleUrl: './boutton.component.css'
})
export class BouttonComponent {
  
  @Input() color: string = "red";
  @Input() label: string = "button";
  @Input() size: string = "red";
  @Input() icon: string = "";

  @Output() testeur  = new EventEmitter<string>()

  sendMessage():void{
    this.testeur.emit()
  }
}
