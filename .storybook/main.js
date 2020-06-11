module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-notes', 
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
//'@storybook/addon-docs',


/**Addon documentation - https://storybook.js.org/addons/
 * https://github.com/storybookjs/storybook/tree/master/addons/actions
 * https://github.com/storybookjs/storybook/tree/master/addons/links
 * https://github.com/storybookjs/storybook/tree/master/addons/notes
 * https://github.com/storybookjs/storybook/tree/master/addons/docs
 * https://github.com/storybookjs/storybook/tree/master/addons/viewport - '@storybook/addon-viewport/register',
 * https://github.com/storybookjs/storybook/tree/master/addons/a11y
 */