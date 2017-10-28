// Save your local vars in .env for testing. DO NOT VERSION CONTROL `.env`!.
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') require('dotenv').config();

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as chalk from 'chalk';
import * as koaStatic from 'koa-static';
import * as Router from 'koa-router';
import { join } from 'path';

import router from './routes';

const app = new Koa();
const port = process.env.PORT || 5555;

app.use(bodyParser())
  .use(koaStatic(join(__dirname, '../client/')) as any)
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));

export default app;
