module.exports = {
  // stories: ['../src/**/*.stories.ts'],
  // stories: ['../src/**/*.stories.{js,mdx,md,ts}'],
  stories: ["../src/**/*.stories.@(js|mdx|ts)"],
  addons: [
    // "@storybook/addon-actions",
    // "@storybook/addon-links",
    // "@storybook/addon-notes",
    // "@storybook/addon-a11y/register",
    // "@storybook/addon-knobs/register",
    // "storybook-addon-xd-designs/register",
    // "@storybook/addon-storysource",
    // "@storybook/addon-viewport",
    // "storybook-dark-mode/register",
    // "@storybook/addon-cssresources",
    // "@storybook/addon-design-assets/register",
    "storybook-addon-root-attribute/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};

/**Addon documentation
 * https://storybook.js.org/addons/
 * https://github.com/storybookjs/storybook/tree/master/addons/actions
 * https://github.com/storybookjs/storybook/tree/master/addons/links
 * https://github.com/storybookjs/storybook/tree/master/addons/notes
 * https://github.com/storybookjs/storybook/tree/master/addons/docs
 * https://github.com/storybookjs/storybook/tree/master/addons/viewport - works but throws a render error
 * https://github.com/storybookjs/storybook/tree/master/addons/a11y,
 * https://github.com/storybookjs/storybook/tree/master/addons/storysource
 * https://github.com/morgs32/storybook-addon-xd-designs
 */
