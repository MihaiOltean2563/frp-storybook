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
  <div class="container container--adaptive-lg ba">
    <div class="grid">
      <div class="col ba">1</div>
      <div class="col ba">2</div>
      <div class="col ba">3</div>
    </div>
  </div>  
  `
});
