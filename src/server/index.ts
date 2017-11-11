import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as chalk from 'chalk';
import * as koaStatic from 'koa-static';
import * as Router from 'koa-router';
import { join } from 'path';

import router from './routes';

import * as webpack from 'webpack';
import * as koaWebpack from 'koa-webpack';
import * as webpackConfig from '../../build/webpack.dev.conf';
import * as config from '../../config';

const app = new Koa();
const port = process.env.NODE_ENV === 'production' ? 80 : (process.env.PORT || config.dev.port);

if (process.env.NODE_ENV === 'production') {
  app.use(koaStatic(join(__dirname, '../client/')) as any);
} else {
  const compiler = webpack(webpackConfig);
  const middleware = koaWebpack({
    compiler,
    hot: {
      log: false,
    },
    dev: {
      publicPath: '/',
      quiet: true,
    },
  });
  compiler.plugin('compilation', (compilation: any) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data: any, callback: any) => {
      middleware.hot.publish({ action: 'reload' });
      callback();
    });
  });
  app.use(middleware);
}
app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));

export default app;
