'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('1)test http access', () => {
  let app;
  // const uid = utility.randomString()
  before(() => {
    app = mm.app({
      baseDir: 'apps/kafkaapp',
    });
    return app.ready();
  });
  afterEach(mm.restore);

  it('should query index', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });
});

describe('2)test/kafka.test.js - Produce Topic And Message', () => {
  let app;
  // const uid = utility.randomString()
  before(() => {
    app = mm.app({
      baseDir: 'apps/kafkaapp',
    });
    return app.ready();
  });
  afterEach(mm.restore);

  it('should producer test', function* () {
    yield app.kafka.producer().createTopicsAsync([ 'topic110' ], true);
    const producerResult = yield app.kafka.producer().sendAsync(
      [{
        topic: 'topic111',
        messages: 'test' + new Date().getSeconds(),
        partition: 0,
      }]);
    assert(producerResult.topic111);
  });

  it('should highLevelProducer test', function* () {
    yield app.kafka.highLevelProducer().createTopicsAsync([ 'topic210' ], true);
    const producerResult = yield app.kafka.highLevelProducer().sendAsync(
      [{
        topic: 'topic210',
        messages: 'test' + new Date().getSeconds(),
        partition: 0,
      }]);
    assert(producerResult.topic210);
  });
});
