FORMAT: 1A

# FeedHenry Twilio Connector
[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-twilio-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-twilio-cloud)

The FeedHenry Twilio Connector. For more information on Twilio see: [twilio.github.io/twilio-node/](http://twilio.github.io/twilio-node/).

# Group Twilio Connector API

# SMS [/cloud/sms]

Send a Twilio SMS.

## SMS [POST] 

Send an SMS from your Twilio account.

+ Request (application/json)
    + Body
            {
              "to": "recipient",
              "body": "message body"
            }

+ Response 200 (application/json)
    + Body
            {
              "ok": "true"
            }


