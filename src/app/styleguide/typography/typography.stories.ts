import { TypographyComponent } from './typography.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography',
  component: TypographyComponent,
  parameters: {
    componentSubtitle: 
      'Typography message here',
    docs: {
      iframeHeight: 100
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
    <div class="color">
      <app-typography></app-typography>
    </div>
  `
});
