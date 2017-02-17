'use strict';

exports.kafka = {
  default: {
    host: '127.0.0.1:2181' }, // 'localhost:3000,locahost:3001,localhost:3002' or 'localhost:2181,localhost:2182/test'
  app: true, // 默认附加到app
  agent: true, // 默认附加到agent
};
