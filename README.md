# FeedHenry Twilio Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-twilio-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-twilio-cloud)

The FeedHenry Twilio Connector. For more information on Twilio see: [twilio.github.io/twilio-node/](http://twilio.github.io/twilio-node/).

## Group Twilio Connector API

### SMS

Send an SMS from your Twilio account.

|              |                | 
|--------------|----------------|
| Endpoint     | /cloud/sms     |
| HTTP Method  | POST           |

#### Request (application/json)

##### Body

```json 
{
  "to": "recipient",
  "body": "message body"
}
```

#### Response 200 (application/json)
    
##### Body
            
```json
{
  "ok": "true"
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Unit tests

```shell
npm run unit
```

or

```shell
npm run test
```

### Unit coverage

```shell
npm run coverage
```