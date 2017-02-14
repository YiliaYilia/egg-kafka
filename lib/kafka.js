'use strict';

const assert = require('assert');
const kafkaNode = require('kafka-node');

module.exports = app => {
  app.addSingleton('kafka', createOneClient);
};

function createOneClient(config, app) {
  assert(config.host && config.port,
    `[egg-kafka] 'host: ${config.host}', 'port: ${config.port}'are required on config`);
  app.coreLogger.info('[egg-kafka] connecting %s:%s', config.host, config.port);

  const object = {};

  object.client = new kafkaNode.Client(config.host + ':' + config.port);

  object.Producer = new kafkaNode.Producer(object.client);

  object.Producer.on('ready', function() {
    // TODO
  });

  object.HighProfucer = new kafkaNode.HighLevelProducer(object.client);

  return object;
}
