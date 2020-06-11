import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withActions } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Elements|Button',
  component: ButtonComponent,
  
  parameters: {
    componentSubtitle: 
      'Buttons are interactable elements that allow the user to take actions and make choices. They are often placed in your UI in places like: dialogs, modals, forms and cards. They can be presented as a loading state whilst background actions are performed',
    docs: {
      iframeHeight: 200
    }
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ButtonComponent]
    }),
    withActions('mouseover', 'click .btn', 'contextmenu'),
    withKnobs
  ]
};
const label = 'Loading';
const defaultValue = false;
const groupId = 'GROUP-ID1';
const value = boolean(label, defaultValue);


export const Primary = () => ({
  component: ButtonComponent,
  props:{
    text: text('Label', 'Hello Primary'),
    isLoading: boolean(label, defaultValue)
  },
  template: `
    <div class="story margin-top-sm">
      <app-button [isLoading]="isLoading">{{text}}</app-button>
    </div>
  `
});



export const Secondary = () => ({
  component: ButtonComponent,
  props:{
    text: text('Label', 'Hello Secondary'),
    isLoading: boolean(label, defaultValue)
  },
  template: `
    <div class="story margin-top-sm">
      <app-button [type]="'secondary'">{{text}}</app-button>
    </div>
  `
});

export const Loading = () => ({
  component: ButtonComponent,
  template: `
    <div class="story margin-top-sm">
      <app-button [isLoading]="true">Hello button</app-button>
    </div>
  `
});
