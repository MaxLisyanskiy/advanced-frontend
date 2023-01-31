import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: path
        }),
        new webpack.ProgressPlugin(),
    ]
}