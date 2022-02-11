module.exports = {
  core: {
    builder: 'storybook-builder-vite',
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};
