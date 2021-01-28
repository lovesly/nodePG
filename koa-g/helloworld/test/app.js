'use strict'

import test from 'ava';
import supertest from 'supertest';
import koa from '../app';

const app = koa.callback();

// 日你妈都跑不起来
test.cb('GET /', t => {
  supertest(app)
    .get('/')
    .expect(200, (err, res) => {
      // 怀疑 api 已经变了
      // 简陋的文档，如果不是这本书非要用，看都懒得看。。
      if (err) {
        t.fail(err.message);
      }
      
      let userId = res.body.id;
      t.regex(res.text, /Hello Koa 2!/, 'res.text == Hello Koa 2!');
      t.end();
    })
});