import { HeadingsComponent } from './headings.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography|Headings',
  component: HeadingsComponent,
  parameters: {
    componentSubtitle: 
      'A collection of all Headings',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HeadingsComponent]
    })
  ]
};

export const Headings = () => ({
  component: HeadingsComponent,
  template: `
  <h1>Level 1 Heading</h1>
  <h2>Level 2 Heading</h2>
  <h3>Level 3 Heading</h3>
  <h4>Level 4 Heading</h4>
  <h5>Level 5 Heading</h5>
  <h6>Level 6 Heading</h6>  
  `
});
