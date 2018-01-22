# eggjs kafka插件

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-kafka.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-kafka
[travis-image]: https://img.shields.io/travis/ntfs32/egg-kafka.svg?style=flat-square
[travis-url]: https://travis-ci.org/ntfs32/egg-kafka
[codecov-image]: https://codecov.io/gh/ntfs32/egg-kafka/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ntfs32/egg-kafka
[david-image]: https://img.shields.io/david/ntfs32/egg-kafka.svg?style=flat-square
[david-url]: https://david-dm.org/ntfs32/egg-kafka
[snyk-image]: https://snyk.io/test/github/ntfs32/egg-kafka/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/github/ntfs32/egg-kafka
[download-image]: https://img.shields.io/npm/dm/egg-kafka.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-kafka

- 待完善
# Install
```bash
npm install egg-kafka --save
```
- config/config.{env}.js:
```javascript
module.exports = appInfo => {
  config.kafka = {
    client: {
      host: 'localhost', // host
      port: '3306', // 端口号
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: true, // 是否加载到 agent 上，默认关闭
  };
  return config;
}
```

# API
## Producer
example:
```javascript
'use strict'

module.exports = function * () {
  // producer() optionl arguments true/false
  // it`s aysnc/sync to create topics in kafka-node
  let createTopicsResult = yield this.app.kafka.producer()
  .createTopicsAsync([ 'topic5' ], true )
  // send create topics request to the kafka server ,
  // but there not anything response,why ?
  let sendResult = yield this.app.kafka.producer()
    .sendAsync([{
       topic: 'topic5', 
       messages: 'test' + new Date().getSeconds(), 
       partition: 0 
      }]
    )
}
```

## HighLevelProducer same as Producer
example:
```javascript
'use strict'

module.exports = function * () {
  // producer() optionl arguments true/false
  // it`s aysnc/sync to create topics in kafka-node
  let createTopicsResult = yield this.app.kafka.highLevelProducer()
  .createTopicsAsync([ 'topic5' ], true )
  // send create topics request to the kafka server ,
  // but there not anything response,why ?
  let sendResult = yield this.app.kafka.highLevelProducer()
    .sendAsync([{
       topic: 'topic5', 
       messages: 'test' + new Date().getSeconds(), 
       partition: 0 
      }]
    )
}
```

-------------- 待完善 ----------------
##胡猪猪猪
## Comuser

## HighLevelConsumer

## ConsumerGroup

## Offset
