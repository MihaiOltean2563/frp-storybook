import { addParameters } from '@storybook/angular'; // or any other type of storybook
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);
// import { Themes } from '@storybook/themes'

import { themes } from '@storybook/theming';

/* Override defaults for dark and light themes */
addParameters({
  darkMode: {
    // dark: { ...themes.dark, appBg: 'goldenrod' },
    // light: { ...themes.normal, appBg: 'red' },
    current: 'dark'
  }
});