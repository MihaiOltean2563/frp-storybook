import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /*** Specify the variant of the button */
  @Input() type: 'primary' | 'secondary' = 'primary';
  
  /*** Specify whether the button should show a loading spinner */
  @Input() isLoading: boolean = false;

  /*** Output - button clicked */
  @Output() clicked: EventEmitter<null> = new EventEmitter();

  /*** Emit button clicked */
  public onClick(): void {
    this.clicked.emit();
  }
 
}
