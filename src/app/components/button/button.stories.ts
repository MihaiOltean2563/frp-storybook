import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Elements|Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 
      'Buttons are interactable elements that allow the user to take actions and make choices. They are often placed in your UI in places like: dialogs, modals, forms and cards. They can be presented as a loading state whilst background actions are performed',
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
export const Secondary = () => ({
  component: ButtonComponent,
  template: `
    <div class="story">
      <app-button [type]="'secondary'">Hello button</app-button>
    </div>
  `
});
export const Loading = () => ({
  component: ButtonComponent,
  template: `
    <div class="story">
      <app-button [isLoading]="true">Hello button</app-button>
    </div>
  `
});