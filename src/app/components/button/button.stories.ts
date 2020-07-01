import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withActions } from '@storybook/addon-actions';
import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';
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
      iframeHeight: 100
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

// Refactor for better readability
const label = 'Loading';
const defaultValue = false;

const labelTwo = 'Brand themes';
const arrayOfObjects: any = [
  {label: 'Beko'},
  {label: 'Hoover'},
  {label: 'Candy'},
  {label: 'Hotpoint'}
];
const defaultValueTwo = arrayOfObjects[0];
// Refactor for better readability

export const Primary = () => ({
  component: ButtonComponent,
  props:{
    text: text('Label', 'Hello Primary'),
    isLoading: boolean(label, defaultValue),
    theme: select(labelTwo, arrayOfObjects, defaultValueTwo)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [isLoading]="isLoading" theme="{{theme.label}}">{{text}}</app-button>
      </div>
    </div>
  `
});



export const Secondary = () => ({
  component: ButtonComponent,
  props:{
    text: text('Button Text', 'Hello Secondary'),
    isLoading: boolean(label, defaultValue),
    theme: select(labelTwo, arrayOfObjects, defaultValueTwo)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [type]="'secondary'" [isLoading]="isLoading" theme="{{theme.label}}">{{text}}</app-button>
      </div>
    </div>
  `
});

export const Loading = () => ({
  component: ButtonComponent,
  props:{
    text: text('Button Text', 'Hello Secondary'),
    isLoading: boolean(label, true),
    theme: select(labelTwo, arrayOfObjects, defaultValueTwo)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [isLoading]="isLoading" theme="{{theme.label}}">Hello button</app-button>
      </div>
    </div>
  `
});
