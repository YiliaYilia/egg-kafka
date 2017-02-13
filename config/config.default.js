'use strict';

exports.kafka = {
  default: {
    host: '127.0.0.1', // 主机名
    port: 2181, // 端口
  },
  app: true, // 默认附加到app
  agent: true, // 默认附加到agent
};
