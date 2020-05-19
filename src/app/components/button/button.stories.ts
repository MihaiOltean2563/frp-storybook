import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Elements|Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 'BButtons are interactable elements that allow the user to take actions and make choices',
    docs: {
      iframeHeight: 100
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ButtonComponent]
    })
  ]
};

export const Primary = () => ({
  component: ButtonComponent,
  template: `
    <div class="story">
      <app-button>Hello button</app-button>
    </div>
  `
});