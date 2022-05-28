const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const path = require('path');
const app = express();
const nodeEnv = process.env.NODE_ENV || 'development';
app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  })
);
app.use((req, res, next) => {
  if (nodeEnv === 'production') {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
  if (nodeEnv === 'development') {
    compiler.outputFileSystem.readFile(
      path.join(compiler.outputPath, './index.html'),
      (err, result) => {
        if (err) return next(err);
        res.set('content-type', 'text/html').end(result);
      }
    );
    return;
  }
});
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(process.env.PORT || 8080);
