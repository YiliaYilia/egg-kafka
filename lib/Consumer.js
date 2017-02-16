'use strict';

/**
 * Producer
 *@class Producer(client, [options])
 *@argument client: client which keeps a connection with the Kafka server.
 *@argument options: options for producer,
 *@example   {
      // Configuration for when to consider a message as acknowledged, default 1
    requireAcks: 1,
    // The amount of time in milliseconds to wait for all acks before considered, default 100ms
    ackTimeoutMs: 100,
    // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3), default 0
    partitionerType: 2
   }
 */

const Consumer = require('kafka-node').Consumer;
const Promise = require('bluebird');

/**
  * @constructor
  * @param {Object} Client : zookeeper connection instance,
  * @param {Object} Option : options for producer,
  */
const PrmiseConsumer = function(...args) {
  delete args[args.length - 1];
  this.ProducerPrototype = new Consumer(...args);
  this.producer = Promise.promisifyAll(this.ProducerPrototype);
};

/**
 * Producer.instance
 *@method send
 *@return {Producer} ProducerAsync Instance
 */

PrmiseConsumer.prototype.instance = function() {
  return this.producer;
};

module.exports = function(...args) {
  return new PrmiseConsumer(...args).instance();
};
