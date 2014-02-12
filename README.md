FORMAT: 1A

# FeedHenry Twilio Connector

The FeedHenry Twilio Connector. For more information on Twilio see: [twilio.github.io/twilio-node/](http://twilio.github.io/twilio-node/).

# Group Twilio Service API

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



