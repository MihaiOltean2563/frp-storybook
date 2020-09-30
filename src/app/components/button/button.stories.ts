import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { withActions } from '@storybook/addon-actions';
import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';
import { withXD } from 'storybook-addon-xd-designs';
import { withA11y } from '@storybook/addon-a11y';
import StorybookVRhythm from 'storybook-vrhythm';
import { withCssResources } from '@storybook/addon-cssresources';
// import { centered } from '@storybook/addon-centered/angular';

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
      artboardUrl:
        'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop'
    },
    vrhythm: {
      color: 'rgba(178,86,18,0.5)',
      lineHeight: '16px',
      offset: 0,
      hide: true //initial state of vertical rhythm
    },
    cssresources: [
      {
        id: `bluetheme`,
        code: `<style>body { background-color: lightblue; }</style>`,
        picked: false,
        hideCode: false // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      }
    ],
    assets: [
      'https://www.donwcarpenter.com/static/4b78d99ae91a17d638dc7fe7688d6112/94f53/storybook.png', // link to an external image
      'https://www.example.com', // link to a webpage
      'https://www.example.com?id={id}' // link to a webpage with the current story's id in the url
    ]
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
    StorybookVRhythm,
    withCssResources
    // centered //uncomment to center the element within the frame
  ]
};

/* Declare custom map object for knobs options */
const map = new Map();
map.set('loading', { label: 'Loading', defaultValue: false });
map.set('themes', {
  label: 'Theme',
  brands: [
    { label: 'Beko' },
    { label: 'Hoover' },
    { label: 'Candy' },
    { label: 'Hotpoint' }
  ],
  defaultValue: { label: 'Beko' }
});

/* Declare vars for easier readability */
const [
  loadingLabel,
  loadingDefaultValue,
  themesLabel,
  themesBrandsList,
  themesDefaultValue
] = [
  map.get('loading').label,
  map.get('loading').defaultValue,
  map.get('themes').label,
  map.get('themes').brands,
  map.get('themes').defaultValue
];

export const Primary = () => ({
  component: ButtonComponent,
  props: {
    text: text('Label', 'Hello Primary'),
    isLoading: boolean(loadingLabel, loadingDefaultValue),
    theme: select(themesLabel, themesBrandsList, themesDefaultValue)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [isLoading]="isLoading">{{text}}</app-button>
      </div>
    </div>
  `
});

export const Secondary = () => ({
  component: ButtonComponent,
  props: {
    text: text('Button Text', 'Hello Secondary'),
    isLoading: boolean(loadingLabel, loadingDefaultValue),
    theme: select(themesLabel, themesBrandsList, themesDefaultValue)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [type]="'secondary'" [isLoading]="isLoading">{{text}}</app-button>
      </div>
    </div>
  `
});

export const Loading = () => ({
  component: ButtonComponent,
  props: {
    text: text('Button Text', 'Hello Loading'),
    isLoading: boolean(loadingLabel, true),
    theme: select(themesLabel, themesBrandsList, themesDefaultValue)
  },
  template: `
    <div class="story margin-top-sm">
      <div class="container">
        <app-button [isLoading]="isLoading">{{text}}</app-button>
      </div>
    </div>
  `
});
