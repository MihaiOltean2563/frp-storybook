import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor() { }
  /**
 * Classes for all icons
 */
  private appIcons = [
    'cooker',
    'dishwasher',
    'fridge-freezer',
    'other-appliances',
    'tumble-dryer',
    'washing-machine',
    'tip',
    'brochure',
    'settings',
    'cross',
    'tick',
    'breakdown',
    'delivery',
    'repair-engineer',
    'savings',
    'accidental-damage',
    'arrow-down'
  ];
  ngOnInit(): void {
  }
  /***
   *  Specify the corresponding class
  * */
  @Input() type: string;


}
