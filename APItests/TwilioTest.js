import dotenv from 'dotenv';
import twilio from 'twilio';
import http from 'http';
import express from 'express';

dotenv.load({ silent: true });
const accountSid = process.env.TWILIO_ENTABLE_TEST_SID;
const authToken = process.env.TWILIO_ENTABLE_TEST_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.messages.create({
  to: '+14153210002',
  from: '+15005550006',
  body: 'Thank you for your donation. It has been received.',
}, (err, message) => {
  if (err) return console.log('>>> ERROR: \n', err);
  return console.log('>>> SUCCESS: \n', message);
});

const app = express();
/*
  This sends a twilio text message whenever someone replies to our twilio number.  Twilio uses a registered webhook address to send a post request to this api address.
*/
app.post('/sms', (req, res) => {
  const twiml = new twilio.TwimlResponse();
  twiml.message('Thanks for your donation. It has been received.');
  const headers = { 'Content-Type': 'text/html' };
  res.writeHead(200, headers);
  res.end(twiml.toString());
});
