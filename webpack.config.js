const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-toastify"),
        ],
                
        use: ["style-loader", "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("autoprefixer")],
            },
          },
        },
      ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: './src/assets/images/[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    alias: {
      "react-toastify/dist/ReactToastify.css$": path.resolve(
        __dirname,
        "node_modules/react-toastify/dist/ReactToastify.css"
      ),
    },
  },

  devServer: {
    historyApiFallback: true,
  },
};
