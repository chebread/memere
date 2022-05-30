import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { webpackConfig } from '../config/webpack.config.js';
import { devServerConfig } from '../config/webpackDevServer.config.js';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = webpackConfig('development'); // start는 원래 development 환경에서 진행하기 때문에 그냥 인자를 이것으로만 줘도 괜찮다.
const serverConfig = devServerConfig();
const configWithSmp = new SpeedMeasurePlugin().wrap(config);
configWithSmp.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[hash:8].css',
  })
);
const compiler = webpack(configWithSmp);
const devServer = new WebpackDevServer(compiler, serverConfig);
const runServer = async () => {
  await devServer.start();
};
runServer();
