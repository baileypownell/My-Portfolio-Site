const path = require("path");

module.exports = {
  mode: 'development',
  entry: ["./src/js/main.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
         test: /\.(png|svg|jpg|jpeg|gif|mp4)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
               name: '[name].[ext]',
               outputPath: 'images/',
               publicPath: 'images/'
             }
           }
         ],
       }
    ]
  }
};
