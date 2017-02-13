'use strict';

const kafka = require('./lib/kafka');

module.exports = app => {
  if (app.config.kafka.app) kafka(app);
};
