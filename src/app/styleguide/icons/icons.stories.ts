import { IconsComponent } from './icons.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Icons',
  component: IconsComponent,
  parameters: {
    componentSubtitle: 
      'A collection of icons generated with Icomoon',
    docs: {
      iframeHeight: 200
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [IconsComponent]
    })
  ]
};

export const Icons = () => ({
  component: IconsComponent,
  template: `
    <app-icons></app-icons>  
  `
});
