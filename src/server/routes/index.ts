import * as Router from 'koa-router';
import { Request } from 'koa';
import * as chalk from 'chalk';
import low from '../db';

import patterns from './patterns';

const router = new Router({ prefix: '/api' });

low.then((db: any) => {
  Object.keys(patterns).forEach(method => {
    const [path, func] = (patterns as any)[method];
    const middleware = func(db);
    (router as any)[method](path, middleware);
  });
}).catch(console.error);

export default router;

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
