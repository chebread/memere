// import path from 'path';
import paths from './paths.js';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 8080;
export const devServerConfig = () => {
  return {
    compress: true,
    hot: true,
    server: 'https',
    static: {
      directory: paths.appPublic,
    },
    client: {
      logging: 'none',
      overlay: true,
      // webSocketURL: 'ws://localhost:8080/ws',
    },
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicPath,
    },
    port,
    open: true,
  };
};
