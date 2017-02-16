'use strict';

const kafka = require('./lib/index');

module.exports = app => {
  if (app.config.kafka.app) kafka(app);
};
