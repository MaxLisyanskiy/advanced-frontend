import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  // Если не используем ts - нужен babel-loader для js
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
                ? '[local]__[hash:base64:5]' //[path][name]__[local]--[hash:base64:5]
                : '[hash:base64:8]'
          }
        }
      }, // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS
    ],
  };

  return [typescriptLoader, cssLoader];
}
