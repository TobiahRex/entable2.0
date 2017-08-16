import dotenv from 'dotenv';
import twilio from 'twilio';
import express from 'express';

dotenv.load({ silent: true });
const accountSid = process.env.TWILIO_ENTABLE_SID;
const authToken = process.env.TWILIO_ENTABLE_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_ENTABLE_TEST_PHONE;
const client = twilio(accountSid, authToken);

client.messages.create({
  from: fromPhone,
  to: '+14153210002',
  body: 'Hi Toby.',
}, (err, message) => {
  if (err) return console.log('>>> ERROR: \n', err);
  return console.log('>>> SUCCESS: \n', message);
});

const app = express();
/*
  This sends a twilio text message whenever someone replies to our twilio number.  Twilio uses a registered webhook address to send a post request to this api address.
*/
app.post('/sms', (req, res) => {
  console.log('req.body: ', req.body);
  const twiml = new twilio.TwimlResponse();
  twiml.message('Yeah, yeah, i got the message.');
  const headers = { 'Content-Type': 'text/html' };
  res.writeHead(200, headers);
  res.end(twiml.toString());
});
