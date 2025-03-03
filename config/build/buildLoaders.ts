import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          ["i18next-extract", { nsSeparator: "~", locales: ["ru", "en"] }], //keyAsDefaultValue: true
        ],
      },
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from js strings
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:3]" : "[hash:base64:8]",
          },
        },
      },
      {
        loader: "sass-loader",
        options: {
          api: "modern",
        },
      },
    ],
  };

  return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader];
}
