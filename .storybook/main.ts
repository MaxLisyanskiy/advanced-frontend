import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.s(a|c)ss$/,
        include: path.resolve(__dirname, "../"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                namedExport: false,
                exportLocalsConvention: "as-is",
                localIdentName: "[local]__[hash:base64:15]",
              },
            },
          },
          "sass-loader",
        ],
      });

      config.module.rules = config.module?.rules?.map(
        (rule: RuleSetRule | null | undefined | false | 0 | "" | "...") => {
          if (rule && rule !== "..." && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }

          return rule;
        }
      );

      config.module.rules.push({
        test: /\.svg$/,
        enforce: "pre",
        loader: require.resolve("@svgr/webpack"),
      });
    }

    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    return config;
  },
  // webpackFinal: async (config) => {
  //   // const paths: BuildPaths = {
  //   //   build: "",
  //   //   html: "",
  //   //   entry: "",
  //   //   src: path.resolve(__dirname, "..", "src"),
  //   // };
  //   // config.resolve.modules.push(paths.src);
  //   // // config.resolve.extensions.push(".ts", ".tsx");
  //   if (config.resolve) {
  //     config.resolve.plugins = [
  //       ...(config.resolve.plugins || []),
  //       new TsconfigPathsPlugin({
  //         extensions: config.resolve.extensions,
  //       }),
  //     ];
  //   }
  //   return config;
  // },
};
export default config;
