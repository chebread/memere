import express from 'express';
import webpack from 'webpack';
import path from 'path';
import { webpackConfig } from '../config/webpack.config.js';
import middleware from 'webpack-dev-middleware';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compiler = webpack(webpackConfig);
const app = express();
const nodeEnv = process.env.NODE_ENV || 'development';
app.use(
  middleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  })
);
app.use((req, res, next) => {
  if (nodeEnv === 'development') {
    compiler.outputFileSystem.readFile(
      path.join(compiler.outputPath, 'index.html'),
      (err, result) => {
        if (err) return next(err);
        res.set('content-type', 'text/html').end(result);
      }
    );
    return;
  }
  if (nodeEnv === 'production') {
    res.sendFile(path.join(__dirname, './index.html'));
  }
});
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(process.env.PORT || 8080);
