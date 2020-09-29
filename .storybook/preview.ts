import { addDecorator, addParameters } from '@storybook/angular'; // or any other type of storybook
import { withRootAttribute } from 'storybook-addon-root-attribute';

// global
addDecorator(withRootAttribute);

/* Override defaults for dark and light themes */
addParameters({
  rootAttribute: {
    tooltip: true,
    root: 'body',
    defaultState: {
      name: 'Default',
      value: null
    },
    states: [
      {
        name: 'Beko',
        value: 'beko'
      },
      {
        name: 'Hotpoint',
        value: 'hotpoint'
      }
    ]
  }
});
