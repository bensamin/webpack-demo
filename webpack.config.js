module.exports = {
    entry:'./src/js/entry.js',        //入口文件
    output:{       //输出文件
        filename:'index.js',    //输出文件名
        publicPath:__dirname +'/out',    //添加静态文件
        path: __dirname +'/out'      //输出文件路径 __dirname指的是js文件的绝对路径
    },
    module:{
        rules:[
            {test:/.js$/,use:['babel-loader']},
            {test:/.css$/,use:['style-loader','css-loader']},//解析css，并把css添加到html的style标签中
            { test:/.(jpg|png|git|svg)$/,use:['url-loader?limit=8192&name./[name].[ext]'] }, //解析图片
            { test:/.less$/,use:['style-loader','css-loader','less-loader'] }
        ]
    }
}