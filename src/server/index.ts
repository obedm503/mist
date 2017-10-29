import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as chalk from 'chalk';
import * as koaStatic from 'koa-static';
import * as Router from 'koa-router';
import { join } from 'path';

import router from './routes';

import * as webpack from 'webpack';
import * as webpackDev from 'koa-webpack-dev-middleware';
import * as webpackHot from 'koa-webpack-hot-middleware';
import * as webpackConfig from '../../build/webpack.dev.conf';
import * as config from '../../config';

const app = new Koa();
const port = process.env.PORT || config.dev.port;

if (process.env.NODE_ENV === 'production') {
  app.use(koaStatic(join(__dirname, '../client/')) as any);
} else {
  const compiler = webpack(webpackConfig);
  const hotMiddleware = webpackHot(compiler, {
    log: false
  });
  compiler.plugin('compilation', function (compilation: any) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data: any, cb: any) {
      hotMiddleware.publish({ action: 'reload' });
      cb();
    });
  });
  app.use(webpackDev(compiler, {
    publicPath: '/',
    quiet: true
  })).use(hotMiddleware);
}
app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));

export default app;
