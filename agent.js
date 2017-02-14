'use strict';

const kafka = require('./lib/kafka');

module.exports = agent => {
  if (agent.config.kafka.agent) kafka(agent);
};
