import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
  /*** Specify the variant of the button */
  @Input() type: 'primary' | 'secondary' = 'primary';

  /*** 
   * Specify a brand name string that matches a scss declaration in _colors.scss
  */
  @Input() theme: string = 'default';
  
  /*** Specify whether the button should show a loading spinner */
  @Input() isLoading: boolean = false;

  /*** Output - button clicked */
  @Output() clicked: EventEmitter<null> = new EventEmitter();

  /*** Emit button clicked */
  public onClick(): void {
    this.clicked.emit();
  }

}
