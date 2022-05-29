import path from 'path';
import paths from './paths.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import ESBuildMinifyPlugin from 'esbuild-loader';
import WebpackManifestPlugin from 'webpack-manifest-plugin';

const nodeEnv = process.env.NODE_ENV || 'development';
export const webpackConfig = (webpackEnv = 'production') => {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? 'source-map'
      : isEnvDevelopment && 'cheap-module-source-map',
    entry: {
      main: paths.appAppJs,
    },
    output: {
      path: isEnvProduction ? paths.appBuild : undefined,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction
        ? '[name].[hash:8].js'
        : isEnvDevelopment && '[name].js',
      chunkFilename: isEnvProduction
        ? '[name].[hash:8].chunk.js'
        : isEnvDevelopment && '[name].chunk.js',
      publicPath: paths.publicPath,
      devtoolModuleFilenameTemplate: isEnvProduction
        ? info =>
            path
              .relative(paths.appSrc, info.absoluteResourcePath)
              .replace(/\\/g, '/')
        : isEnvDevelopment &&
          (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new ESBuildMinifyPlugin.ESBuildMinifyPlugin({
          target: 'es2015',
          css: true,
        }),
      ],
    },
    resolve: {
      extensions: ['.js', '.mjs'],
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
            isEnvProduction
              ? { loader: MiniCssExtractPlugin.loader }
              : isEnvDevelopment && 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/,
          loader: 'url-loader',
          exclude: [/\.(js|mjs)$/, /\.html$/, /\.json$/],
          options: {
            name: '[name].[ext]?[hash:8]',
            limit: 20000,
          },
        },
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
      new WebpackManifestPlugin.WebpackManifestPlugin({
        fileName: 'manifest.json',
        publicPath: paths.publicPath,
      }),
    ],
  };
};
const configWithSmp = new SpeedMeasurePlugin().wrap(
  webpackConfig(nodeEnv === 'development' ? 'development' : 'production')
);
configWithSmp.plugins.push(
  new MiniCssExtractPlugin({
    filename: nodeEnv === 'development' ? '[name].css' : '[name].[hash].css',
  })
);
export default configWithSmp;
