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

const Producer = require('kafka-node').Producer;
const Promise = require('bluebird');

/**
  * @constructor
  * @param {Object} Client : zookeeper connection instance,
  * @param {Object} Option : options for producer,
  */
const PrmiseProducer = function(...args) {
  const log = args[args.length - 1];
  delete args[args.length - 1];
  this.ProducerPrototype = new Producer(...args);
  this.producer = Promise.promisifyAll(this.ProducerPrototype);
  this.producer.onAsync('ready').then(function() {
    log.info('connection kafka server success');
  });
  this.producer.onAsync('error').then(function(err) {
    log.error(err);
  });
};

/**
 * Producer.instance
 *@method send
 *@return {Producer} ProducerAsync Instance
 */

PrmiseProducer.prototype.instance = function() {
  return this.producer;
};

module.exports = function(...args) {
  return new PrmiseProducer(...args).instance();
};
