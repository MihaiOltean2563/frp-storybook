import { BannerComponent } from './banner.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withActions } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Elements|Banner',
  component: BannerComponent,
  
  parameters: {
    componentSubtitle: 
      'Banner description here',
    docs: {
      iframeHeight: 300
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BannerComponent]
    }),
    withActions('mouseover', 'click .btn', 'contextmenu'),
    withKnobs
  ]
};

export const Default = () => ({
  component: BannerComponent,
  template: `
    <div class="story margin-top-sm">
        <app-banner></app-banner>
    </div>
  `
});
