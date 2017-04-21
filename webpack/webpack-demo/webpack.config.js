var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry:['./src/scripts/main.js','./src/scripts/a.js'],
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        // publicPath: './dist/',
        filename:'js/[name]-boundle.js',
       // publicPath:'http:www.cccgaming.com/'
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude: __dirname + '/node_modules',
            include:__dirname + '/src',
            query:{
                presets:['latest'] //按照最新的ES6语法规则去转换
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
             {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
             {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query:{
                    name:'assets/[name]-[hash:5].[ext]'
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader' //此处感叹号起串联作用 
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader' //此处感叹号起串联作用 
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!postcss-loader!sass-loader' //此处感叹号起串联作用 
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',           
            template:'index.html',
           // inject:'head',
           inject:'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['last 5 versions']
                        })
                    ]
                }
            }
        })
    ]
}