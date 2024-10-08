const path = require('path'); // CommonJS

module.exports={
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public','assets','js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /nodes_modules/,
            test: /\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map',
};