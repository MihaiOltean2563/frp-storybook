//Documentation: https://codyhouse.co/ds/docs/framework/utilities#typography

import { TypographyComponent } from './typography.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography|Typography',
  component: TypographyComponent,
  parameters: {
    componentSubtitle: 
      'Font family, font-size and line-height typescale and responsive text size classes',
    docs: {
      iframeHeight: 300
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TypographyComponent]
    })
  ]
};

export const Typography = () => ({
  component: TypographyComponent,
  template: `
   <app-typography></app-typography>
  `
});