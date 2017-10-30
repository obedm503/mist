import * as Router from 'koa-router';
import { Request } from 'koa';
import * as chalk from 'chalk';
import low from './db';
import { pattern } from './schema';
import * as cuid from 'cuid';

const router = new Router({ prefix: '/api' });

low.then((db: any) => {
  // gets list of patterns
  router.get('/patterns/', async (ctx, next) => {
    await next();
    ctx.body = db.get('patterns').value();
    ctx.status = 200;
  });

  // creates new pattern
  router.post('/patterns/', async ({ request, response }, next) => {
    try {
      await next();
      pattern(request.body);
      const { name } = request.body;
      const create = { name, id: cuid() };
      await db
        .get('patterns')
        .push(create)
        .write();

      response.body = db.get('patterns').value();
      response.status = 200;
    } catch (e) {
      response.body = e.message;
    }
  });

  // updates pattern
  router.patch('/patterns/:id', async ({ request, response }, next) => {
    try {
      await next();
      pattern(request.body);
      const { name, id } = request.body;
      const create = { name, id };
      await db
        .get('patterns')
        .find({ id })
        .assign(create)
        .write();

      response.body = db.get('patterns').value();
      response.status = 200;
    } catch (e) {
      response.body = e.message;
    }
  });

  // deletes pattern
  router.delete('/patterns/:id', async ({ request, response, params }, next) => {
    try {
      await next();
      await db
        .get('patterns')
        .remove({ id: params.id })
        .write();
      response.body = db.get('patterns').value();
      response.status = 200;
    } catch (e) {
      response.body = e.message;
    }
  });
});

export default router;

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
