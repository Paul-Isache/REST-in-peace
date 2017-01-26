const path = require('path')

module.exports = {
    name: 'Server',
    entry: path.join(__dirname, '/src/server.ts'),
    output: {
        filename: path.join(__dirname, '/src/server.js'),
        library: true,
        libraryTarget: 'commonjs'
    },
    externals: [
        /^(?!\.|\/).+/i
    ],
    target: 'node',
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts']
    },
    node: {
        __filename: true,
        global: true,
        process: true
    },
    tslint: {
        tsConfigFile: 'tslint.json',
        formattersDirectory: 'node_modules/tslint-loader/formatters/'
    }
}