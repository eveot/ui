import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    // Добавляем правила для обработки файлов .less
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader', // добавить style-loader, чтобы стили применялись динамически
        'css-loader',
        'less-loader',
      ],
    });
    return config;
  },
};

export default config;
