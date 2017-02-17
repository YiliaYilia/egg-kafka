'use strict'

exports.kafka = {
  client: {
    host: process.env['KAFKA_TEST_HOST'] || '',
    clientId: 'egg-kafka-clientid'
  },
  app: true,
  agent: true
}
exports.keys = 'test'
