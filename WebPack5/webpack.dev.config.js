const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // Cleans old version files from dist
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js', // contenthash for version support in cache
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, ''),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], // supports all js versions
                        plugins: [ 'transform-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
plugins: [
    // new CleanWebpackPlugin({
    //     cleanOnceBeforeBuildPatterns: [
    //         '**/*', path.join(process.cwd(), 'folderName/**/*') // Clean other folders, cleans output file by default.
    //     ]
    // })
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'hello-world.html',
        title: 'Hello world',
        chunks: ['hello-world'],
        template: 'src/page-template.hbs',
        description: 'hello world'
    }),
    new HtmlWebpackPlugin({
        filename: 'kiwi.html',
        title: 'Kiwi',
        chunks: ['kiwi'],
        template: 'src/page-template.hbs',
        description: 'kiwi'
    })
]
}