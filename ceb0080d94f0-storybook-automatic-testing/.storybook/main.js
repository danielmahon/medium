module.exports = {
  stories: ["../src/**/stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          modules: {
            auto: /\.module\.css$/,
          },
        },
      },
    },
  ],
  typescript: {
    check: false,
    reactDocgen: false,
  },
};
