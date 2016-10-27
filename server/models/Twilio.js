import twilio from 'twilio';

// const accountSid = process.env.TWILLIO_TEST_SID;
// const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);
// console.log('client: ', client);
//
// client.messages.create({
//   to: '+14153210002',
//   from: process.env.TWILIO_TEST_PHONE,
//   body: 'Thank you for your donation. It has been received.',
// }, (err, message) => {
//   if (err) console.log('>>> ERROR: \n', err);
//   console.log('>>> SUCCESS: \n', message);
// });

// const app = express();
//
// app.post('/sms', (req, res) => {
//   const twiml = new twilio.TwimlResponse();
//   twiml.message('Thanks for your donation. It has been received.');
//   res.writeHead(200, { 'Content-Type': 'text/html' }).end(twiml.toString());
// });
//
// http.createServer(app).listen(8000, (err) => console.log(err || 'Server @ 8000'));

export const replyThanks = (cb) => {
  const twiml = new twilio.TwimlResponse();
  twiml.message('Thanks for your donation. It has been received.');
  cb(null, twiml.toString());
};

export const replyOk = (cb) => {
  const twiml = new twilio.TwimlResponse();
  twiml.message('Okie dokie');
  cb(null, twiml.toString());
};
