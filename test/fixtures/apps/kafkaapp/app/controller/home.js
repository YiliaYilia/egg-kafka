'use strict';

module.exports = function * () {
  const producer = this.app.kafka.client;
  producer.send({ topic: 'topic1', messages: 'hi' });
  this.body = {
    status: 'success'
  };
};
