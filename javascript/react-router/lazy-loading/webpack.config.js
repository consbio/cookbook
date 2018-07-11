import path from 'path'

import Webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const MODE = JSON.stringify(process.env.NODE_ENV)

export default {
    target: 'web',

    mode: MODE === '"development"' ? 'development' : 'production',

    context: __dirname,

    devtool: (
        MODE === '"development"' ? 'cheap-module-source-map' : 'source-map'
    ),

    entry: {
        base: MODE === '"development"' ?
            ['react-hot-loader/patch', 'index.jsx'] :
            'index.jsx'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        sourceMapFilename: 'js/[name].js.map',
        publicPath: (
            MODE === '"development"' ? 'http://localhost:3000/' : undefined
        ),
        crossOriginLoading: 'anonymous'
    },

    devServer: {
        hot: true,
        port: 3000,
        inline: true,
        publicPath: '/',
        stats: ['minimal', 'color'],
        headers: { 'Access-Control-Allow-Origin': '*' }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },

    resolve: {
        modules: ['node_modules', './'],
        extensions: ['.js', '.jsx']
    },

    optimization: {
        minimize: MODE !== '"development"',
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true
            })
        ],
        splitChunks: {
            chunks: MODE === '"development"' ? () => false : 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html')
        }),
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': MODE
        })
    ].concat(
        MODE === '"development"' ?
            [
                new Webpack.NamedModulesPlugin(),
                new Webpack.HotModuleReplacementPlugin(),
                new Webpack.NoEmitOnErrorsPlugin()
            ] :
            []
    )
}
