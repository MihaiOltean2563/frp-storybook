import { ColorsComponent } from './colors.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Colors',
  component: ColorsComponent,
  parameters: {
    componentSubtitle: 
      'The collection of FRP colors',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ColorsComponent]
    })
  ]
};

export const Colors = () => ({
  component: ColorsComponent,
  template: `
    <div class="color">
      <app-colors></app-colors>
    </div>
  `
});
