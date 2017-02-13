'use strict';

const assert = require('assert');
const kafkaNode = require('kafka-node');
let count = 0;

module.exports = app => {
  app.addSingleton('kafka', createOneClient);
};

function createOneClient (config, app) {
  assert(config.host && config.port,
    `[egg-kafka] 'host: ${config.host}', 'port: ${config.port}'are required on config`);
  app.coreLogger.info('[egg-kafka] connecting %s:%s', config.host, config.port);
  const object = {};
  object.kafkaNode = kafkaNode;
  object.client = kafkaNode.Client(config.host + ':' + config.port);
  object.producer = new kafkaNode.Producer(object.client);
  object.producer.createTopics(['t'], true, function (err, data) {
    if (err) app.coreLogger.info(`[egg-kafka] error: ${err}`);
  });

  app.beforeStart(function * () {
    const index = count++;
    const times = new Date();
    app.coreLogger.info(`[egg-kafka] instance[${index}] status OK, currentTime: ${times}`);
  });
  return object;
}
