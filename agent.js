'use strict';

const kafka = require('./lib/index');

module.exports = agent => {
  if (agent.config.kafka.agent) kafka(agent);
};
