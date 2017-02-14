'use strict';

// const assert = require('assert')
const request = require('supertest');
const mm = require('egg-mock');

describe('test/kafka.test.js', () => {
  let app;
  // const uid = utility.randomString()

  before(() => {
    app = mm.app({
      baseDir: 'apps/kafkaapp',
    });
    return app.ready();
  });

  beforeEach(function* () {
    // TODO
  });

  afterEach(function* () {
    // TODO
  });

  after(() => {
    // TODO
    // app.kafka.end(err => {
    //   app.close()
    //   done(err)
    // })
  });

  afterEach(mm.restore);

  it('should query', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });
});
