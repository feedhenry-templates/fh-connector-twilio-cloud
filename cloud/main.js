/*
 Sends an SMS with the twilio API
 @param to : recipient
 @param body : message body
 */
exports.twillio = function(params, cb){
  // Your accountSid and authToken from twilio.com/user/account
  var accountSid = process.env.TWILIO_SID,
  authToken = process.env.TWILIO_AUTH,
  client = require('twilio')(accountSid, authToken);

  client.sms.messages.create({
    body: params.body,
    to: params.to,
    from: process.env.TWILIO_NUMBER
  }, function(err, message) {
    return cb(err, message);
  });
};
