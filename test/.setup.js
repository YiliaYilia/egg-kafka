'use strict';

const mm = require('egg-mock');

global.mm = global.mock = mm;
global.request = require('supertest');
global.assert = require('assert');

let app;
let ctx;

before(() => {
  app = global.app = mm.app();
  return app.ready();
});

before(() => {
  ctx = global.ctx = app.mockContext();
  return ctx;
});
