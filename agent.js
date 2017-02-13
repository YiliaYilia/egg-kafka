'use strict';

const mysql = require('./lib/kafka');

module.exports = agent => {
  if (agent.config.kafka.agent) mysql(agent);
};
