import { FontSizesComponent } from './font-sizes.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography|Font Sizes',
  component: FontSizesComponent,
  parameters: {
    componentSubtitle: 
      'A collection of font-sizes from our variables',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [FontSizesComponent]
    })
  ]
};

export const FontSizes = () => ({
  component: FontSizesComponent,
  template: `
  <div class="text--xs">--text-xs</div>  
  <div class="text--sm">--text-sm</div>  
  <div class="text--md">--text-md</div>  
  <div class="text--lg">--text-lg</div>  
  <div class="text--xl">--text-xl</div>  
  `
});
