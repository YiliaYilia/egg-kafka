'use strict';

const assert = require('assert');
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

  it('should producer test', function* () {
    yield app.kafka.producer().createTopicsAsync([ 'topic110' ], true);
    yield app.kafka.producer({
      requireAcks: 1,
      ackTimeoutMs: 100,
      partitionerType: 2,
    }).sendAsync([{ topic: 'topic110', messages: 'test' + new Date().getSeconds(), partition: 0 }]);
    const producerResult = yield app.kafka.producer().sendAsync([{ topic: 'topic110', messages: 'test' + new Date().getSeconds(), partition: 0 }]);
    assert(producerResult.topic110);
  });

  it('should highLevelProducer test', function* () {
    yield app.kafka.highLevelProducer().createTopicsAsync([ 'topic210' ], true);
    yield app.kafka.highLevelProducer({
      requireAcks: 1,
      ackTimeoutMs: 100,
      partitionerType: 2,
    }).sendAsync([{ topic: 'topic210', messages: 'test' + new Date().getSeconds(), partition: 0 }]);
    const producerResult = yield app.kafka.highLevelProducer().sendAsync([{ topic: 'topic210', messages: 'test' + new Date().getSeconds(), partition: 0 }]);
    assert(producerResult.topic210);
  });
});
