module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-notes', 
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-xd-designs/register',
    '@storybook/addon-storysource',
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      }
    },
  ],
};

/**Addon documentation 
 * https://storybook.js.org/addons/
 * https://github.com/storybookjs/storybook/tree/master/addons/actions
 * https://github.com/storybookjs/storybook/tree/master/addons/links
 * https://github.com/storybookjs/storybook/tree/master/addons/notes
 * https://github.com/storybookjs/storybook/tree/master/addons/docs
 * https://github.com/storybookjs/storybook/tree/master/addons/viewport - DOES NOT WORK in SB 5.3
 * https://github.com/storybookjs/storybook/tree/master/addons/a11y,
 * https://github.com/storybookjs/storybook/tree/master/addons/storysource
 * https://github.com/morgs32/storybook-addon-xd-designs
 */
