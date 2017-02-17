'use strict'

module.exports = function * () {
  let createTopicsResult = yield this.app.kafka.producer().createTopicsAsync(['topic5', 'topic6'])
  console.log(createTopicsResult)
  // send create topics request to the kafka server , but there not anything response,why ?
  let sendResult = yield this.app.kafka.producer().sendAsync([{ topic: 'topic5', messages: 'test' + new Date().getSeconds(), partition: 0 }])

  // let comsumerResult = yield this.app.kafka.comsumer({ topic: 'topic5', partition: 0 }, { autoCommit: false }).onAsync('message')

  // console.log(comsumerResult)
  this.body = {
    status: 'success'
  }
}
