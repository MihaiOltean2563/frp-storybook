import { ContainerComponent } from './container.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Layout|Container',
  component: ContainerComponent,
  parameters: {
    componentSubtitle: 
      'Containers for all screen sizes',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ContainerComponent]
    })
  ]
};

export const Containers = () => ({
  component: ContainerComponent,
  template: `
    <app-container></app-container> 
  `
});
