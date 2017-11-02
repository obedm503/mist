import { IMiddleware } from 'koa-router';
import { pattern } from '../schema';
import * as cuid from 'cuid';

export default {
  // create pattern
  post: ['/patterns/', (db: any): IMiddleware => async ({ request, response }, next) => {
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
  }],
  // gets list of patterns
  get: ['/patterns/', (db: any): IMiddleware => async (ctx, next) => {
    await next();
    ctx.body = db.get('patterns').value();
    ctx.status = 200;
  }],
  // updates pattern
  patch: ['/patterns/:id', (db: any): IMiddleware => async ({ request, response }, next) => {
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
  }],
  // delete a pattern
  delete: ['/patterns/:id', (db: any): IMiddleware => async ({ request, response, params }, next) => {
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
  }]
};
