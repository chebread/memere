import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import ESBuildMinifyPlugin from 'esbuild-loader';
import { fileURLToPath } from 'url';
const nodeEnv = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const webpackConfig = {
  mode: nodeEnv === 'development' ? 'development' : 'production',
  entry: {
    main: './src/app.js',
  },
  resolve: {
    extensions: ['js'],
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.css$/,
        use: [
          nodeEnv === 'development'
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 20000,
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin.ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin.CleanWebpackPlugin({
      esModuleInterop: true,
    }),
  ],
};
const configWithSmp = new SpeedMeasurePlugin().wrap(webpackConfig);
configWithSmp.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].css',
  })
);
export default configWithSmp;
