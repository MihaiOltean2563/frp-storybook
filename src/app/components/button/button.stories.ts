import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withActions } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withXD } from 'storybook-addon-xd-designs'
import { withA11y } from '@storybook/addon-a11y';
import StorybookVRhythm from 'storybook-vrhythm';

export default {
  title: 'Elements|Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 
      'Buttons are interactable elements that allow the user to take actions and make choices. They are often placed in your UI in places like: dialogs, modals, forms and cards. They can be presented as a loading state whilst background actions are performed',
    docs: {
      iframeHeight: 200
    },
    design: {
      artboardUrl: 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop',
    },
    vrhythm: {
      color: 'rgba(178,86,18,0.5)',
      lineHeight: '16px',
      offset: 0,
      hide: true
    },
  },
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ButtonComponent]
    }),
    withXD,
    withActions('mouseover', 'click .btn', 'contextmenu'),
    withKnobs,
    withA11y,
    StorybookVRhythm
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
