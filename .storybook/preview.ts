import { addParameters } from '@storybook/angular'; // or any other type of storybook
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { themes } from '@storybook/theming';

/* Override defaults for dark and light themes */
addParameters({
  darkMode: {
    // dark: { ...themes.dark, appBg: 'goldenrod' },
    // light: { ...themes.normal, appBg: 'red' },
    current: 'dark'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS, //comment out to use basic options e.g Small Mobile  / Large Mobile / Tablet
  }
});

