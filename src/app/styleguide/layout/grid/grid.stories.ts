import { GridComponent } from './grid.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Layout|Grid',
  component: GridComponent,
  parameters: {
    componentSubtitle: 
      'Grids for all screen sizes',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [GridComponent]
    })
  ]
};

export const Grids = () => ({
  component: GridComponent,
  template: `
    <div class="story">
      <app-grid></app-grid>
    </div>
  `
});

//https://codyhouse.co/ds/docs/framework/grid-layout#container