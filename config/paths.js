import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath); // 상대경로를 인자로 받습니다.
const publicPath = '/';
const appPath = resolvePath('.');
const appBuild = resolvePath('dist');
const appHtml = resolvePath('index.html');
const appAppJs = resolvePath('src/app.js');
const appSrc = resolvePath('src');
const appNodeModules = resolvePath('node_modules');
const moduleFileExtensions = ['web.mjs', 'mjs', 'web.js', 'js', 'json'];

export default {
  publicPath,
  appPath,
  appBuild,
  appHtml,
  appAppJs,
  appSrc,
  appNodeModules,
  moduleFileExtensions,
};
