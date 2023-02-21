import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[local]__[hash:base64:5]' // [path][name]__[local]--[hash:base64:5]
                            : '[hash:base64:8]',
                    },
                },
            }, // Translates CSS into CommonJS
            'sass-loader', // Compiles Sass to CSS
        ],
    };
}
