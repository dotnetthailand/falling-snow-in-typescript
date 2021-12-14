// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: {
    snow: './src/snow',
  },
  mode: 'development', // check if we need it for hot reload
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    library: {
      name: '[name]',
      export: 'default',
      type: 'umd'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    port: 9999,
    client: {
      overlay: true,
    },
  },
};

/*
Hot reload
JS work, it link by included JS file and it will inject to the HTML that has that JS file.
SCSS work, with sass-loader, css-loader, style-loader
!!! HTML work only "html-loader": "0.5.5" and "extract-loader": "2.0.1"
*/
