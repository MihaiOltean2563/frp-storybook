import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() type: 'primary' | 'secondary' = 'primary';

  @Input() isLoading: boolean = false;

  @Output() clicked: EventEmitter<null> = new EventEmitter();

  public onClick(): void {
    this.clicked.emit();
  }
 
}
