import { BordersComponent } from './borders.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography|Borders',
  component: BordersComponent,
  parameters: {
    componentSubtitle: 
      'Borders',
    docs: {
      iframeHeight: 300
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BordersComponent]
    })
  ]
};

export const Borders = () => ({
  component: BordersComponent,
  template: `
    <div class="story">
        <app-borders></app-borders>
    </div>
  `
});
