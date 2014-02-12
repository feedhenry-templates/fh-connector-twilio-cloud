FORMAT: 1A

# FeedHenry Twilio Service

Twilio cloud app for twilio connector. For more information see: [twilio.github.io/twilio-node/](http://twilio.github.io/twilio-node/).

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



