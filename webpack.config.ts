import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildENV, BuildPaths } from "./config/build/types/config";

export default (env: BuildENV): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 5000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
