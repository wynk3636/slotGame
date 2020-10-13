const path = require("path");

module.exports = (env,argv) => {
    return{
        //モードの設定
        mode: "production",
        //エントリーポイントの設定
        entry: {
            index:path.join(__dirname, "src" , "index.ts"),
        },
        //出力先の設定
        output:{
            path: path.join(__dirname,"www"),
            filename:"test_npm.js",
            library:"test_npm",
            libraryTarget:"umd"
        },
        module:{
            //JavaScriptファイル以外の他の言語で書かれたプログラムをwebpackで扱う場合にはLoader(ローダー)を使用
            rules:[
                {
                    test:/\.ts$/,
                    use:[
                        {
                            loader:"ts-loader"
                        }
                    ]
                }
            ]
        },
        //モジュールパス解決設定
        resolve:{
            extensions:[".ts",".js"],
            modules:[
                "node_modules"
            ]
        },
        //dev-serverの設定
        devServer:{
            contentBase:"www",
            port:8080
        },
        performance: { hints: false }
    }
}