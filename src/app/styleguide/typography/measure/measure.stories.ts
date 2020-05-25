import { MeasureComponent } from './measure.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Styleguide|Typography|Measure',
  component: MeasureComponent,
  parameters: {
    componentSubtitle: 
      'Easy classes for basic measures of text widths and line-height values for all children of class text-component',
    docs: {
      iframeHeight: 300
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [MeasureComponent]
    })
  ]
};

export const TextMeasures = () => ({
  component: MeasureComponent,
  template: `
    <div class="measure-wide text-component margin-bottom">
      <h5>Wide measure</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>  
    <div class="measure text-component margin-bottom">
      <h5>Normal measure</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>  
    <div class="measure-narrow text-component margin-bottom">
      <h5>Narrow measure</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>  
  `
});
